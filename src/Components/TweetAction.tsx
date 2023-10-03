import { Avatar, Paper, TextareaAutosize, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { TweetActionMenu } from './TweetActionMenu';

const useStyles = makeStyles((theme) => ({
    textArea:{
        border: 'none',
        width: '100% !important',
        fontFamily: "Roboto, sans-serif",
        resize: 'vertical',
        "&:focus": {
            outline:'none'
        }
    }
}))

export const TweetAction:React.FC = ():React.ReactElement => {
    const classes = useStyles()
    const [text, setText] = React.useState('')
    const textLimitPercent = (text.length / 280) * 100

    const onAddedTweet = (): void => {
        setText('')
    }
  
    const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if(e.currentTarget) {
            setText(e.currentTarget.value)
        }
    }

    return (
        <Paper sx={{ padding: '10px', borderRadius: 0, borderColor: 'rgb(239, 243, 244)', borderTop: 0, borderLeft: 0, borderRight: 0}} variant='outlined'>
            <Stack direction='row'>
                <Avatar sx={{ width: 46, height: 46 }} alt='Your avatar' src='https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80' />
                <Stack ml={3} width='100%'>
                    <TextareaAutosize maxLength={280} value={text} onChange={handleChangeText} minRows={3} className={classes.textArea} placeholder='What is happening!?'/>
                    <Stack mt={2} pt={1} borderTop='1px solid rgb(239, 243, 244)'>
                        <TweetActionMenu onSend={onAddedTweet} text={text} progressPercent={textLimitPercent}/>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}