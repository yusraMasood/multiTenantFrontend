import type { SxProps, Theme } from '@mui/material/styles';
import { colors } from '../../theme/colors';

export const EXPANDED_WIDTH = 240;
export const COLLAPSED_WIDTH = 72;
export const LOGO_WIDTH = 317.8;
export const LOGO_HEIGHT = 90;

export const setupItems = [
	'Event Setup',
	'Series Setup - KB',
	'Series Setup - OTB',
	'Race Calendar',
	'A Series Races',
];

export const configItems = [
	{ label: 'Club', active: true },
	{ label: 'HC Defs', active: false },
	{ label: 'Score Point Defs', active: false },
	{ label: 'Score Penalty Defs', active: false },
];

export const sidebarWrapper = (open: boolean): SxProps<Theme> => ({
	position: 'relative',
	width: open ? EXPANDED_WIDTH : COLLAPSED_WIDTH,
	flexShrink: 0,
	transition: 'width 0.3s ease-in-out',
	p: 0, m: 0
	//outline: '2px solid red',
});

export const root = (open: boolean): SxProps<Theme> => ({
	width: '100%',
	minHeight: '100vh',
	background: `linear-gradient(180deg, ${colors.blue} 0%, ${colors.blueDark} 100%)`,
	color: colors.white,
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '0 16px 16px 0',
	boxShadow: 2,
	transition: 'width 0.3s ease-in-out',
	overflow: 'hidden',
	padding: 0,
	margin: 0,
	pt: 0,
	mt: 0,
	boxSizing: 'border-box',
	p: 0, m: 0
});

export const logoArea: SxProps<Theme> = {
	width: '100%',
	height: LOGO_HEIGHT,
	minHeight: LOGO_HEIGHT,
	//display: 'flex',
	position: 'absolute',
	top: -20,
	alignItems: 'center',
	justifyContent: 'center',
	borderBottom: `1px solid ${colors.sidebarBorder}`,
	boxSizing: 'border-box',
	p: 0, m: 0
};

export const logoImage = (open: boolean): SxProps<Theme> => ({
	maxWidth: open ? LOGO_WIDTH : COLLAPSED_WIDTH,
	height: LOGO_HEIGHT,
	objectFit: 'contain',
	display: 'block',
});

export const toggleButton: SxProps<Theme> = {
	position: 'absolute',
	right: 0,
	top: LOGO_HEIGHT,
	transform: 'translateX(50%)',
	width: 35,
	height: 50,
	borderRadius: '40px',
	bgcolor: colors.blue,
	//boxShadow: 2,
	zIndex: 10,
	'&:hover': { bgcolor: colors.blue },
	'& .MuiSvgIcon-root': { fontSize: 16, color: 'grey.700' },
};

export const navList: SxProps<Theme> = {
	flex: 1,
	py: 2,
	px: 1.5,
	overflow: 'auto',
	fontFamily: 'Poppins, sans-serif',
	marginTop: 10,
};

export const navGroup: SxProps<Theme> = {
	mb: 2,
};

export const navGroupHeader: SxProps<Theme> = {
	display: 'flex',
	alignItems: 'center',
	gap: 1.5,
	px: 1,
	mb: 1,
};

export const navGroupIcon: SxProps<Theme> = {
	width: 16,
	height: 16,
	opacity: 0.7,
	filter: 'brightness(0) invert(1)',
};

export const navGroupTitle: SxProps<Theme> = {
	fontFamily: 'Poppins, sans-serif',
	fontWeight: 600,
	fontSize: 16,
	letterSpacing: '0.05em',
	color: colors.sidebarMuted,
};

export const navItemButton: SxProps<Theme> = {
	py: 0.75,
	borderRadius: 1,
};

export const navItemDot: SxProps<Theme> = {
	width: 8,
	height: 8,
	borderRadius: '50%',
	bgcolor: colors.sidebarMuted,
	mr: 1.5,
};

export const navItemText: SxProps<Theme> = {
	fontFamily: 'Poppins, sans-serif',
	fontWeight: 600,
	fontSize: 16,
};

export const navItemSelected = (active: boolean): SxProps<Theme> => ({
	py: 0.75,
	borderRadius: 1,
	position: 'relative',
	'&.Mui-selected': {
		bgcolor: colors.navSelectedBg,
		color: colors.white,
		'&::before': {
			content: '""',
			position: 'absolute',
			left: 0,
			top: 0,
			bottom: 0,
			width: 3,
			bgcolor: colors.accent,
			borderRadius: '0 2px 2px 0',
		},
	},
});

export const navItemDotActive = (active: boolean): SxProps<Theme> => ({
	width: 8,
	height: 8,
	borderRadius: '50%',
	bgcolor: active ? colors.accent : colors.sidebarMuted,
	mr: 1.5,
});

export const navItemCollapsed: SxProps<Theme> = {
	justifyContent: 'center',
	py: 1.5,
};

export const navItemCollapsedIcon: SxProps<Theme> = {
	width: 20,
	height: 20,
	opacity: 0.9,
	filter: 'brightness(0) invert(1)',
};

export const navItemCollapsedActive: SxProps<Theme> = {
	justifyContent: 'center',
	py: 1.5,
	bgcolor: colors.accentLight,
	borderRadius: 1,
	mx: 0.5,
};

export const navItemCollapsedIconActive: SxProps<Theme> = {
	width: 20,
	height: 20,
	filter: 'brightness(0) invert(1)',
};

export const configGroup: SxProps<Theme> = {
	mt: 2,
};

export const bottomArea = (open: boolean): SxProps<Theme> => ({
	minHeight: 64,
	display: 'flex',
	alignItems: 'center',
	justifyContent: open ? 'flex-start' : 'center',
	px: open ? 2 : 0,
	py: 1,
	borderTop: `1px solid ${colors.sidebarBorder}`,
	flexShrink: 0,
});

export const bottomImage: SxProps<Theme> = {
	height: 40,
	width: 'auto',
	maxWidth: '100%',
	objectFit: 'contain',
	flexShrink: 0,
};
