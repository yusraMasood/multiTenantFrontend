import Box from "@mui/material/Box";
import { colors } from "../../theme/colors";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {
  root,
  searchField,
  searchIcon,
  spacer,
  userBlock,
  avatar,
} from "./styles";

const iconSx = { width: 20, height: 20 };

export function Header() {
  return (
    <Box sx={root}>
      <TextField
        size="small"
        placeholder="Search"
        sx={searchField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Box
                component="img"
                src="/assets/search.png"
                alt=""
                sx={searchIcon}
              />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={spacer} />
      <IconButton size="small">
        <Box sx={{ bgcolor: colors.yellow, width: 35, height: 35, p: 1, borderRadius: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box component="svg" sx={iconSx} viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </Box>
        </Box>
      </IconButton>
      <IconButton size="small">
        <Box component="svg" sx={iconSx} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
        </Box>
      </IconButton>
      <IconButton size="small">
        <Box component="svg" sx={iconSx} viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </Box>
      </IconButton>
      <IconButton size="small">
        <Box component="svg" sx={iconSx} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        </Box>
      </IconButton>
      <Box sx={userBlock}>
        <Avatar src="/assets/user.png" alt="Chris" sx={avatar}>
          C
        </Avatar>
        <Box>
          <Typography variant="body2" fontWeight={600}>
            Chris
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Senior Member
          </Typography>
        </Box>
        <IconButton size="small">
          <Box component="svg" sx={iconSx} viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
}
