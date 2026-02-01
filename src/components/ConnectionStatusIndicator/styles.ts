import type { SxProps, Theme } from '@mui/material/styles';

export const statusConfig = {
	connected: { color: '#4caf50', label: 'Connected' },
	disconnected: { color: '#f44336', label: 'Disconnected' },
	reconnecting: { color: '#ff9800', label: 'Reconnecting' },
} as const;

export const root: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	gap: 0.5,
};

export const statusDot = (color: string): SxProps<Theme> => ({
	fontSize: 10,
	color,
});
