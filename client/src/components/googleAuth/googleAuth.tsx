import React from 'react';
import GoogleLogin from 'react-google-login';
import {GOOGLE_LOGIN_CLIENT_ID} from "../../constants";
import Box from "@mui/material/Box";
import {useMutation} from "@apollo/client";
import {GOOGLE_SIGN_IN} from "../../apollo/queries/authQueries";
import {toast} from "react-toastify";
import {authActions} from "../../store/slices/authSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store";
import styleGoogleAuth from "./styleGoogleAuth";
import {instanceOf} from "graphql/jsutils/instanceOf";

const GoogleAuth: React.FC = () => {
    const classes = styleGoogleAuth();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [googleSignIn] = useMutation(GOOGLE_SIGN_IN);

    const handleLogin = async (googleData: any) => {
        try {
            let {tokenId} = googleData;
            let res = await googleSignIn({variables: {data: {tokenId}}});
            let {success, message, data} = res.data.googleSignIn;

            if (success) {
                let {token, userId} = data;
                toast.info(message);
                localStorage.setItem('auth-token', token);
                dispatch(authActions.login({userId}));
                navigate('/app');
            } else {
                toast.error(message)
            }
        } catch (err: unknown) {
            (err instanceof Error) && console.log(err.message)
        }
    }

    return (
        <Box className={classes.box}>
            <GoogleLogin
                clientId={GOOGLE_LOGIN_CLIENT_ID}
                buttonText="Login with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </Box>
    );
};

export default GoogleAuth;