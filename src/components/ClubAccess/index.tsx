import { useMemo } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { colors } from "../../theme/colors";
import {
  useDashboard,
  TENANTS,
  type TenantId,
} from "../../context/DashboardContext";
import { ConnectionStatusIndicator } from "../ConnectionStatusIndicator";
import {
  root,
  headerText,
  headerRow,
  headerActions,
  addMemberButton,
  tabsWrapper,
  tabsPaper,
  tabs,
  tab,
  searchField,
  contentPaper,
  tablePaper,
  tableContainer,
  tableHeaderRow,
  tableRow,
  statusChip,
} from "./styles";

const tabLabels: Record<TenantId, string> = {
  clubA: "Club A",
  clubB: "Club B",
  clubC: "Club C",
};

export function ClubAccess() {
  const {
    tenantId,
    setTenantId,
    checkIns,
    searchQuery,
    setSearchQuery,
    fetchMemberProfile,
    setAddMemberOpen,
  } = useDashboard();

  const filteredCheckIns = useMemo(() => {
    if (!searchQuery.trim()) return checkIns;
    const q = searchQuery.toLowerCase().trim();
    return checkIns.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.memberId.toLowerCase().includes(q),
    );
  }, [checkIns, searchQuery]);

  const handleTabChange = (_: React.SyntheticEvent, value: string) => {
    setTenantId(value as TenantId);
  };

  return (
    <Box sx={root}>
      <Box sx={headerRow}>
        <Typography sx={headerText}>CLUB ACCESS</Typography>

        <Box sx={headerActions}>
          <ConnectionStatusIndicator />
          <Button variant="contained" onClick={() => setAddMemberOpen(true)} sx={addMemberButton}>
            ADD MEMBER
          </Button>
        </Box>
      </Box>

      <Paper sx={contentPaper}>
        <Box sx={tabsWrapper}>
          <Paper elevation={0} sx={tabsPaper}>
            <Tabs
              value={tenantId}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons={false}
              TabIndicatorProps={{ style: { display: "none" } }}
              sx={tabs}
            >
              {TENANTS.map((id) => (
                <Tab
                  key={id}
                  label={tabLabels[id]}
                  value={id}
                  disableRipple
                  sx={tab(tenantId === id)}
                />
              ))}
            </Tabs>
          </Paper>
          <Box
            sx={{
              background: `linear-gradient(-90deg, ${colors.gradientLight} 0%, ${colors.white} 100%)`,
              width: "100%",
              height: "30px",
            }}
          ></Box>
        </Box>
        <TextField
          size="small"
          placeholder="Search by member name or ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={searchField}
        //InputProps={{
        //  startAdornment: (
        //    <InputAdornment position="start">
        //      <Box
        //        component="img"
        //        src="/assets/search.png"
        //        alt=""
        //        sx={searchIcon}
        //      />
        //    </InputAdornment>
        //  ),
        //}}
        />

        <Paper sx={tablePaper}>
          <TableContainer sx={tableContainer}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow sx={tableHeaderRow}>
                  <TableCell>
                    <TableSortLabel>MEMBER#</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>MEMBER</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>FACILITY</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>STATUS</TableSortLabel>
                  </TableCell>
                  <TableCell>
                    <TableSortLabel>TIME</TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCheckIns.map((row, index) => (
                  <TableRow
                    key={row.eventId}
                    hover
                    onClick={() => fetchMemberProfile(row.memberId)}
                    sx={tableRow(index)}
                  >
                    <TableCell>{row.memberId}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.facility}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        size="small"
                        color={row.status === "ACTIVE" ? "success" : "error"}
                        sx={statusChip}
                      />
                    </TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Paper>
    </Box>
  );
}
