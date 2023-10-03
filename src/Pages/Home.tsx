import { Container, Grid, Input, CircularProgress } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Tweet,Trends, FastFollow, TweetAction } from '../Components';
import { SideMenu } from '../Components/SideMenu';
import { Theme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetsItems, selectTweetsStatus, setTweets } from '../redux/slices/Tweets/tweetsSlice';
import {ITweet, LoadingState} from '../redux/slices/Tweets/state'
import { fetchTweets } from '../redux/slices/Tweets/tweetsSlice';
import { AppDispatch } from '../redux/store';

export const useStyleHome = makeStyles((theme: Theme) => {
    return ({
    logo: {
        display: 'block',
        margin: '10px 0',
    },
    sideLink: {
        '&:hover svg': {
            fill: theme.palette.primary.main
        },
        '&:hover span': {
            color: theme.palette.primary.main
        },
        '& svg' :{ 
            fill: '#000'
        }
    },
    input: {
        backgroundColor: 'rgb(239, 243, 244)',
        borderRadius: 50,
        padding: '5px 20px',
        '&:after' : {
            display: 'none'
        },
        '&:before' : {
            display: 'none'
        }
    },
    tweetsWrapper: {
       width: '100%',
       height: '100%',
       borderRight: '1px solid  rgb(239, 243, 244)',
       borderLeft: '1px solid  rgb(239, 243, 244)',
       display: 'flex',
       flexDirection: 'column',
    },
    tweetsHeader: {
        padding: '0 20px',
        borderBottom: '1px solid  rgb(239, 243, 244)',
        '& h4': {
            fontWeight: 700
        }
    }
})})

export const Home: React.FC = (): React.ReactElement => {
    const classes = useStyleHome()
    const tweets = useSelector(selectTweetsItems) 
    const tweetsStatus = useSelector(selectTweetsStatus)
    const dispatch = useDispatch<AppDispatch>()

    React.useEffect(() => {
        dispatch(fetchTweets())
    }, [dispatch])

    return (
        <Container maxWidth='desktop'>
            <Grid container spacing={3}>
                <Grid item laptop={2} tablet={3} mobile={12}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item laptop={7} tablet={9} mobile={12}>
                    <div className={classes.tweetsWrapper}>
                        <div className={classes.tweetsHeader}>
                            <h4>Home</h4>
                        </div>
                        <TweetAction />
                        {tweetsStatus === LoadingState.LOADED ? (Array.from(tweets, (item: ITweet) => (<Tweet key={item._id} text={item.text} user={{userName: item.user.userName, userAvatarUrl: item.user.userAvatarUrl, login: item.user.login}} />))) : (<div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}><CircularProgress/></div>)}
                    </div>
                </Grid>
                <Grid item laptop={3} tablet={12} mobile={12}>
                    <div style={{paddingTop: 10}}>
                       <Input  className={classes.input} fullWidth placeholder='Search Twitter'/>
                    </div>
                    <Trends />
                    <FastFollow />
                </Grid>
            </Grid>
        </Container>
    )
}