import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import type { CheckInEvent, MemberProfile, ConnectionStatus } from '../types';

const API_BASE = '/api';
const WS_BASE = `${typeof location !== 'undefined' && location.protocol === 'https:' ? 'wss:' : 'ws:'}//${typeof location !== 'undefined' ? location.host : ''}`;

export const TENANTS = ['clubA', 'clubB', 'clubC'] as const;
export type TenantId = (typeof TENANTS)[number];

interface DashboardState {
  tenantId: TenantId;
  checkIns: CheckInEvent[];
  searchQuery: string;
  selectedMemberId: string | null;
  memberProfile: MemberProfile | null;
  connectionStatus: ConnectionStatus;
  addMemberOpen: boolean;
}

interface DashboardContextValue extends DashboardState {
  setTenantId: (id: TenantId) => void;
  setSearchQuery: (q: string) => void;
  setSelectedMemberId: (id: string | null) => void;
  setMemberProfile: (profile: MemberProfile | null) => void;
  setAddMemberOpen: (open: boolean) => void;
  fetchCheckIns: () => Promise<void>;
  fetchMemberProfile: (memberId: string) => Promise<void>;
  connectWebSocket: () => void;
  disconnectWebSocket: () => void;
  addMember: (data: { memberId: string; name: string; email: string; facility: string }) => Promise<void>;
}

const initialState: DashboardState = {
  tenantId: 'clubA',
  checkIns: [],
  searchQuery: '',
  selectedMemberId: null,
  memberProfile: null,
  connectionStatus: 'disconnected',
  addMemberOpen: false,
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DashboardState>(initialState);
  const wsRef = useRef<WebSocket | null>(null);
  const tenantIdRef = useRef<TenantId>(state.tenantId);
  const connectWebSocketRef = useRef<() => void>(() => { });
  const selectedMemberIdRef = useRef<string | null>(state.selectedMemberId);
  const fetchMemberProfileRef = useRef<(memberId: string) => Promise<void>>(async () => { });

  tenantIdRef.current = state.tenantId;
  selectedMemberIdRef.current = state.selectedMemberId;

  const disconnectWebSocket = useCallback(() => {
    const ws = wsRef.current;
    if (ws) {
      ws.close();
      wsRef.current = null;
      setState((s) => ({ ...s, connectionStatus: 'disconnected' }));
    }
  }, []);

  const prependCheckIn = useCallback((event: CheckInEvent) => {
    setState((s) => {
      if (event.tenantId !== s.tenantId) return s;
      return {
        ...s,
        checkIns: [event, ...s.checkIns.filter((c) => c.eventId !== event.eventId)],
      };
    });
    if (selectedMemberIdRef.current === event.memberId) {
      fetchMemberProfileRef.current(event.memberId);
    }
  }, []);

  const connectWebSocket = useCallback(() => {
    disconnectWebSocket();
    const tenantId = state.tenantId;
    const wsUrl = `${WS_BASE}/ws?tenantId=${tenantId}`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;
    setState((s) => ({ ...s, connectionStatus: 'reconnecting' }));

    ws.onopen = () => setState((s) => ({ ...s, connectionStatus: 'connected' }));
    ws.onclose = () => {
      wsRef.current = null;
      setState((s) => ({ ...s, connectionStatus: 'disconnected' }));
      setTimeout(() => {
        if (tenantIdRef.current === tenantId && !wsRef.current) {
          connectWebSocketRef.current();
        }
      }, 2000);
    };
    ws.onerror = () => setState((s) => ({ ...s, connectionStatus: 'disconnected' }));
    ws.onmessage = (ev) => {
      try {
        const { type, event: evt } = JSON.parse(ev.data as string);
        if (type === 'checkin' && evt) prependCheckIn(evt);
      } catch { }
    };
  }, [state.tenantId, disconnectWebSocket, prependCheckIn]);

  connectWebSocketRef.current = connectWebSocket;

  const resetOnTenantSwitch = useCallback(() => {
    disconnectWebSocket();
    setState((s) => ({
      ...s,
      checkIns: [],
      searchQuery: '',
      selectedMemberId: null,
      memberProfile: null,
      connectionStatus: 'disconnected',
    }));
  }, [disconnectWebSocket]);

  const setTenantId = useCallback(
    (tenantId: TenantId) => {
      resetOnTenantSwitch();
      setState((s) => ({ ...s, tenantId }));
    },
    [resetOnTenantSwitch]
  );


  const fetchCheckIns = useCallback(async () => {
    const tenantId = state.tenantId;
    try {
      const res = await fetch(`${API_BASE}/checkins?tenantId=${tenantId}`);
      if (!res.ok) throw new Error('Failed to fetch check-ins');
      const data: CheckInEvent[] = await res.json();
      setState((s) => (s.tenantId === tenantId ? { ...s, checkIns: data } : s));
    } catch {
      setState((s) => (s.tenantId === tenantId ? { ...s, checkIns: [] } : s));
    }
  }, [state.tenantId]);

  const fetchMemberProfile = useCallback(
    async (memberId: string) => {
      const tenantId = state.tenantId;
      try {
        const res = await fetch(`${API_BASE}/members/${memberId}?tenantId=${tenantId}`);
        if (!res.ok) throw new Error('Member not found');
        const profile: MemberProfile = await res.json();
        setState((s) =>
          s.tenantId === tenantId ? { ...s, memberProfile: profile, selectedMemberId: memberId } : s
        );
      } catch {
        setState((s) => (s.tenantId === tenantId ? { ...s, memberProfile: null, selectedMemberId: null } : s));
      }
    },
    [state.tenantId]
  );

  fetchMemberProfileRef.current = fetchMemberProfile;

  const addMember = useCallback(
    async (data: { memberId: string; name: string; email: string; facility: string }) => {
      const tenantId = state.tenantId;
      const res = await fetch(`${API_BASE}/checkins`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId,
          memberId: data.memberId,
          name: data.name,
          email: data.email,
          facility: data.facility,
          status: 'ACTIVE',
        }),
      });
      if (!res.ok) throw new Error('Failed to add member');
      const event: CheckInEvent = await res.json();
      prependCheckIn(event);
      setState((s) => ({ ...s, addMemberOpen: false }));
    },
    [state.tenantId, prependCheckIn]
  );

  const value: DashboardContextValue = {
    ...state,
    setTenantId,
    setSearchQuery: (q) => setState((s) => ({ ...s, searchQuery: q })),
    setSelectedMemberId: (id) => setState((s) => ({ ...s, selectedMemberId: id })),
    setMemberProfile: (profile) => setState((s) => ({ ...s, memberProfile: profile })),
    setAddMemberOpen: (open) => setState((s) => ({ ...s, addMemberOpen: open })),
    fetchCheckIns,
    fetchMemberProfile,
    connectWebSocket,
    disconnectWebSocket,
    addMember,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard(): DashboardContextValue {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error('useDashboard must be used within DashboardProvider');
  return ctx;
}
