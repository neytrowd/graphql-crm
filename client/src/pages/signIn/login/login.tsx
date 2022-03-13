import React, {useState} from "react";
import styleLogin from "./styleLogin";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {NavLink, useNavigate} from "react-router-dom";
import Logo from '../../../assets/images/logo.png'
import axios from "axios";

const Login: React.FC = () => {
    const classes = styleLogin();
    const navigate = useNavigate();
    const [form, setForm] = useState({email: '', password: ''});

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }

    const login = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
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
            <Box className={classes.paper}>
                <Avatar className={classes.avatar} src={Logo}/>
                <Typography variant="h5">Sign in</Typography>

                <form noValidate>
                    <TextField
                        variant="outlined" margin="normal" required fullWidth
                        name="email" label="Email Address" autoComplete="email" autoFocus
                        onChange={changeHandler}
                    />
                    <TextField
                        variant="outlined" margin="normal" required fullWidth
                        name="password" label="Password" type="password"
                        onChange={changeHandler}
                    />
                    <Box marginTop={3}>
                        <Button
                            type="submit" fullWidth variant="contained" color="primary"
                            onClick={login}
                        >
                            Sign In
                        </Button>
                    </Box>
                </form>
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