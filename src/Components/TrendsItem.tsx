import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useStylesTrends} from './Trends';
import {ListItem, ListItemButton, Typography} from '@mui/material';

type TrendsItemType = {
    classes: ReturnType < typeof useStylesTrends >,
    count?: string,
    hashtag: string,
    title: string
}

export const TrendsItem: React.FC<TrendsItemType> = ({
    classes,
    title,
    hashtag,
    count = ''
}) => {
    return (< ListItem className = {
        classes.trendsItem
    } > <ListItemButton sx={{px: 2, flexDirection: 'column', alignItems: 'flex-start'}}> < span className = {
        classes.moreBtn
    } > <MoreHorizIcon/></span> < Typography gutterBottom fontSize = {
        14
    }
    className = {
        classes.textGray
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
        count !== '' && <Typography className = {
            classes.textGray
        }
        variant = 'body2' > {
            count
        }
        Tweets</Typography>
    }</ListItemButton></ListItem>)
}