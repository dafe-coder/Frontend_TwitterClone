import React from 'react';
import {CircularProgress, List} from '@mui/material';
import { grey } from '@mui/material/colors';
import { TrendsItem } from './TrendsItem';
import { BoxSide } from './UI';
import { useSelector } from 'react-redux';
import { selectTagsItems } from '../redux/slices/Tags/selectsTags';
import { selectTagLoaded } from '../redux/slices/Tags/selectsTags';

export const StylesTrends = {
    trendsList: {
       
    },
    textGray: {
        color: grey[500]
    },
    trendsItem: {
        position: 'relative',
        padding: '0 !important',
        margin: '0',
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
    const tags = useSelector(selectTagsItems)
    const loading = useSelector(selectTagLoaded)

    return (
        <BoxSide title='Trends for you'>
            <List disablePadding sx={StylesTrends.trendsList}>
                {loading ? tags.map(item => (
                    <TrendsItem key={item._id} count={item.count} title={item.categories} hashtag={item.name} styles={StylesTrends}/>
                )) : <div><CircularProgress /></div>}
            </List>
        </BoxSide>
    )
}