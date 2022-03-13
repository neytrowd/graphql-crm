import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import AddIcon from '@mui/icons-material/Add';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';

const Actions: React.FC = () => {

    return (
        <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            flexWrap={'wrap'}
            padding={'15px'}
            style={{background: '#fff'}}
        >
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography fontWeight={'500'} fontSize={'20px'}>
                    Projects
                </Typography>

                <Divider sx={{height: 28, margin: '0 20px 0 40px'}} orientation="vertical"/>

                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <IconButton sx={{p: '10px'}}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase sx={{ml: 1, flex: 1}} placeholder="Search"/>
                </Box>
            </Box>

            <Box>
                <Button startIcon={<AddIcon/>} variant={'contained'}>
                    Add Project
                </Button>
            </Box>
        </Box>
    )
}

export default Actions;