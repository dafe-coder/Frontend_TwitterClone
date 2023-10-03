import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {ListItem, ListItemButton, Typography} from '@mui/material';
import { StylesTrends } from './Trends';

type TrendsItemType = {
    styles: any,
    count?: string,
    hashtag: string,
    title: string
}

export const TrendsItem: React.FC<TrendsItemType> = ({
    styles,
    title,
    hashtag,
    count = ''
}) => {
    return (< ListItem style = {
        styles.trendsItem
    } > <ListItemButton sx={{px: 2, flexDirection: 'column', alignItems: 'flex-start'}}> < span style = {
        styles.moreBtn
    } > <MoreHorizIcon/></span> < Typography gutterBottom fontSize = {
        14
    }
    style = {
        styles.textGray
    } > {
        title
    }</Typography> < Typography gutterBottom fontWeight = {
        700
    }
    fontSize = {
        14
    } >#{
        hashtag
    }</Typography> {
        count !== '' && <Typography style = {
            styles.textGray
        }
        variant = 'body2' > {
            count
        }
        Tweets</Typography>
    }</ListItemButton></ListItem>)
}