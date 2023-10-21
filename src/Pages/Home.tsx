import { Container, Grid, Input, IconButton } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Trends, FastFollow, TweetAction } from '../Components';
import { SideMenu } from '../Components/SideMenu';
import { Theme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchTweets } from '../redux/slices/Tweets/tweetsSlice';
import { AppDispatch } from '../redux/store';
import { fetchTags } from '../redux/slices/Tags/tagsSlice';
import { Route, Routes } from 'react-router-dom';
import { TweetList } from '../Components/TweetList';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { FullTweet } from './Components/FullTweet';

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
            '& svg': {
                fill: '#000'
            }
        },
        input: {
            backgroundColor: 'rgb(239, 243, 244)',
            borderRadius: 50,
            padding: '5px 20px',
            '&:after': {
                display: 'none'
            },
            '&:before': {
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
    })
})

export const Home: React.FC = (): React.ReactElement => {
    const classes = useStyleHome()
    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    React.useEffect(() => {
        dispatch(fetchTweets())
        dispatch(fetchTags())
    }, [dispatch])

    return (
        <Container maxWidth='desktop'>
            <Grid container spacing={3}>
                <Grid item laptop={2} tablet={3} mobile={12}>
                    <SideMenu classes={classes} />
                </Grid>
                <Grid item laptop={7} tablet={9} mobile={12}>
                    <div className={classes.tweetsWrapper}>
                        <div className={classes.tweetsHeader}>
                            <Routes>
                                <Route path='/' element={<h4>Home</h4>} />
                                <Route path='/*' element={<div style={{ display: 'flex', alignItems: "center", gap: 10 }}><IconButton><KeyboardBackspaceIcon onClick={() => navigate(-1)} style={{ color: '#000' }} /></IconButton><h4>Post</h4></div>} />
                            </Routes>
                        </div>
                        <Routes>
                            <Route path='/' element={<TweetAction />} />
                            <Route path='/search' element={<TweetAction />} />
                        </Routes>
                        <Routes>
                            <Route path='/' element={<TweetList />} />
                            <Route path='/tweet/:id' element={<FullTweet />} />
                        </Routes>
                    </div>
                </Grid>
                <Grid item laptop={3} tablet={12} mobile={12}>
                    <div style={{ paddingTop: 10 }}>
                        <Input className={classes.input} fullWidth placeholder='Search Twitter' />
                    </div>
                    <Trends />
                    <FastFollow />
                </Grid>
            </Grid>
        </Container>
    )
}