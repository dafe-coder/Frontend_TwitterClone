import React from 'react';
import {List} from '@mui/material';
import { grey } from '@mui/material/colors';
import { TrendsItem } from './TrendsItem';
import { BoxSide } from './UI';

export const StylesTrends = {
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
}

export const Trends: React.FC = (): React.ReactElement => {
    return (
        <BoxSide title='Trends for you'>
            <List disablePadding sx={StylesTrends.trendsList}>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' styles={StylesTrends}/>
                <TrendsItem count='1, 175' title='Gaming · Trending' hashtag='хтивийпонеділок' styles={StylesTrends}/>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' styles={StylesTrends}/>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' styles={StylesTrends}/>
                <TrendsItem count='1, 175' title='Trending in Ukraine' hashtag='хтивийпонеділок' styles={StylesTrends}/>
            </List>
        </BoxSide>
    )
}