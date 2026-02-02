import type { SxProps, Theme } from "@mui/material/styles";
import { colors } from "../../theme/colors";

export const root: SxProps<Theme> = {
	flex: 1,
	p: 3,
	display: "flex",
	flexDirection: "column",
	minHeight: 0,
	bgcolor: colors.gradientLightAlpha,
};

export const headerText: SxProps<Theme> = {
	fontSize: "20px",
	fontWeight: 700,
	color: "primary.dark",
	bgcolor: colors.white,
	px: "24px",
	borderTopLeftRadius: "12px",
	borderTopRightRadius: "12px",
};

export const headerRow: SxProps<Theme> = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	flexWrap: "wrap",
	gap: 2,
};

export const headerActions: SxProps<Theme> = {
	display: "flex",
	alignItems: "center",
	gap: 2,
};

export const addMemberButton: SxProps<Theme> = {
	bgcolor: colors.blue,
	color: colors.white,
	borderRadius: "25px",
	marginBottom: "10px",
	textTransform: "none",
	fontWeight: 600,
	"&:hover": {
		bgcolor: colors.blueDark,
	},
};

export const tabsWrapper: SxProps<Theme> = {
	width: "100%",
	borderTopLeftRadius: 0,
	borderBottomLeftRadius: 0,
};

export const contentPaper: SxProps<Theme> = {
	bgcolor: colors.white,
	borderBottomLeftRadius: "20px",
	borderBottomRightRadius: "20px",
	borderTopRightRadius: 0,
	borderTopLeftRadius: 0,
	px: 2,
	py: 1,
	overflow: "hidden",
};

export const tabsPaper: SxProps<Theme> = {
	borderRadius: 0,
	px: 0,
	overflow: "hidden",
};

export const tabs: SxProps<Theme> = {
	minHeight: 48,
	"& .MuiTabs-flexContainer": {
		gap: 1,
	},
};

export const tab = (selected: boolean): SxProps<Theme> => ({
	fontSize: "18px",
	textTransform: "none",
	fontWeight: 500,
	minHeight: "45px",
	minWidth: "91px",
	border: `1px solid ${colors.borderLight}`,
	borderBottom: selected ? "0px" : "",
	borderTopLeftRadius: selected ? "10px" : "999px",
	borderBottomLeftRadius: selected ? "0px" : "999px",
	borderBottomRightRadius: selected ? "0px" : "999px",
	borderTopRightRadius: selected ? "10px" : "999px",
	mt: 1,
	mb: selected ? 0 : 1,
	background: selected
		? `linear-gradient(90deg, ${colors.gradientLight} 0%, ${colors.white} 100%)`
		: colors.white,
	color: colors.textDark,
	padding: "9px 16px",
	"&:hover": {
		background: selected
			? `linear-gradient(90deg, ${colors.gradientLight} 0%, ${colors.white} 100%)`
			: colors.hoverLightBlue,
	},
});

export const searchField: SxProps<Theme> = {
	mt: 2,
	mb: 2,
	"& .MuiOutlinedInput-root": {
		borderRadius: "12px",
		height: "30px",
		width: "750px",
	},
};

export const searchIcon: SxProps<Theme> = {
	width: 15,
	height: 15,
};

export const tablePaper: SxProps<Theme> = {
	flex: 1,
	minHeight: 0,
	display: "flex",
	flexDirection: "column",
	borderRadius: 2,
	boxShadow: 1,
};

export const tableContainer: SxProps<Theme> = {
	flex: 1,
	overflow: "auto",
};

export const tableHeaderRow: SxProps<Theme> = {
	"& th": {
		bgcolor: colors.tableHeaderBg,
		fontWeight: 600,
	},
};

export const tableRow = (index: number): SxProps<Theme> => ({
	cursor: "pointer",
	bgcolor: index % 2 === 0 ? colors.white : colors.tableRowAlt,
});

export const statusChip: SxProps<Theme> = {
	fontWeight: 600,
};
