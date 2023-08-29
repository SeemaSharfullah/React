import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" color="success" startIcon={< AcUnitIcon/>}>Text</Button>
      <Button variant="contained" color="error" endIcon={<SendIcon />}>Contained</Button>
      <Button variant="outlined" color="error">Outlined</Button>
    </Stack>
  );
}
