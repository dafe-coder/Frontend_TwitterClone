import React from 'react';
import { TweetNav } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweet, selectTweetItem, selectTweetStatus } from '../../redux/slices/Tweet/tweetSlice';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { Avatar, CircularProgress, Grid, Typography } from '@mui/material';
import { LoadingState } from '../../redux/slices/Tweet/state';
import { makeStyles } from '@mui/styles';
import grey from '@mui/material/colors/grey';
import format from 'date-fns/format';

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


export const stylesNav = {
    borderBottom: '1px solid  rgb(239, 243, 244)',
    borderTop: '1px solid  rgb(239, 243, 244)',
    padding: '10px'
}

export const FullTweet: React.FC = (): React.ReactElement => {
    const classes = useStyle()
    const dispatch = useDispatch<AppDispatch>()
    const isLoading = useSelector(selectTweetStatus)
    const item = useSelector(selectTweetItem)
    const params: { id?: string } = useParams()
    const id = params.id

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweet(id))
        }
    }, [id, dispatch])

    if (item == null && isLoading === LoadingState.LOADING) {
        return <CircularProgress />
    }

    if (item && item !== null) {
        return <div className={classes.tweetItem}>
            <Grid container flexWrap='nowrap'>
                <Grid desktop={1} tablet={1}>
                    <Avatar
                        sx={{ width: 46, height: 46 }} className={classes.tweetAvatar} alt={`Avatar ${item.user.userName}`} src={item.user.userAvatarUrl} />
                </Grid>
                <Grid desktop={11} tablet={11}>
                    <div style={{ marginLeft: 25 }}>
                        <Typography gutterBottom>
                            {item.user.fullName}
                            <br /><span className={classes.userName}>@{item.user.userName}</span>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            <Grid desktop={12}>
                <Typography sx={{
                    lineHeight: '24px',
                    fontSize: 17,
                    wordBreak: 'break-word',
                    marginTop: '20px'
                }} gutterBottom>
                    {item.text}
                </Typography>
                <Typography className={classes.userName} fontSize={14} marginTop={2.5}>{format(new Date(item.createdAt), 'H:mm:ss')} - {format(new Date(item.createdAt), 'dd MMM. yyyy')} year</Typography>
                <TweetNav style={stylesNav} />
            </Grid>
        </div>
    }

    return <div>Error (This post is not available)</div>
}