import React from "react";
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

const initialState = {
    email: '',
    password: '',
}

const Login: React.FC = () => {
    const classes = styleLogin();
    const navigate = useNavigate();

    const onSubmit = async (value: any, {setSubmitting, resetForm}: { setSubmitting: Function, resetForm: Function }) => {
        try {
            console.log(value)
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
                        <Box marginTop={3}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                Sign In
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </Box>
            {/*<Box marginTop={3} display={'flex'} justifyContent={'center'}>*/}
            {/*    <GoogleAuth/>*/}
            {/*</Box>*/}
            <Box marginTop={3} textAlign='center'>
                <NavLink to='/auth/signUp' className={classes.register}>Not a user? Register</NavLink>
            </Box>
        </Container>
    );
}

export default Login;