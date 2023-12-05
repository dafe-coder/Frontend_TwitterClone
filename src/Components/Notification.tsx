import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import { Alert, AlertColor } from '@mui/material';

interface INotificationProps {
    children: (callback: (text: string, type: AlertColor) => void) => React.ReactElement
}

export const Notification: React.FC<INotificationProps> = ({ children }): React.ReactElement => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [notificationObj, setNotificationObj] = React.useState<{ text: string, type: AlertColor }>()

    const openNotifications = (text: string, type: AlertColor) => {
        setNotificationObj({ text, type })
        setOpen(true);
    }

    return (
        <Stack>
            <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
                <Alert onClose={() => setOpen(false)} severity={notificationObj?.type ? notificationObj?.type : 'success'} sx={{ width: '400px' }}>
                    {notificationObj?.text}
                </Alert>
            </Snackbar>
            {children(openNotifications)}
        </Stack>
    );
}