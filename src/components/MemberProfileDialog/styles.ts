import type { SxProps, Theme } from '@mui/material/styles';

export const paper: SxProps<Theme> = {
	borderRadius: 2,
};

export const titleBar: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};

export const content: SxProps<Theme> = {
	display: 'flex',
	flexDirection: 'column',
	gap: 2,
};

export const section: SxProps<Theme> = {};

export const recentSection: SxProps<Theme> = {
	mb: 1,
};

export const recentList: SxProps<Theme> = {
	display: 'flex',
	flexDirection: 'column',
	gap: 0.5,
};

export const recentItem: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	gap: 1,
};
