import { Avatar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { grey } from '@mui/material/colors';
import { TweetNav } from './TweetNav';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { ITweet } from '../redux/slices/Tweets/state';
import { formatDate } from '../utils/formatDate';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { fetchDeleteTweet } from '../redux/slices/Tweets/tweetsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { ImageList } from './ImageList';

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
    fullName: string,
    userAvatarUrl: string
    images?: string[]
}

interface TweetProps extends ITweet {
    createdAt: string
}


export const Tweet: React.FC<TweetProps> = ({ user, text, _id, createdAt, images }): React.ReactElement => {
    const classes = useStyle()
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setAnchorEl(null);
    };

    const onDelete = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(null);
        event.stopPropagation()
        dispatch(fetchDeleteTweet(_id))
    }

    return (
        <div className={classes.tweetItem} onClick={() => navigate(`tweet/${_id}`)}>
            <Grid container flexWrap='nowrap'>
                <Grid desktop={1} tablet={2}>
                    <Avatar
                        sx={{ width: 46, height: 46 }} className={classes.tweetAvatar} alt={`Avatar ${user.userName}`} src={user.userAvatarUrl} />
                </Grid>
                <Grid desktop={11} tablet={10}>
                    <div style={{ marginLeft: 25 }}>
                        <Grid sx={{ display: 'flex', gap: '5px' }}>
                            <Typography gutterBottom fontWeight={600} fontSize={16}>
                                {user.fullName}
                            </Typography>
                            <Typography><span className={classes.userName}>@{user.userName} · {formatDate(new Date(createdAt))}</span></Typography>
                            <Grid sx={{ zIndex: 2, marginLeft: 'auto' }}>
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Typography>Edit</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={onDelete}>
                                        <Typography>Delete</Typography>
                                    </MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                        {images && <ImageList images={images} />}
                        <Typography variant='body2' gutterBottom sx={{ wordBreak: 'break-world' }}>
                            {text}
                        </Typography>
                        <TweetNav />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}