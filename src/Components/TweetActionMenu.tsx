import { Button, IconButton, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CircularProgress from '@mui/material/CircularProgress';

const useStyles = makeStyles((theme) => ({
    tweetNav: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        listStyle: 'none',
        padding: 0,
        // '& > *:not(:last-child)': {
        //     marginRight: theme.spacing(1),
        // },
        marginBottom: 0,
        marginLeft: -8,
        marginTop: 0
    },
    navLink: {
        // '&:hover svg': {
        //     color: theme.palette.primary.main
        // },
        '& svg': {
            fontSize: 20,
        }
    },
    textIcon: {
        color: 'rgb(83, 100, 113)',
        fontWeight: 500, 
        marginLeft: 4
    },
    circle: {
        position: 'absolute',
        top: '50%', 
        marginTop: -13,
        left: 0
    },
    lengthLeft: {
        position: 'absolute',
        left: 5,
        fontSize: 10,
        zIndex: 2,
        top: 15
    }
}))

type TweetActionMenuTypes = {
    progressPercent: number,
    text: string,
    onSend: () => void
}

export const TweetActionMenu: React.FC<TweetActionMenuTypes> = ({progressPercent, text = '', onSend}):React.ReactElement => {
    const classes = useStyles()
    const [leftLength, setLeftLength] = React.useState(280)

    React.useEffect(() => {
        setLeftLength(280 - text.length)
    }, [text])

    return (
        <Stack direction='row' justifyContent='space-between'>
            <ul className={classes.tweetNav}>
                <li style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <BrokenImageOutlinedIcon color='primary'/>
                    </IconButton>
                </li>
                <li style={{display: 'flex', alignItems: 'center'}}>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <SentimentSatisfiedAltOutlinedIcon color='primary'/>
                    </IconButton>
                </li>
            </ul>
            {text !== '' ? <div style={{position: 'relative', width: 60,}}>
                <span className={classes.lengthLeft}>{leftLength}</span>
                <CircularProgress color='secondary' className={classes.circle} size={30} value={100} variant='determinate'/>
                <CircularProgress color={progressPercent < 100 ? 'primary' : "error"} className={classes.circle} size={30} value={progressPercent} variant='determinate'/>
            </div> : <></>}
            <Button onClick={onSend} sx={{minWidth: 110}} disabled={text.length >= 1 ? false : true}>Tweet</Button>
        </Stack>
    )
}