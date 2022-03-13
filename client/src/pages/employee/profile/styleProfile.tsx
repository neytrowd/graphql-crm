import {makeStyles} from "@mui/styles";

const styleProfile = makeStyles((theme) => ({
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

export default styleProfile;