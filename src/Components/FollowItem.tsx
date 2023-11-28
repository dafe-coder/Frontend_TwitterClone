import { Avatar, Stack, Typography, IconButton, ListItemButton } from '@mui/material';
import React from 'react';
import { User } from './Tweet';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import { grey } from '@mui/material/colors';

type FollowItemTypes = {
    user: User
}



export const FollowItem: React.FC<FollowItemTypes> = ({ user }): React.ReactElement => {
    // const classes = useStyles()

    return (
        <ListItemButton disableGutters>
            <Stack width='100%' paddingX={2} justifyContent='space-between' direction='row'>
                <Stack alignItems='center' direction='row'>
                    <Avatar alt={user.userName} src={user.userAvatarUrl} />
                    <div style={{ marginLeft: 10 }}>
                        <Typography fontSize={12} fontWeight={700}>{user.userName}</Typography>
                        <Typography color={grey[700]} fontWeight={500} fontSize={12}>{user.fullName}</Typography>
                    </div>
                </Stack>
                <IconButton sx={{ width: 45, height: 45 }}>
                    <PersonAddOutlinedIcon sx={{ fontSize: 20 }} />
                </IconButton>
            </Stack>
        </ListItemButton>
    )
}