import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import {Avatar, Divider, Menu, MenuItem} from "@mui/material";
import Logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import GroupsIcon from '@mui/icons-material/Groups';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import styleNavbar from "./styleNavbar";
import useBreadcrumbs from 'use-react-router-breadcrumbs';


const Navbar = () => {
    const drawerWidth = 60;
    const classes = styleNavbar();
    const breadcrumbs = useBreadcrumbs();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [notification, setNotification] = useState(false)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const drawer = (
        <Box className={classes.drawerBox}>
            <Box textAlign='center'>
                <IconButton
                    className={classes.drawerButtons} disableRipple
                    component={NavLink} to={'/app/'}
                >
                    <HomeIcon/>
                </IconButton>
                <IconButton
                    className={classes.drawerButtons} disableRipple
                    component={NavLink} to={'/app/projects'}
                >
                    <AppsIcon/>
                </IconButton>
                <IconButton
                    className={classes.drawerButtons} disableRipple
                    component={NavLink} to={'/app/team'}
                >
                    <GroupsIcon/>
                </IconButton>
            </Box>
            <Box>
                <Avatar onClick={handleClick}>H</Avatar>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </Box>
        </Box>
    );

    return (
        <Box>
            <AppBar
                position="fixed"
                style={{background: '#F2F2F4', boxShadow: 'none', color: '#000'}}
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <Box sx={{display: {xs: 'none', sm: 'block'}}} className={classes.breadcrumbs}>
                        {breadcrumbs.map(({breadcrumb}: any, index) => {
                            let separator = (index !== 0) ? ' / ' : ''
                            return <NavLink key={index} to={breadcrumb.key}>{separator} {breadcrumb}</NavLink>
                        })}
                    </Box>

                    <Box marginLeft='auto'>
                        <IconButton onClick={() => setNotification(!notification)}>
                            <NotificationsActiveIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
                <Divider/>
            </AppBar>

            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
            >
                <Drawer
                    open={mobileOpen}
                    variant="temporary"
                    onClose={() => setMobileOpen(!mobileOpen)}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            background: '#2b3a53',
                        }
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    open
                    variant="permanent"
                    onClose={() => setNotification(!notification)}
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            background: '#2b3a53',
                            textAlign: 'center',
                            padding: '10px 0'
                        },
                    }}
                >
                    <NavLink to='/'>
                        <Box component='img' src={Logo} maxWidth='40px'
                             style={{filter: 'grayscale(100%)'}}
                        />
                    </NavLink>

                    {drawer}
                </Drawer>

                <Drawer
                    open={notification}
                    anchor={'right'}
                    variant="temporary"
                    onClose={() => setNotification(!notification)}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box', width: 300
                        }
                    }}
                >

                </Drawer>
                <Toolbar className={classes.toolbar}/>
            </Box>
        </Box>
    );
}

export default Navbar;