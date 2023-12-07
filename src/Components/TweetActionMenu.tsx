import { Button, IconButton, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingState } from '../redux/slices/Tweets/state';
import { UploadImages } from './UploadImages';
import { uploadImage } from '../utils/uploadImage';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { setStatusTweetsAdd } from '../redux/slices/Tweets/tweetsSlice';

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
    },
    photo: {
        width: 30,
        height: 30,
        objectFit: 'cover',
        borderRadius: 4
    },
    photoList: {
        display: 'flex',
        alignItems: 'center',
        gap: 4
    }
}))

type TweetActionMenuTypes = {
    progressPercent: number,
    loading: LoadingState
    text: string,
    onSend: (result: string[]) => void
}

export interface ImageObj {
    url: string;
    file: File | Blob
}

export const TweetActionMenu: React.FC<TweetActionMenuTypes> = ({ progressPercent, loading, text = '', onSend }): React.ReactElement => {
    const classes = useStyles()
    const dispatch = useDispatch<AppDispatch>()
    const [leftLength, setLeftLength] = React.useState(280)
    const [images, setImages] = React.useState<ImageObj[]>([])

    React.useEffect(() => {
        setLeftLength(280 - text.length)
    }, [text])

    const onHandleSend = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
        e.preventDefault()
        dispatch(setStatusTweetsAdd(LoadingState.LOADING))
        let result = []
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file;
            const { url } = await uploadImage(file)
            result.push(url)
        }
        onSend(result)
    }

    return (
        <Stack direction='row' justifyContent='space-between'>
            <ul className={classes.tweetNav}>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                    <UploadImages images={images} setImages={setImages} classes={classes} />
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        className={classes.navLink}
                        color="primary"
                        aria-label="add to shopping cart">
                        <SentimentSatisfiedAltOutlinedIcon color='primary' />
                    </IconButton>
                </li>
            </ul>
            {text !== '' ? <div style={{ position: 'relative', width: 60, }}>
                <span className={classes.lengthLeft}>{leftLength}</span>
                <CircularProgress color='secondary' className={classes.circle} size={30} value={100} variant='determinate' />
                <CircularProgress color={progressPercent < 100 ? 'primary' : "error"} className={classes.circle} size={30} value={progressPercent} variant='determinate' />
            </div> : <></>}
            <Button onClick={onHandleSend} sx={{ minWidth: 110 }} disabled={!text || text.length === 0 || loading === LoadingState.LOADING}>{loading === LoadingState.LOADING ? <CircularProgress color='info' size='25px' /> : 'Tweet'}</Button>
        </Stack >
    )
}