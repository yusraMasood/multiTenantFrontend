import type { SxProps, Theme } from '@mui/material/styles';
import { colors } from '../../theme/colors';

export const statusConfig = {
	connected: { color: colors.success, label: 'Connected' },
	disconnected: { color: colors.error, label: 'Disconnected' },
	reconnecting: { color: colors.warning, label: 'Reconnecting' },
} as const;

export const root: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	gap: 0.5,
};

export const statusDot = (color: string): SxProps<Theme> => ({
	width: 8,
	height: 8,
	borderRadius: '50%',
	bgcolor: color,
	flexShrink: 0,
});
