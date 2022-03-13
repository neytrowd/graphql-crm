import React from "react";
import Box from "@mui/material/Box";
import {Avatar, CardHeader, Tab, Tabs} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {LinearProgress} from "@mui/material";
import Typography from "@mui/material/Typography";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        if (newValue === 0) navigate('');
        else if (newValue === 1) navigate('info');
    };

    return (
        <Box style={{background: '#fff'}}>
            <Box padding={'0 20px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}
                 flexWrap={'wrap'}>
                <CardHeader
                    style={{paddingBottom: '0'}}
                    avatar={<Avatar style={{width: '50px', height: '50px'}}>R</Avatar>}
                    title="Avel Neytrowd"
                    subheader="Frontent developer"
                    titleTypographyProps={{variant: 'h5'}}
                />
                <Box marginTop={'20px'} sx={{width: {sm: '300px', xs: '100%'},}}>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography fontSize={'14px'}>Profile</Typography>
                        <Typography fontSize={'14px'}>50%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={50} style={{height: '10px', borderRadius: '5px'}}/>
                </Box>
            </Box>

            <Box sx={{borderBottom: 1, borderColor: 'divider'}} padding={'0 20px'} marginTop={'20px'}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab disableRipple label="Profile"/>
                    <Tab disableRipple label="Information"/>
                </Tabs>
            </Box>
        </Box>
    )
}

export default Navbar;