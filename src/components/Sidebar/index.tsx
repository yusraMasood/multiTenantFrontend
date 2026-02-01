import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import {
  root,
  logoArea,
  logoImage,
  toggleButton,
  navList,
  navGroup,
  navGroupHeader,
  navGroupIcon,
  navGroupTitle,
  navItemButton,
  navItemDot,
  navItemText,
  navItemSelected,
  navItemDotActive,
  navItemCollapsed,
  navItemCollapsedIcon,
  navItemCollapsedActive,
  navItemCollapsedIconActive,
  configGroup,
  bottomArea,
  bottomImage,
  setupItems,
  configItems,
} from './styles';

export function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={root(open)}>
      <Box sx={logoArea}>
        <Box
          component="img"
          src={open ? '/assets/logo.png' : '/assets/logo-collapsed.png'}
          alt="Logo"
          sx={logoImage(open)}
        />
      </Box>

      <IconButton
        onClick={() => setOpen((o) => !o)}
        size="small"
        sx={toggleButton}
      >
        {open ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>

      <List sx={navList}>
        <Box sx={navGroup}>
          {open && (
            <Box sx={navGroupHeader}>
              <Box component="img" src="/assets/icon-document.png" alt="" sx={navGroupIcon} />
              <Typography variant="caption" sx={navGroupTitle}>
                SETUP
              </Typography>
            </Box>
          )}
          {open ? (
            setupItems.map((label) => (
              <ListItemButton key={label} sx={navItemButton}>
                <Box sx={navItemDot} />
                <ListItemText primary={label} primaryTypographyProps={{ sx: navItemText }} />
              </ListItemButton>
            ))
          ) : (
            <ListItemButton sx={navItemCollapsed}>
              <Box component="img" src="/assets/icon-document.png" alt="" sx={navItemCollapsedIcon} />
            </ListItemButton>
          )}
        </Box>

        <Box sx={configGroup}>
          {open && (
            <Box sx={navGroupHeader}>
              <Box component="img" src="/assets/icon-members.png" alt="" sx={navGroupIcon} />
              <Typography variant="caption" sx={navGroupTitle}>
                CONFIGURATION
              </Typography>
            </Box>
          )}
          {open ? (
            configItems.map(({ label, active }) => (
              <ListItemButton key={label} selected={active} sx={navItemSelected(active)}>
                <Box sx={navItemDotActive(active)} />
                <ListItemText primary={label} primaryTypographyProps={{ sx: navItemText }} />
              </ListItemButton>
            ))
          ) : (
            <>
              <ListItemButton sx={navItemCollapsedActive} title="Club">
                <Box component="img" src="/assets/icon-members.png" alt="" sx={navItemCollapsedIconActive} />
              </ListItemButton>
              <ListItemButton sx={navItemCollapsed} title="HC Defs">
                <Box component="img" src="/assets/icon-target.png" alt="" sx={navItemCollapsedIcon} />
              </ListItemButton>
              <ListItemButton sx={navItemCollapsed} title="Score Point Defs">
                <Box component="img" src="/assets/icon-document.png" alt="" sx={navItemCollapsedIcon} />
              </ListItemButton>
              <ListItemButton sx={navItemCollapsed} title="Score Penalty Defs">
                <Box component="img" src="/assets/icon-document.png" alt="" sx={navItemCollapsedIcon} />
              </ListItemButton>
            </>
          )}
        </Box>
      </List>

      <Box sx={bottomArea(open)}>
        <Box
          component="img"
          src={open ? '/assets/top-yacht.png' : '/assets/bottom-collapsed.png'}
          alt={open ? 'Top Yacht' : ''}
          sx={bottomImage}
        />
      </Box>
    </Box>
  );
}
