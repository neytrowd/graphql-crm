import {makeStyles} from "@mui/styles";

const styleTimesheet = makeStyles((theme) => ({
    wrap:{
        padding: '15px',
        margin: '15px',
        background: '#fff',
        borderRadius: '5px'
    },
    hours:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        background: '#f9f9f9',
        borderRadius: '5px'
    },
    billable:{
        borderTop: '4px solid #3289d2',
    },
    nonBill:{
        borderTop: '4px solid #e5a7ff',
    },
    total:{
        borderTop: '4px solid #ccc',
    }
}))

export default styleTimesheet;