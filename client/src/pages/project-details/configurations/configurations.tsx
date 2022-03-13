import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Details from "./details";
import Status from "./status";

const Configurations: React.FC = () => {

    return (
        <Box style={{padding: '15px'}}>
            <Grid container spacing={{xs: 2, md: 3}}>
                <Grid item xs={12} md={8}>
                    <Details/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Status/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Configurations;