import React from "react";
import styleRegister from "./styleRegister";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {NavLink, useNavigate} from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui'
import * as Yup from 'yup';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const Register: React.FC = () => {
    const classes = styleRegister();
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
            <div className={classes.paper}>
                <Avatar className={classes.avatar} src={Logo}/>
                <Typography component="h1" variant="h5">Register</Typography>
                <Formik
                    initialValues={initialState} onSubmit={onSubmit}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Name is required'),
                        email: Yup.string().email('Invalid email address').required('Email is required'),
                        password: Yup.string().min(5, 'Must be least 5 symbols').required('Password is required'),
                        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password must match')
                    })}
                >
                    <Form>
                        <Field
                            component={TextField} name="name"
                            variant="outlined" required fullWidth label="Name"
                            autoFocus margin="normal"
                        />
                        <Field
                            component={TextField} name="email"
                            variant="outlined" required fullWidth label="Email Address"
                            margin="normal"
                        />
                        <Field
                            component={TextField} name="password"
                            variant="outlined" required fullWidth label="Password"
                            type="password" margin="normal"
                        />
                        <Field
                            component={TextField} name="confirmPassword"
                            variant="outlined" required fullWidth label="Confirm Password"
                            type="password" margin="normal"
                        />
                        <Box marginTop={3} marginBottom={2}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                Register
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </div>
            <Box marginTop={3} textAlign='center'>
                <NavLink to='/auth/signIn' className={classes.signIn}>Already have an account? Log in</NavLink>
            </Box>
        </Container>
    );
}

export default Register;