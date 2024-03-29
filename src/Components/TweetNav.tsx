import React from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ShareIcon from '@mui/icons-material/Share';
import { Theme } from '@mui/system';
import { stylesNav } from '../Pages/Components/FullTweet';

const useStyle = makeStyles((theme: Theme) => ({
    tweetNav: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        listStyle: 'none',
        padding: 0,
        '& > *:not(:last-child)': {
            marginRight: theme.spacing(5),
        },
        marginBottom: 0,
        marginLeft: -8,
        marginTop: 0,
    },
    navLink: {
        '&:hover svg': {
            color: theme.palette.primary.main
        },
        '& svg': {
            color: "rgb(83, 100, 113)",
            fontSize: 20,
        }
    },
    textIcon: {
        color: 'rgb(83, 100, 113)',
        fontWeight: 500,
        marginLeft: 4
    },
    wrap: {
        marginTop: 20
    }
}))

type TweetNavProps = {
    style?: typeof stylesNav
}

export const TweetNav: React.FC<TweetNavProps> = ({ style }): React.ReactElement => {
    const classes = useStyle()
    return (
        <div style={style} className={classes.wrap}>
            <ul className={classes.tweetNav}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <span className={classes.textIcon} style={{ fontSize: '11px', lineHeight: '10px' }}>1</span>
                </li>
                <li>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <RepeatIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <FavoriteBorderIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <EqualizerIcon />
                    </IconButton>
                </li>
                <li>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <ShareIcon />
                    </IconButton>
                </li>
            </ul>
        </div>
    )
}