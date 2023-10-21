import React from 'react';
import { Tweet } from '../../Components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweet, selectTweetItem, selectTweetStatus } from '../../redux/slices/Tweet/tweetSlice';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { CircularProgress } from '@mui/material';
import { LoadingState } from '../../redux/slices/Tweet/state';

export const FullTweet: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch<AppDispatch>()
    const isLoading = useSelector(selectTweetStatus)
    const item = useSelector(selectTweetItem)
    const params: { id?: string } = useParams()
    const id = params.id

    React.useEffect(() => {
        console.log(item)
    }, [item])

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweet(id))
        }
    }, [id, dispatch])

    if (item == null && isLoading === LoadingState.LOADING) {
        return <CircularProgress />
    }
    if (item && item !== null) {
        return <Tweet _id={item._id} user={item.user} text={item.text} />
    }

    return <div>Error (This post is not available)</div>
}