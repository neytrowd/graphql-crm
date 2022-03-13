import React from "react";
import Avatar from "@mui/material/Avatar";
import CardHeader from '@mui/material/CardHeader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const TimesheetItem: React.FC<{ value: number }> = ({value}) => {

    return (
        <ListItem divider secondaryAction={
            <Box display={'flex'} alignItems={'center'}>
                <Typography variant={'h5'} component={'span'}>03:00</Typography>
                <IconButton style={{margin: '0 10px'}}> <BorderColorIcon/> </IconButton>
                <IconButton> <DeleteForeverIcon/> </IconButton>
            </Box>
        }>
            <ListItemAvatar>
                <Typography>Feb</Typography>
                <Typography variant={'h5'}>20</Typography>
            </ListItemAvatar>

            <ListItemIcon>
                <CardHeader
                    avatar={
                        <Avatar
                            style={{width: '30px', height: '30px'}}
                        />
                    }
                    title="Avel Neytrowd"
                />
            </ListItemIcon>

            <Typography fontSize={'14px'}>
                Review roles of sprint {value + 1}
            </Typography>
        </ListItem>
    )
}

export default TimesheetItem;