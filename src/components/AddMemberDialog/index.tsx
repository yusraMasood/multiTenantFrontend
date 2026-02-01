import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDashboard } from '../../context/DashboardContext';
import {
  FACILITIES,
  modalBox,
  headerBox,
  heading,
  formBox,
  inputLabel,
  requiredAsterisk,
  formControl,
  footerBox,
  cancelButton,
  addButton,
  errorText,
  selectPlaceholder,
} from './styles';

export function AddMemberDialog() {
  const { addMemberOpen, setAddMemberOpen, addMember } = useDashboard();
  const [memberId, setMemberId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [facility, setFacility] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => {
    setAddMemberOpen(false);
    setMemberId('');
    setName('');
    setEmail('');
    setFacility('');
    setError('');
  };

  const handleAdd = async () => {
    if (!memberId.trim() || !name.trim() || !facility) {
      setError('Member #, Member Name, and Facility are required.');
      return;
    }
    setError('');
    try {
      await addMember({ memberId: memberId.trim(), name: name.trim(), email: email.trim(), facility });
      handleClose();
    } catch {
      setError('Failed to add member. Please try again.');
    }
  };

  return (
    <Modal
      open={addMemberOpen}
      onClose={handleClose}
      aria-labelledby="add-member-modal-title"
      aria-describedby="add-member-modal-description"
    >
      <Box sx={modalBox}>
        <Box sx={headerBox}>
          <Typography component="p" sx={heading} id="add-member-modal-title">
            Add Member
          </Typography>
        </Box>

        <Box component="form" sx={formBox} id="add-member-modal-description">
          <FormControl sx={formControl}>
            <Typography component="label" sx={inputLabel} htmlFor="member-id">
              Member# <Box component="span" sx={requiredAsterisk}>*</Box>
            </Typography>
            <OutlinedInput
              id="member-id"
              placeholder="John Doe"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              sx={{ mt: 1 }}
            />
          </FormControl>

          <FormControl sx={formControl}>
            <Typography component="label" sx={inputLabel} htmlFor="facility">
              Facility <Box component="span" sx={requiredAsterisk}>*</Box>
            </Typography>
            <Select
              id="facility"
              value={facility}
              onChange={(e) => setFacility(e.target.value)}
              displayEmpty
              renderValue={(selected) => {
                if (!selected) {
                  return <Box component="span" sx={selectPlaceholder}>Select</Box>;
                }
                return selected;
              }}
              sx={{ mt: 1 }}
              input={<OutlinedInput />}
            >
              {FACILITIES.map((f) => (
                <MenuItem key={f} value={f}>{f}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={formControl}>
            <Typography component="label" sx={inputLabel} htmlFor="member-name">
              Member name <Box component="span" sx={requiredAsterisk}>*</Box>
            </Typography>
            <OutlinedInput
              id="member-name"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mt: 1 }}
            />
          </FormControl>

          <FormControl sx={formControl}>
            <Typography component="label" sx={inputLabel} htmlFor="email">
              Email address
            </Typography>
            <OutlinedInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mt: 1 }}
            />
          </FormControl>
        </Box>

        {error && (
          <Typography color="error" variant="body2" sx={errorText}>{error}</Typography>
        )}

        <Box sx={footerBox}>
          <Button onClick={handleClose} sx={cancelButton}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAdd} sx={addButton}>
            Add
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
