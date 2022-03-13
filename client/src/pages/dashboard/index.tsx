import React from "react";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import ProjectTasks from "./project-tasks";
import Noticeboard from "./noticeboard";

const Dashboard: React.FC = () => {

    return (
        <Box padding='20px'>
            <Grid container spacing={{xs: 2, md: 3}}>
                <Grid item xs={12} md={7} lg={8}>
                    <ProjectTasks/>
                </Grid>
                <Grid item xs={12} md={5} lg={4}>
                    <Noticeboard/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard;