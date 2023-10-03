import React from 'react';
import { makeStyles } from '@mui/styles';
import { BoxSide } from './UI';
import { List } from '@mui/material';
import { FollowItem } from './FollowItem';

const useStyles = makeStyles((theme) => ({
    followWrap: {

    }
}))

export const FastFollow:React.FC = (): React.ReactElement => {
    const classes = useStyles()
    return (
        <BoxSide title='Who to follow'>
            <List disablePadding>
                <FollowItem user={{userAvatarUrl: 'https://images.unsplash.com/photo-1495837174058-628aafc7d610?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80', userName: 'BTS_official', login: '@bts_bighit'}}/>
                <FollowItem user={{userAvatarUrl: 'https://images.unsplash.com/photo-1632333524657-19e0870058b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', userName: 'chart data', login: '@chartdata'}}/>
                <FollowItem user={{userAvatarUrl: 'https://images.unsplash.com/photo-1628256712028-0c2304f3b2de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80', userName: 'Bandit', login: '@bandit'}}/>
            </List> 
        </BoxSide>
    )
}