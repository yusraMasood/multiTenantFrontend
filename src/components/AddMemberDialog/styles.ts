import type { SxProps, Theme } from '@mui/material/styles';

export const FACILITIES = ['Lounge', 'Gym', 'Pool', 'Spa', 'Restaurant'];

export const modalBox: SxProps<Theme> = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '50%',
	maxWidth: 560,
	backgroundColor: '#FFFFFF',
	border: '1px solid #DBDBDB',
	borderRadius: '24px',
	boxShadow: '0px 1px 20px #00000026',
	boxSizing: 'border-box',
	overflow: 'hidden',
	display: 'flex',
	flexDirection: 'column',
	gap: '32px',
};

export const headerBox: SxProps<Theme> = {
	borderBottom: '1px solid #DBDBDB',
	padding: '20px 32px',
};

export const heading: SxProps<Theme> = {
	padding: 0,
	margin: 0,
	fontFamily: 'Poppins, sans-serif',
	fontWeight: 600,
	fontSize: '20px',
	textTransform: 'uppercase',
	color: '#356DAD',
	lineHeight: '100%',
	letterSpacing: '3px',
};

export const formBox: SxProps<Theme> = {
	width: '100%',
	display: 'flex',
	gap: '32px',
	flexWrap: 'wrap',
	justifyContent: 'space-around',
	alignItems: 'center',
	padding: '0px 32px',
};

export const inputLabel: SxProps<Theme> = {
	fontFamily: 'Poppins, sans-serif',
	textTransform: 'uppercase',
	color: '#42566C',
	fontWeight: 600,
	width: '100%',
	fontSize: '14px',
	padding: 0,
};

export const requiredAsterisk: SxProps<Theme> = {
	fontSize: '14px',
	color: '#FF0505',
	fontWeight: 700,
};

export const formControl: SxProps<Theme> = {
	width: '45%',
	minWidth: 200,
	padding: 0,
};

export const footerBox: SxProps<Theme> = {
	borderTop: '1px solid #DBDBDB',
	padding: '12px 32px',
	gap: '12px',
	width: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
};

export const cancelButton: SxProps<Theme> = {
	width: 96,
	height: 40,
	backgroundColor: '#FFFFFF',
	border: '1px solid #356DAD',
	color: '#356DAD',
	'&:hover': {
		backgroundColor: '#fffbfb',
		border: '1px solid #356DAD',
		color: '#356DAD',
	},
};

export const addButton: SxProps<Theme> = {
	width: 69,
	height: 40,
};

export const errorText: SxProps<Theme> = {
	width: '100%',
	padding: '0 32px',
};

export const selectPlaceholder: SxProps<Theme> = {
	color: '#9e9e9e',
};
