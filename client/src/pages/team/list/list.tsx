import React from "react";
import {Divider, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ListItem from "../list-item";
import styleList from "./styleList";

const List: React.FC = () => {
    const classes = styleList()

    return (
        <Box className={classes.box}>
            <Box className={classes.list}>
                <Typography fontWeight={'500'}>Employees</Typography>
                <Divider className={classes.divider}/>

                <Grid
                    container
                    spacing={{xs: 2, md: 3}}
                    columns={{xs: 4, sm: 8, md: 12, lg: 12}}
                >
                    {Array.from(Array(6)).map((_, index) => (
                        <ListItem key={index}/>
                    ))}
                </Grid>
            </Box>

            <Box className={classes.list}>
                <Typography fontWeight={'500'}>Registered</Typography>
                <Divider className={classes.divider}/>

                <Grid
                    container
                    spacing={{xs: 2, md: 3}}
                    columns={{xs: 4, sm: 8, md: 12, lg: 12}}
                >
                    {Array.from(Array(5)).map((_, index) => (
                        <ListItem key={index}/>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default List;