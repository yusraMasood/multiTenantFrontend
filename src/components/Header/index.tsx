import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Phone from '@mui/icons-material/Phone';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Description from '@mui/icons-material/Description';
import HelpOutline from '@mui/icons-material/HelpOutline';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { root, searchField, searchIcon, spacer, userBlock, avatar } from './styles';

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
              <Box component="img" src="/assets/search.png" alt="" sx={searchIcon} />
            </InputAdornment>
          ),
        }}
      />
      <Box sx={spacer} />
      <IconButton size="small"><Phone fontSize="small" /></IconButton>
      <IconButton size="small"><CalendarToday fontSize="small" /></IconButton>
      <IconButton size="small"><Description fontSize="small" /></IconButton>
      <IconButton size="small"><HelpOutline fontSize="small" /></IconButton>
      <Box sx={userBlock}>
        <Avatar src="/assets/user.png" alt="Chris" sx={avatar}>C</Avatar>
        <Box>
          <Typography variant="body2" fontWeight={600}>Chris</Typography>
          <Typography variant="caption" color="text.secondary">Senior Member</Typography>
        </Box>
        <IconButton size="small"><KeyboardArrowDown /></IconButton>
      </Box>
    </Box>
  );
}
