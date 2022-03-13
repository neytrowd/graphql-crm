import React from 'react';
import {Button, Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Clock from "../../../components/clock";

const Description: React.FC = () => {

    return (
        <Box position={'relative'} minHeight={'100vh'} overflow={'hidden'}>
            <Box position={'relative'} zIndex={5}>
                <Container maxWidth={'lg'}>
                    <Box>
                        <Typography color={'#051441'} textAlign={'center'} fontSize={'43px'} fontWeight={'700'}>
                            Integrated CRM, Project Management & HR software.
                        </Typography>
                    </Box>

                    <Box padding={'100px 15px'} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}>
                        <Box maxWidth={'450px'}>
                            <Typography fontSize={'22px'} style={{marginBottom: '30px'}}>
                                A better way to manage your sales, projects, team, clients & marketing - on a single
                                platform.
                                Powerful, affordable & easy to use software for your business.
                            </Typography>
                            <Button variant={'contained'} size={'large'}>Get Started</Button>
                        </Box>

                        <Box flex={1} style={{transform: 'translateY(-50px)'}}>
                            <Clock/>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box width={'500px'} position={'absolute'} top={'0'} right={'-70px'}>
                <svg viewBox="0 0 412.76 473.25">
                    <path className="st0" fill={'#d0f8d6'} d="M405.72,227.4c-2.62,46.29-25.29,76.92-65.88,131.76c-50.38,68.07-79.1,106.88-121.5,109.08
                  c-57.81,3-105.81-63.89-156.06-133.92c-27.13-37.8-40.69-56.71-48.6-86.4C-4.06,181.34,9.53,77.71,88.2,28.68
                  c86.63-53.99,190.71-3.44,240.84,39.96C343.85,81.46,410.52,142.64,405.72,227.4z"/>
                </svg>
            </Box>
        </Box>
    );
};

export default Description;