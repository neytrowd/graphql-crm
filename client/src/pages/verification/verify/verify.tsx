import React from "react";
import styleVerify from "./styleVerify";
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
import {useMutation} from "@apollo/client";
import {SIGN_UP} from "../../../apollo/queries/authQueries";
import {IRegister} from "../../../types";

const initialState = {
    firstname: '',
    jobDesc: '',
    email: 'neytrowd@gmail.com',
    password: '',
}

const Verify: React.FC = () => {
    const classes = styleVerify();
    const navigate = useNavigate();
    const [signUp] = useMutation(SIGN_UP)

    const verify = async (data: IRegister) => {
        let res = await signUp({
            variables: {data}
        })

        console.log(res)
    }

    const onSubmit = async (value: any, {
        setSubmitting,
        resetForm
    }: { setSubmitting: Function, resetForm: Function }) => {
        try {
            const {confirmPassword, ...data} = value
            verify(data)
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
                <Typography component="h1" variant="h5">Verification</Typography>
                <Formik
                    initialValues={initialState} onSubmit={onSubmit}
                    validationSchema={Yup.object({
                        firstname: Yup.string().required('Name is required'),
                        jobDesc: Yup.string().required('Job title is required'),
                        email: Yup.string().email('Invalid email address').required('Email is required'),
                        password: Yup.string().min(5, 'Must be least 5 symbols').required('Password is required'),
                    })}
                >
                    <Form>
                        <Field
                            component={TextField} name="firstname"
                            variant="outlined" required fullWidth label="Name"
                            autoFocus margin="normal"
                        />
                        <Field
                            component={TextField} name="jobDesc"
                            variant="outlined" required fullWidth label="Job title"
                            margin="normal"
                        />
                        <Field
                            component={TextField} name="email"
                            variant="outlined" required fullWidth label="Email Address"
                            margin="normal" disabled={true}
                        />
                        <Field
                            component={TextField} name="password"
                            variant="outlined" required fullWidth label="Password"
                            type="password" margin="normal"
                        />
                        <Box marginTop={3} marginBottom={2}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                Verify account
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

export default Verify;