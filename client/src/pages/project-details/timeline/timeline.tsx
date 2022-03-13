import React from "react";
import Stream from "./stream";
import Stats from "./stats";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";

const Timeline: React.FC = () => {

    return (
        <Box style={{padding: '20px'}}>
            <Grid container spacing={{xs: 2, md: 3}}>
                <Grid item xs={12} md={7} lg={8}>
                    <Stream/>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Stats/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Timeline;