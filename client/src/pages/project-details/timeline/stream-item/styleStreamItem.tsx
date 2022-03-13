import {makeStyles} from "@mui/styles";

const styleStream = makeStyles((theme) => ({
    time: {
        color: 'rgba(0,0,0,0.6)',
        maxWidth: "100px",
        padding: '0'
    },
    timeDots: {
        maxWidth: "112px",
    },
    timeContent: {
        borderTop: '2px solid #bdbdbd',
        borderBottom: '2px solid #bdbdbd',
        marginLeft: '-19px!important',
        paddingLeft: '40px!important'
    }
}))

export default styleStream;