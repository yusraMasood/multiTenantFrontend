import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Sidebar } from './components/Sidebar/index';
import { Header } from './components/Header/index';
import { ClubAccess } from './components/ClubAccess/index';
import { MemberProfileDialog } from './components/MemberProfileDialog/index';
import { AddMemberDialog } from './components/AddMemberDialog/index';
import { DashboardProvider, useDashboard } from './context/DashboardContext';

function AppContent() {
  const { tenantId, fetchCheckIns, connectWebSocket } = useDashboard();

  useEffect(() => {
    fetchCheckIns();
    connectWebSocket();
  }, [tenantId, fetchCheckIns, connectWebSocket]);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', fontFamily: 'Poppins, sans-serif' }}>
      <Sidebar />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Header />
        <ClubAccess />
      </Box>
      <MemberProfileDialog />
      <AddMemberDialog />
    </Box>
  );
}

export default function App() {
  return (
    <DashboardProvider>
      <AppContent />
    </DashboardProvider>
  );
}
