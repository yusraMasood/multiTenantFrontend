import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import { useDashboard } from '../../context/DashboardContext';
import { paper, titleBar, content, section, recentSection, recentList, recentItem } from './styles';

export function MemberProfileDialog() {
  const { memberProfile, selectedMemberId, setSelectedMemberId, setMemberProfile } = useDashboard();
  const open = Boolean(selectedMemberId && memberProfile);

  const handleClose = () => {
    setSelectedMemberId(null);
    setMemberProfile(null);
  };

  if (!memberProfile) return null;

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth PaperProps={{ sx: paper }}>
      <DialogTitle sx={titleBar}>
        <Typography variant="h6">Member Profile</Typography>
        <IconButton size="small" onClick={handleClose}>
          <Box component="svg" sx={{ width: 24, height: 24 }} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </Box>
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={content}>
          <Box sx={section}>
            <Typography variant="caption" color="text.secondary">Member #</Typography>
            <Typography fontWeight={600}>{memberProfile.memberId}</Typography>
          </Box>
          <Box sx={section}>
            <Typography variant="caption" color="text.secondary">Name</Typography>
            <Typography fontWeight={600}>{memberProfile.name}</Typography>
          </Box>
          <Box sx={section}>
            <Typography variant="caption" color="text.secondary">Email</Typography>
            <Typography>{memberProfile.email}</Typography>
          </Box>
          <Box sx={section}>
            <Typography variant="subtitle2" sx={recentSection}>Recent check-ins</Typography>
            {memberProfile.recentCheckIns.length === 0 ? (
              <Typography variant="body2" color="text.secondary">No recent check-ins</Typography>
            ) : (
              <Box sx={recentList}>
                {memberProfile.recentCheckIns.map((c) => (
                  <Box key={c.eventId} sx={recentItem}>
                    <Chip label={c.status} size="small" color={c.status === 'ACTIVE' ? 'success' : 'error'} />
                    <Typography variant="body2">{c.facility}</Typography>
                    <Typography variant="caption" color="text.secondary">{c.timestamp}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
