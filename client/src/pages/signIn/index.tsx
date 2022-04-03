import React from "react";
import Login from "./login";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GoogleAuth from "../../components/googleAuth";
import {NavLink} from "react-router-dom";

const SignIn: React.FC = () => {

    return (
        <>
            <Login/>
            <GoogleAuth/>
            <Box textAlign='center'>
                <Button
                    color="inherit"
                    to="/auth/signUp"
                    component={NavLink}
                    disableRipple
                >
                    Not a user? Register
                </Button>
            </Box>
        </>
    )
}

export default SignIn;