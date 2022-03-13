import React from "react";
import Checkbox from "@mui/material/Checkbox";
import {Avatar, ListItemAvatar, Typography} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";

const ProjectTasksItem: React.FC<{ value: number }> = ({value}) => {

    return (
        <ListItem
            divider
            disableGutters
            secondaryAction={
                <Checkbox
                    tabIndex={-1}
                    disableRipple
                    size={'small'}
                />
            }
        >
            <ListItemAvatar>
                <Typography color={'#1976d2'} fontSize={'14px'}>Feb 20</Typography>
            </ListItemAvatar>
            <ListItemIcon style={{textAlign: 'center', marginLeft: '20px'}}>
                <Avatar
                    style={{width: '30px', height: '30px'}}
                    // src={`/static/images/avatar/${value + 1}.jpg`}
                />
            </ListItemIcon>
            <Typography fontSize={'14px'}>Line item {value + 1}</Typography>
        </ListItem>
    )
}

export default ProjectTasksItem;