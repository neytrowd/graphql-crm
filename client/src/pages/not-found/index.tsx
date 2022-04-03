import React from 'react';
import Box from "@mui/material/Box";
import styleNotFound from "./styleNotFound";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const NotFound: React.FC = () => {
    const classes = styleNotFound();

    return (
        <Box className={classes.box}>
            <Box>
                <Typography
                    variant={"h3"}
                    className={classes.title}
                >
                    Page Not Found
                </Typography>
                <Button
                    to={'/'}
                    color={'inherit'}
                    component={NavLink}
                >
                    Go to home page
                </Button>
            </Box>
        </Box>
    );
};

export default NotFound;