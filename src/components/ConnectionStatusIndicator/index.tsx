import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDashboard } from '../../context/DashboardContext';
import { root, statusConfig, statusDot } from './styles';

export function ConnectionStatusIndicator() {
  const { connectionStatus } = useDashboard();
  const { color, label } = statusConfig[connectionStatus];
  return (
    <Box sx={root}>
      <Box sx={statusDot(color)} />
      <Typography variant="caption" color="text.secondary">{label}</Typography>
    </Box>
  );
}
