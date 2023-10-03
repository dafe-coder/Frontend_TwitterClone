import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles((theme) => ({
    wrap: {
        backgroundColor: 'rgb(247, 249, 249)',
        borderRadius: 16,
        marginTop: '20px',
    }
}))

type BoxSideTypes = {
    children: React.ReactElement,
    title?: string
}

export const BoxSide:React.FC<BoxSideTypes> = ({children, title = ''}): React.ReactElement => {
    
    const classes = useStyle()
    
    return (
        <Box className={classes.wrap}>
            {title !== '' &&  <div style={{
                padding: '20px 15px 5px',
            }}>
                <Typography fontWeight={900} gutterBottom>{title}</Typography>
            </div>}
            {children}
        </Box>
    )
}