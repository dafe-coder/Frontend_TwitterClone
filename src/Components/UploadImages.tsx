import IconButton from '@mui/material/IconButton/IconButton';
import React, { useRef } from 'react';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { ImageObj } from './TweetActionMenu';

interface UploadProps {
    classes: any;
    images: ImageObj[];
    setImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}



export const UploadImages: React.FC<UploadProps> = ({ classes, images, setImages }): React.ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }

    const removeImage = (url: string) => {
        setImages(prev => prev.filter(item => item.url !== url))
    }

    const handleChangeFileInput = React.useCallback((event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target) {
            const file = target.files?.[0]
            if (file) {
                const fileObj = new Blob([file])
                setImages(prev => [...prev, { file: file, url: URL.createObjectURL(fileObj) }])
            }
        }
    }, [])

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.addEventListener('change', handleChangeFileInput)
        }
        return () => {
            if (inputRef.current) {
                inputRef.current.removeEventListener('change', handleChangeFileInput)
            }
        }
    }, [])

    return (
        <>
            <input ref={inputRef} accept='image/jpeg, image/png' id='image' type='file' hidden />
            <IconButton
                onClick={handleClick}
                className={classes.navLink}
                color="primary"
                aria-label="add to shopping cart">
                <BrokenImageOutlinedIcon color='primary' />
            </IconButton>
            <div className={classes.photoList}>
                {images.map((item, i) => <img key={i} src={item.url} alt='tweet img' className={classes.photo} onClick={() => removeImage(item.url)} />)}
            </div>
        </>

    )
}