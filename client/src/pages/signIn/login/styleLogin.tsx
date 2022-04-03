import {makeStyles} from "@mui/styles";

const styleLogin = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        margin: '60px 0 30px 0'
    },
    avatar: {
        margin: 'auto',
        marginBottom: '15px',
    },
    captcha:{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px 0'
    }
}));

export default styleLogin;