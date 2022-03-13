import React from "react";
import Box from "@mui/material/Box";
import {Button, Divider, InputBase, Typography} from "@mui/material";
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
            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography
                    fontWeight={'500'}
                    fontSize={'20px'}
                >
                    Employees
                </Typography>

                <Divider
                    sx={{height: 28, m: 0.5, margin: '0 20px 0 40px'}}
                    orientation="vertical"
                />

                <Box
                    sx={{display: 'flex', alignItems: 'center'}}
                >
                    <IconButton sx={{p: '10px'}}>
                        <SearchIcon/>
                    </IconButton>
                    <InputBase
                        sx={{ml: 1, flex: 1}}
                        placeholder="Search"
                        inputProps={{'aria-label': 'search google maps'}}
                    />
                </Box>
            </Box>

            <Box>
                <Button
                    startIcon={<AddIcon/>}
                    variant={'contained'}
                >
                    Add Employee
                </Button>
            </Box>
        </Box>
    )
}

export default Actions;