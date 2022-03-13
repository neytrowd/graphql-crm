import React, {useState} from "react";
import styleRegister from "./styleRegister";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {NavLink, useNavigate} from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import axios from "axios";

const Register: React.FC = () => {
    const classes = styleRegister();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '', email: '', password: '', confirmPassword: ''
    });

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const register = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register', form);
            let login = await axios.post('http://localhost:5000/auth/login', {
                email: form.email,
                password: form.password
            })

            let {token, userId} = login.data;
            localStorage.setItem('auth-token', login.data.token);
            navigate('/')
        } catch (err: unknown) {
            (err instanceof Error) && console.log(err.message)
        }
    }


    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar} src={Logo}/>
                <Typography component="h1" variant="h5">Register</Typography>

                <form noValidate>
                    <TextField
                        variant="outlined" required fullWidth label="Name"
                        name="name" autoComplete="email" autoFocus margin="normal"
                        onChange={changeHandler}
                    />
                    <TextField
                        variant="outlined" required fullWidth label="Email Address"
                        name="email" margin="normal"
                        onChange={changeHandler}
                    />
                    <TextField
                        variant="outlined" required fullWidth label="Password"
                        name="password" type="password" margin="normal"
                        onChange={changeHandler}
                    />
                    <TextField
                        variant="outlined" required fullWidth label="Confirm Password"
                        name="confirmPassword" type="password" margin="normal"
                        onChange={changeHandler}
                    />
                    <Box marginTop={3} marginBottom={2}>
                        <Button
                            type="submit" fullWidth variant="contained" color="primary"
                            onClick={register}
                        >
                            Register
                        </Button>
                    </Box>
                    {/*<Box marginTop={3} display={'flex'} justifyContent={'center'}>*/}
                    {/*    <GoogleAuth/>*/}
                    {/*</Box>*/}
                </form>
            </div>
            <Box marginTop={3} textAlign='center'>
                <NavLink to='/auth/signIn' className={classes.signIn}>Already have an account? Log in</NavLink>
            </Box>
        </Container>
    );
}

export default Register;