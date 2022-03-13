import React from "react";
import Navbar from "../navbar";
import Box from "@mui/material/Box";
import {Outlet} from 'react-router-dom'

const Layout: React.FC = () => {

    return (
        <>
            <Navbar/>
            <Box
                component="main"
                sx={{
                    marginLeft: 'auto',
                    width: {sm: `calc(100% - 60px)`}
                }}
            >
                <Outlet/>
            </Box>
        </>
    )
}

export default Layout;