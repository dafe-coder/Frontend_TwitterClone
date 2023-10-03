import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type RegisterProps = {
  open: boolean;
  setOpen: (close: boolean) => void
}

export const RegisterModal:React.FC<RegisterProps> = ({open, setOpen}) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Создайте учетную запись</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions sx={{padding: '10px 24px 20px'}}>
          <Button style={{width: '100%'}}>Next</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}