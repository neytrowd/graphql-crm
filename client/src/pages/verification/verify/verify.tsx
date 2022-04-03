import React, {useEffect, useState} from "react";
import styleVerify from "./styleVerify";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import {Field, Form, Formik} from 'formik';
import {TextField} from 'formik-mui'
import * as Yup from 'yup';
import {useMutation, useQuery} from "@apollo/client";
import {IVerificationForm} from "../../../types";
import {LOAD_VERIFICATION_DATA, VERIFY_ACCOUNT} from "../../../apollo/queries/verifyQueries";
import {toast} from 'react-toastify';
import ReCAPTCHA from "react-google-recaptcha";
import {RECAPTChA_SITE_KEY} from "../../../constants";

const initialState: IVerificationForm = {
    jobDesc: '',
    email: '',
    password: '',
}

const Verify: React.FC = () => {
    const classes = styleVerify();
    const {userId} = useParams();
    const navigate = useNavigate();
    const [verifyAccount] = useMutation(VERIFY_ACCOUNT);
    const [form, setForm] = useState<IVerificationForm>(initialState);
    const [submitDisable, setSubmitDisable] = useState(true);
    const {data} = useQuery(LOAD_VERIFICATION_DATA, {variables: {userId}});

    useEffect(() => {
        if (data) {
            const {email} = data.loadVerificationData.data
            setForm(prev => ({
                ...prev, email
            }))
        }
    }, [data])

    const verify = async (data: IVerificationForm) => {
        try {
            let res = await verifyAccount({variables: {data}})
            let {success, message} = res.data.verifyAccount;

            if (success) {
                toast.info(message)
                navigate('/auth/signIn')
            } else {
                toast.error(message)
            }
        } catch (err: unknown) {
            (err instanceof Error) && console.log(err.message)
        }
    }

    const onSubmit = async (value: IVerificationForm, {
        setSubmitting,
        resetForm
    }: { setSubmitting: Function, resetForm: Function }) => {
        verify(value)
        setSubmitting(false)
        resetForm()
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar} src={Logo}/>
                <Typography component="h1" variant="h5">Verification</Typography>
                <Formik
                    initialValues={form.email ? form : initialState} onSubmit={onSubmit}
                    enableReinitialize={true}
                    validationSchema={Yup.object({
                        jobDesc: Yup.string()
                            .required('Job title is required'),
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
                            name="jobDesc"
                            variant="outlined"
                            required
                            fullWidth
                            label="Job title"
                            margin="normal"
                        />
                        <Field
                            component={TextField}
                            name="email"
                            variant="outlined"
                            required
                            fullWidth
                            label="Email Address"
                            margin="normal"
                            disabled={true}
                        />
                        <Field
                            component={TextField}
                            name="password"
                            variant="outlined"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            margin="normal"
                        />
                        <Box className={classes.captcha}>
                            <ReCAPTCHA
                                sitekey={RECAPTChA_SITE_KEY}
                                onChange={() => setSubmitDisable(false)}
                            />
                        </Box>
                        <Box className={classes.submit}>
                            <Button
                                type="submit" fullWidth
                                variant="contained"
                                color="primary"
                                disabled={submitDisable}
                            >
                                Verify account
                            </Button>
                        </Box>
                    </Form>
                </Formik>
            </div>
        </Container>
    );
}

export default Verify;