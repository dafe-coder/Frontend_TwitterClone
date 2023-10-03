import React from 'react';
import {useStyleHome} from '../Pages';
import {Button, IconButton, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {AddTweetModal} from './modals/AddTweetModal';

type SideMenuProps = {
    classes: ReturnType < typeof useStyleHome >
}

const menus = [
    {
        icon: <HomeOutlinedIcon color = 'primary' fontSize = 'medium' />,
        label: 'Home'
    }, {
        icon: <SearchIcon fontSize = 'medium' />,
        label: 'Explore'
    }, {
        icon: <NotificationsNoneOutlinedIcon fontSize = 'medium' />,
        label: 'Notifications'
    }, {
        icon: <EmailOutlinedIcon fontSize = 'medium' />,
        label: 'Message'
    }, {
        icon: <ListAltOutlinedIcon fontSize = 'medium' />,
        label: 'Lists'
    }, {
        icon: <BookmarksOutlinedIcon fontSize = 'medium' />,
        label: 'Bookmarks'
    }, {
        icon: <AccountCircleOutlinedIcon fontSize = 'medium' />,
        label: 'Profile'
    }, {
        icon: <PendingOutlinedIcon fontSize = 'medium' />,
        label: 'More'
    }
]

export const SideMenu: React.FC<SideMenuProps> = ({classes}): React.ReactElement => {
    const [openModalAdd, setOpenModalAdd] = React.useState(false)

    return (<div> 
        <div className = {
        classes.logo
    } > <IconButton color = 'primary' > <TwitterIcon color = 'primary' fontSize = 'medium' /> </IconButton></div> {
        menus.map(link => <ListItemButton className = {
            classes.sideLink
        }
        sx = {{ borderRadius: 50, p: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }} > <ListItemIcon sx = {{ p:0, m:0, minWidth: 'auto', marginRight: 'px' }} > <IconButton color = 'primary' > {
            link.icon
        }</IconButton></ListItemIcon> < ListItemText primary = {
            link.label
        }
        primaryTypographyProps = {{ ml: '5px', color: 'black',fontSize: 14, fontWeight: 700 }}
        />
            </ListItemButton >)
    } 
        <Button onClick={() => setOpenModalAdd(true)} variant = 'contained' color = 'primary' sx = {{minWidth: '100%', marginTop: '30px'}} > Tweet this</Button> 
        <AddTweetModal open={openModalAdd} setOpen={setOpenModalAdd} /> 
    </div>)
}