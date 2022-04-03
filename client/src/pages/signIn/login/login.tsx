import React, {useState} from "react";
import styleLogin from "./styleLogin";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import Logo from '../../../assets/images/logo.png'
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui';
import * as Yup from "yup";
import {ILogin} from "../../../types";
import {SIGN_IN} from "../../../apollo/queries/authQueries";
import {useMutation} from "@apollo/client";
import {toast} from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import {RECAPTChA_SITE_KEY} from "../../../constants";
import {useLoginUser} from "../../../service/auth";

const initialState: ILogin = {
    email: '',
    password: '',
}

const Login: React.FC = () => {
    const classes = styleLogin();
    const navigate = useNavigate();
    const loginUser = useLoginUser();
    const [signIn] = useMutation(SIGN_IN);
    const [submitDisable, setSubmitDisable] = useState(true)

    const login = async (data: ILogin) => {
        try {
            let res = await signIn({variables: {data}})
            let {success, message, data: authData} = res.data.signIn;

            if (success) {
                let {token, userId} = authData;
                toast.info(message);
                loginUser(userId, token);
                navigate('/app');
            } else {
                toast.error(message)
            }
        } catch (err: unknown) {
            (err instanceof Error) && console.log(err.message)
        }
    }

    const onSubmit = async (value: ILogin, {
        setSubmitting,
        resetForm
    }: { setSubmitting: Function, resetForm: Function }) => {
        login(value)
        setSubmitting(false)
        resetForm()
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box className={classes.paper}>
                <Avatar className={classes.avatar} src={Logo}/>
                <Typography variant="h5">Sign in</Typography>
                <Formik
                    initialValues={initialState} onSubmit={onSubmit}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(5, 'Must be least 5 symbols')
                            .required('Password is required'),
                    })}
                >
                    <Form>
                        <Field
                            component={TextField}
                            name="email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                        />
                        <Field
                            component={TextField}
                            name="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                        />
                        <Box className={classes.captcha}>
                            <ReCAPTCHA
                                sitekey={RECAPTChA_SITE_KEY}
                                onChange={() => setSubmitDisable(false)}
                            />
                        </Box>
                        <Box>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                disabled={submitDisable}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </Box>
        </Container>
    );
}

export default Login;