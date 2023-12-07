import React from 'react';
import { Grid } from '@mui/material';

interface ImageListProps {
    images: string[];
}

export const ImageList: React.FC<ImageListProps> = ({ images }) => {
    return (
        <Grid sx={{ display: 'grid', gridTemplate: 'auto' }}>
            {images.map((url, i) => <img key={i} src={url} alt='tweet img' style={{ maxWidth: '100%', maxHeight: 200, marginBottom: 20 }} />)}
        </Grid>
    )
}