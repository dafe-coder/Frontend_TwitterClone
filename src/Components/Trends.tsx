import {makeStyles} from '@mui/styles';
import React from 'react';
import {List, Typography} from '@mui/material';
import { grey } from '@mui/material/colors';
import { TrendsItem } from './TrendsItem';
import { BoxSide } from './UI';

export const useStylesTrends = makeStyles((theme) => ({
    trendsList: {
       
    },
    textGray: {
        color: grey[500]
    },
    trendsItem: {
        position: 'relative',
        padding: '0 !important',
        '& svg': {
            fill: grey[700]
        }
    },
    moreBtn: {
        cursor: 'pointer',
        position: 'absolute',
        right: 5,
        top: 5
    }
}))

export const Trends: React.FC = (): React.ReactElement => {
    const classes = useStylesTrends()
    return (
        <BoxSide title='Trends for you'>
            <List disablePadding className={classes.trendsList}>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' classes={classes}/>
                <TrendsItem count='1, 175' title='Gaming · Trending' hashtag='хтивийпонеділок' classes={classes}/>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' classes={classes}/>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' classes={classes}/>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' classes={classes}/>
            </List>
        </BoxSide>
    )
}