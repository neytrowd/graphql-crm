import React from "react";
import Box from "@mui/material/Box";
import {Avatar, CardHeader, Tab, Tabs} from "@mui/material";
import TimelapseIcon from '@mui/icons-material/Timelapse';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import SettingsIcon from '@mui/icons-material/Settings';
import {useNavigate} from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (newValue === 0) navigate('');
        else if (newValue === 1) navigate('tasks-board');
        else if (newValue === 2) navigate('timesheet');
        else if (newValue === 3) navigate('configurations');
    };

    return (
        <Box style={{background: '#fff'}}>
            <Box padding={'0 20px'}>
                <CardHeader
                    title="Enigma"
                    subheader="Qberg"
                    style={{paddingBottom: '0'}}
                    titleTypographyProps={{variant: 'h5'}}
                    avatar={<Avatar style={{width: '50px', height: '50px'}}>R</Avatar>}
                />
            </Box>

            <Box sx={{borderBottom: 1, borderColor: 'divider'}} padding={'0 20px'}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab disableRipple icon={<TimelapseIcon/>} iconPosition="start" label="Timeline"/>
                    <Tab disableRipple icon={<TaskAltIcon/>} iconPosition="start" label="Tasks"/>
                    <Tab disableRipple icon={<AvTimerIcon/>} iconPosition="start" label="Timesheet"/>
                    <Tab disableRipple icon={<SettingsIcon/>} iconPosition="start" label="Profile"/>
                </Tabs>
            </Box>
        </Box>
    )
}

export default Navbar;