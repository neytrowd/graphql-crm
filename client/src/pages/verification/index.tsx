import React from 'react';
import Verify from "./verify";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";

const Verification: React.FC = () => {
    return (
        <>
            <Verify/>
            <Box textAlign='center'>
                <Button
                    color="inherit"
                    to="/auth/signIn"
                    component={NavLink}
                    disableRipple
                >
                    Already have an account? Log in
                </Button>
            </Box>
        </>
    );
};

export default Verification;