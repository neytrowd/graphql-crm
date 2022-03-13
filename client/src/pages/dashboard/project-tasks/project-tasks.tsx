import React from "react";
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Typography from "@mui/material/Typography";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ProjectTasksItem from "../project-tasks-item";

const ProjectTasks: React.FC = () => {

    return (
        <Box padding={'20px'} style={{background: '#fff', borderRadius: '5px'}}>
            <Typography fontWeight={600}>Things to do</Typography>

            <Box marginTop={'30px'}>
                <Typography fontWeight={600}>
                    <TaskAltIcon style={{marginBottom: '-5px'}}/> Enigma project
                </Typography>

                <List>
                    {[0, 1, 2, 3, 4].map((value) => (
                        <ProjectTasksItem key={value} value={value}/>
                    ))}
                </List>
            </Box>

            <Box marginTop={'30px'}>
                <Typography fontWeight={600}>
                    <TaskAltIcon style={{marginBottom: '-5px'}}/> RPToken project
                </Typography>

                <List>
                    {[0, 1, 2, 3].map((value) => (
                        <ProjectTasksItem key={value} value={value}/>
                    ))}
                </List>
            </Box>
        </Box>
    )
}

export default ProjectTasks;