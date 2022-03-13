import {makeStyles, createStyles} from "@mui/styles";

const styleNavbar = makeStyles((theme: any) => createStyles({
    toolbar: {
        minHeight: '50px!important',
    },
    breadcrumbs: {
        '&>a': {
            display: 'inline-block',
            marginRight: '7px',
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '14px'
        }
    },
    drawerBox: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'space-between',
        height: '90vh',
        padding: '50px 0 15px'
    },
    drawerButtons: {
        margin: '0 0 40px 0!important',
        color: '#bababa!important',
        transform: 'scale(1.2)!important',
        borderRadius: '10px!important',
        '&.active': {
            background: 'rgba(0,0,0,0.2)'
        }
    }
}))

export default styleNavbar;