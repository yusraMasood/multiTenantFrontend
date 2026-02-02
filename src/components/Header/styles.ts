import type { SxProps, Theme } from "@mui/material/styles";

export const root: SxProps<Theme> = {
  px: 3,
  py: 2,
  bgcolor: "background.paper",
  boxShadow: 1,
  display: "flex",
  alignItems: "center",
  gap: 2,
  flexWrap: "wrap",
};

export const searchField: SxProps<Theme> = {
  minWidth: 280,
  "& .MuiOutlinedInput-root": { borderRadius: 2 },
};

export const searchIcon: SxProps<Theme> = {
  width: 20,
  height: 20,
};

export const spacer: SxProps<Theme> = {
  flex: 1,
};

export const userBlock: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const avatar: SxProps<Theme> = {
  width: 36,
  height: 36,
};
