import {makeStyles} from "@mui/styles";

const styleDetails = makeStyles((theme) => ({
    wrap: {
        minHeight: '350px',
        background: '#fff',
        borderRadius: '5px',
        padding: '25px'
    },
    avatar: {
        width: '100px',
        height: '100px',
    },
    avatarPhoto: {
        width: '100px!important',
        height: '100px!important'
    },
    avatarChange: {
        transform: 'translate(60px,-30px)'
    },
    avatarIcon: {
        transform: 'scale(1.3)'
    }
}))

export default styleDetails;