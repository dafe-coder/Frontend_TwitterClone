import { Avatar, Paper, TextareaAutosize, Stack, Snackbar, Alert, Collapse } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { TweetActionMenu } from './TweetActionMenu';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { fetchAddTweet, selectTweetsStatusAddTweet } from '../redux/slices/Tweets/tweetsSlice';
import { LoadingState } from '../redux/slices/Tweets/state';

const useStyles = makeStyles((theme) => ({
    textArea: {
        border: 'none',
        width: '100% !important',
        fontFamily: "Roboto, sans-serif",
        resize: 'vertical',
        "&:focus": {
            outline: 'none'
        }
    }
}))

export const TweetAction: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch<AppDispatch>()
    const classes = useStyles()
    const statusTweetAdd = useSelector(selectTweetsStatusAddTweet)
    const [text, setText] = React.useState<string>('')
    const [openError, setOpenError] = React.useState<boolean>(false)
    const textLimitPercent = (text.length / 280) * 100

    React.useEffect(() => {
        if (statusTweetAdd === LoadingState.ERROR) {
            setOpenError(true)
        }
    }, [statusTweetAdd])

    const onAddedTweet = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        dispatch(fetchAddTweet(text))
        setText('')
    }

    const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    return (
        <Paper sx={{ padding: '10px', borderRadius: 0, borderColor: 'rgb(239, 243, 244)', borderTop: 0, borderLeft: 0, borderRight: 0 }} variant='outlined'>
            <Stack direction='row'>
                <Avatar sx={{ width: 46, height: 46 }} alt='Your avatar' src='https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80' />
                <Stack ml={3} width='100%'>
                    <TextareaAutosize maxLength={280} value={text} onChange={handleChangeText} minRows={3} className={classes.textArea} placeholder='What is happening!?' />
                    <Stack mt={2} pt={1} borderTop='1px solid rgb(239, 243, 244)'>
                        <TweetActionMenu loading={statusTweetAdd} onSend={onAddedTweet} text={text} progressPercent={textLimitPercent} />
                    </Stack>
                </Stack>
            </Stack>
            <Collapse in={openError}>
                <Alert sx={{ marginTop: 2 }} severity='error'>An error occurred, please try again later.</Alert>
            </Collapse>
        </Paper>
    )
}