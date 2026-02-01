import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';
import { useDashboard } from '../../context/DashboardContext';
import { root, statusConfig, statusDot } from './styles';

export function ConnectionStatusIndicator() {
  const { connectionStatus } = useDashboard();
  const { color, label } = statusConfig[connectionStatus];
  return (
    <Box sx={root}>
      <FiberManualRecord sx={statusDot(color)} />
      <Typography variant="caption" color="text.secondary">{label}</Typography>
    </Box>
  );
}
