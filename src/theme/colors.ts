/**
 * Central color palette for the frontend.
 * Use these tokens instead of hardcoded hex/rgba values.
 */
export const colors = {
	// Primary / brand
	blue: '#356DAD',
	blueDark: '#1D518D',
	accent: '#42a5f5',
	accentLight: 'rgba(66, 165, 245, 0.2)',
	primary: '#1976d2',

	// Neutrals
	white: '#ffffff',
	black: '#000000',
	shadow: '#00000026',
	grey: '#9e9e9e',
	borderGray: '#DBDBDB',

	// Sidebar
	sidebarMuted: 'rgba(255,255,255,0.5)',
	sidebarBorder: 'rgba(255,255,255,0.1)',
	navSelectedBg: 'rgba(255,255,255,0.08)',

	// Surfaces & gradients
	gradientLight: '#DDEBEF',
	gradientLightAlpha: '#C7DBE540',
	borderLight: '#DEECF0',
	backgroundDefault: '#f5f5f5',
	hoverLightBlue: '#eef6ff',
	hoverFb: '#fffbfb',

	// Text
	textDark: '#344054',
	textMuted: '#42566C',
	placeholder: '#9e9e9e',

	// Status
	success: '#4caf50',
	error: '#f44336',
	errorRed: '#FF0505',
	warning: '#ff9800',

	// Table
	tableHeaderBg: '#F1F7F9',
	tableRowAlt: '#D8E9EE',

	// UI
	yellow: 'yellow',
} as const;

export type Colors = typeof colors;
