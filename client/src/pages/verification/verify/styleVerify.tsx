import {makeStyles} from "@mui/styles";

const styleVerify = makeStyles((theme) => ({
    paper: {
        marginTop: '80px',
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
    },
    submit:{
        margin: '20px 0'
    }
}));

export default styleVerify;
