import {makeStyles} from "@mui/styles";

const styleRegister = makeStyles((theme) => ({
    paper: {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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

export default styleRegister;
