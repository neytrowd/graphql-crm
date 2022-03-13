import {makeStyles} from "@mui/styles";

const styleTaskBoard = makeStyles((theme) => ({
    tasks: {
        padding: '20px'
    },
    form: {
        borderRadius: '5px',
        background: '#fff',
        margin: '10px 0',
        padding: '10px',
        textAlign: 'right'
    },
    button: {
        background: '#fff!important'
    }
}))

export default styleTaskBoard;