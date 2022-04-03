import React from "react";
import {Avatar, Card, CardHeader, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import {NavLink} from "react-router-dom";

const ListItem: React.FC = () => {

    return (
        <Grid item xs={4} sm={4} md={4} lg={3}>
            <Card>
                <Box
                    component={NavLink}
                    to={'/app/team/employee'}
                    style={{textDecoration: 'none', color: 'inherit'}}
                >
                    <CardHeader
                        style={{padding: '20px'}}
                        avatar={
                            <Avatar>
                                R
                            </Avatar>
                        }
                        title="Avel Neytrowd"
                        subheader="Frontent Developer"
                    />
                </Box>
            </Card>
        </Grid>
    )
}

export default ListItem