import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TweetAction } from '../TweetAction';

type AddTweetProps = {
  open: boolean;
  setOpen: (close: boolean) => void
}

export const AddTweetModal: React.FC<AddTweetProps> = ({ open, setOpen }) => {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle>Создайте учетную запись</DialogTitle>
      <DialogContent>
        <TweetAction />
      </DialogContent>
    </Dialog>
  );
}