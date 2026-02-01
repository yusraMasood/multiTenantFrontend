import type { SxProps, Theme } from '@mui/material/styles';

export const root: SxProps<Theme> = {
	flex: 1,
	p: 3,
	display: 'flex',
	flexDirection: 'column',
	minHeight: 0,
};

export const headerRow: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	mb: 2,
	flexWrap: 'wrap',
	gap: 2,
};

export const headerActions: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	gap: 2,
};

export const tabsWrapper: SxProps<Theme> = {
	width: '100%',
	bgcolor: '#fff',
	p: 2,
	borderRadius: '24px',
	mb: 2,
};

export const tabsPaper: SxProps<Theme> = {
	bgcolor: '#f6fbff',
	borderRadius: '40px',
	px: 2,
	py: 1,
	overflow: 'hidden',
};

export const tabs: SxProps<Theme> = {
	minHeight: 48,
	'& .MuiTabs-flexContainer': {
		gap: 1,
	},
};

export const tab = (selected: boolean): SxProps<Theme> => ({
	textTransform: 'none',
	fontWeight: 600,
	minHeight: 40,
	minWidth: 90,
	borderRadius: '999px',
	bgcolor: selected ? '#e6f2ff' : '#fff',
	color: '#344054',
	px: 3,
	transition: 'all 0.25s ease',
	'&:hover': {
		bgcolor: '#eef6ff',
	},
});

export const searchField: SxProps<Theme> = {
	mb: 2,
	maxWidth: 360,
	'& .MuiOutlinedInput-root': { borderRadius: 2 },
};

export const searchIcon: SxProps<Theme> = {
	width: 20,
	height: 20,
};

export const tablePaper: SxProps<Theme> = {
	flex: 1,
	minHeight: 0,
	display: 'flex',
	flexDirection: 'column',
	borderRadius: 2,
	boxShadow: 1,
};

export const tableContainer: SxProps<Theme> = {
	flex: 1,
	overflow: 'auto',
};

export const tableRow: SxProps<Theme> = {
	cursor: 'pointer',
};

export const statusChip: SxProps<Theme> = {
	fontWeight: 600,
};
