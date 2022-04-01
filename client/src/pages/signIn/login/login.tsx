import React, {useState} from "react";
import styleLogin from "./styleLogin";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {NavLink, useNavigate} from "react-router-dom";
import Logo from '../../../assets/images/logo.png'
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui';
import * as Yup from "yup";
import {ILogin} from "../../../types";
import {SIGN_IN} from "../../../apollo/queries/authQueries";
import {useMutation} from "@apollo/client";
import {toast} from 'react-toastify';
import {useAppDispatch} from "../../../store";
import {authActions} from "../../../store/slices/authSlice";
import ReCAPTCHA from "react-google-recaptcha";
import {RECAPTChA_SITE_KEY} from "../../../constants";
import GoogleAuth from "../../../components/googleAuth";

const initialState: ILogin = {
    email: '',
    password: '',
}

const Login: React.FC = () => {
    const classes = styleLogin();
    const navigate = useNavigate();
    const [signIn] = useMutation(SIGN_IN);
    const dispatch = useAppDispatch();
    const [submitDisable, setSubmitDisable] = useState(true)

    const login = async (data: ILogin) => {
        let res = await signIn({variables: {data}})
        let {success, message, data: authData} = res.data.signIn;

        if (success) {
            let {token, userId} = authData;
            toast.info(message);
            localStorage.setItem('auth-token', token);
            dispatch(authActions.login({userId}));
            navigate('/app');
        } else {
            toast.error(message)
        }
    }

    const onSubmit = async (value: ILogin, {
        setSubmitting,
        resetForm
    }: { setSubmitting: Function, resetForm: Function }) => {
        try {
            login(value)
            setSubmitting(false)
            resetForm()
        } catch (err: unknown) {
            (err instanceof Error) && console.log(err.message)
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box className={classes.paper}>
                <Avatar className={classes.avatar} src={Logo}/>
                <Typography variant="h5">Sign in</Typography>
                <Formik
                    initialValues={initialState} onSubmit={onSubmit}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('Email is required'),
                        password: Yup.string().min(5, 'Must be least 5 symbols').required('Password is required'),
                    })}
                >
                    <Form>
                        <Field
                            component={TextField} name="email"
                            variant="outlined" margin="normal" required fullWidth
                            label="Email Address" autoComplete="email" autoFocus
                        />
                        <Field
                            component={TextField} name="password"
                            variant="outlined" margin="normal" required fullWidth
                            label="Password" type="password"
                        />
                        <Box marginTop={2} display={'flex'} justifyContent="center">
                            <ReCAPTCHA
                                sitekey={RECAPTChA_SITE_KEY}
                                onChange={()=>setSubmitDisable(false)}
                            />
                        </Box>
                        <Box marginTop={3}>
                            <Button
                                type="submit" fullWidth variant="contained" color="primary"
                                disabled={submitDisable}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </Box>
            <Box marginTop={3} display={'flex'} justifyContent={'center'}>
                <GoogleAuth/>
            </Box>
            <Box marginTop={3} marginBottom={5} textAlign='center'>
                <NavLink to='/auth/signUp' className={classes.register}>Not a user? Register</NavLink>
            </Box>
        </Container>
    );
}

export default Login;