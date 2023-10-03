import { Avatar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { grey } from '@mui/material/colors';
import { TweetNav } from './TweetNav';
import Grid from '@mui/material/Grid';

const useStyle = makeStyles((theme) => ({
    tweetItem: {
        padding: '10px',
        borderBottom: '1px solid  rgb(239, 243, 244)',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: 'rgba(0,0,0, .03)'
        }
    },
    userName: {
        color: grey[400]
    }, 
    tweetAvatar: {
        width: 25,
        height: 25
    }
}))

export type User = {
    userName: string,
    login: string,
    userAvatarUrl: string
}

type TweetProps = {
    user: User
    text: string
}

export const Tweet: React.FC<TweetProps> = ({user, text}):React.ReactElement => {
    const classes = useStyle()
return (
<div className={classes.tweetItem}>
    <Grid container flexWrap='nowrap'>
        <Grid laptop={2}>
            <Avatar 
            sx={{ width: 46, height: 46 }} className={classes.tweetAvatar} alt={`Avatar ${user.userName}`} src={user.userAvatarUrl} />
        </Grid>
        <Grid laptop={10} >
            <div style={{marginLeft: 25}}>
                <Typography gutterBottom>
                    {user.userName} <span className={classes.userName}>{user.login} · 4h</span>
                </Typography>
                <Typography variant='body2' gutterBottom>
                    {text}
                </Typography>
                <TweetNav />
            </div>
        </Grid>
    </Grid>
</div>
)
}