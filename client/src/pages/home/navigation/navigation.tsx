import React from 'react';
import Box from "@mui/material/Box";
import Logo from '../../../assets/images/teamwave.png';
import {Button, ButtonGroup, Container} from "@mui/material";
import {NavLink} from "react-router-dom";

const Navigation: React.FC = () => {

    return (
        <Container maxWidth={'lg'}>
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                padding={'20px'}
                marginBottom={'30px'}
            >
                <Button
                    to={'/'}
                    disableRipple
                    component={NavLink}
                    startIcon={<Box component={'img'} src={Logo} width={'40px'}/>}
                    style={{color: '#051441', fontSize: '25px', backgroundColor: 'transparent',}}
                >
                    CRM Project
                </Button>

                <ButtonGroup variant="contained">
                    <Button component={NavLink} to={'/auth/signIn'}>Login</Button>
                    <Button component={NavLink} to={'/auth/signUp'}>Register</Button>
                </ButtonGroup>
            </Box>
        </Container>
    );
};

export default Navigation;