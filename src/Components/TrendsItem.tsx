import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ListItem, ListItemButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type TrendsItemType = {
    styles: any;
    count?: string | number;
    hashtag: string;
    title: string;
};

export const TrendsItem: React.FC<TrendsItemType> = ({
    styles,
    title,
    hashtag,
    count = '',
}) => {
    const navigate = useNavigate();

    return (
        <ListItem
            sx={{ padding: '0' }}
            style={styles.trendsItem}
            onClick={() => navigate(`/home/search?q=${hashtag}`)}
        >
            <ListItemButton
                sx={{ px: 2, flexDirection: 'column', alignItems: 'flex-start' }}
            >
                <span style={styles.moreBtn}>
                    <MoreHorizIcon />
                </span>
                <Typography gutterBottom fontSize={14} style={styles.textGray}>
                    {title}
                </Typography>
                <Typography gutterBottom fontWeight={700} fontSize={14}>
                    # {hashtag}
                </Typography>
                {count !== '' && (
                    <Typography style={styles.textGray} variant='body2'>
                        {count}
                        Tweets
                    </Typography>
                )}
            </ListItemButton>
        </ListItem>
    );
};
