import React from "react";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ListItem: React.FC = () => {

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <Box
                    component={NavLink}
                    to={'/app/projects/info'}
                    style={{textDecoration: 'none', color: 'inherit'}}
                >
                    <Box position={'relative'}>
                        <CardHeader
                            style={{padding: '20px'}}
                            avatar={
                                <Avatar
                                    sx={{width: 56, height: 56}}
                                    src={'https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png'}
                                >
                                    R
                                </Avatar>
                            }
                        />

                        <Box position={'absolute'} top={15} right={30} style={{color: '#5a5858'}}>
                            <Typography fontSize={'14px'}>8 hours</Typography>
                            <AccessTimeIcon style={{background: '#fff'}}/>
                        </Box>

                        <Divider style={{marginTop: '-48px', marginBottom: '45px'}}/>

                        <Box padding={'0 20px 10px 20px'}>
                            <Typography>Qberg</Typography>
                            <Typography fontWeight={600}>Enigma</Typography>
                            <Typography fontWeight={500} textAlign={'right'} color={'#9a9a9a'}>
                                <PeopleIcon style={{marginBottom: '-5px'}}/> 7
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Card>
        </Grid>
    )
}

export default ListItem