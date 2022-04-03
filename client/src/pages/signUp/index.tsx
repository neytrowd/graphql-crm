import React from "react";
import Register from "./register";
import GoogleAuth from "../../components/googleAuth";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

const SignUp: React.FC = () => {

    return (
        <>
            <Register/>
            <GoogleAuth/>
            <Box
                textAlign='center'
                marginBottom='30px'
            >
                <Button
                    color="inherit"
                    to="/auth/signIn"
                    component={NavLink}
                    disableRipple
                >
                    Already have an account? Login
                </Button>
            </Box>
        </>
    )
}

export default SignUp;