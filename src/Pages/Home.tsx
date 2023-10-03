import {Container, Grid, IconButton, ListItemButton,  ListItemIcon, ListItemText, Input, Paper} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Tweet,Trends, FastFollow, TweetAction } from '../Components';
import { SideMenu } from '../Components/SideMenu';


export const useStyleHome = makeStyles((theme) => ({
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
}))

export const Home: React.FC = (): React.ReactElement => {
    const classes = useStyleHome()
   
    
    return (
        <Container maxWidth='lg'>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item xs={7}>
                    <div className={classes.tweetsWrapper}>
                        <div className={classes.tweetsHeader}>
                            <h4>Home</h4>
                        </div>
                        <TweetAction />
                        {[...new Array(20).fill(<Tweet text='Crypto Trivia Time! Bitcoin is known as digital gold, but what is known as digital silver? 🤔' user={{userName: 'ManyBrooks', userAvatarUrl: 'https://images.unsplash.com/photo-1632333526812-c11ff6ba0366?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', login: '@manybrooks'}} />)]}
                    </div>
                </Grid>
                <Grid item xs={3}>
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