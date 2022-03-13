import React from "react";
import Navbar from "./navbar";
import {Routes, Route} from 'react-router-dom'
import Timeline from "./timeline";
import TasksBoard from "./tasks-board";
import Timesheet from "./timesheet";
import Configurations from "./configurations";

const ProjectDetails: React.FC = () => {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route index element={<Timeline/>}/>
                <Route path='tasks-board' element={<TasksBoard/>}/>
                <Route path='timesheet' element={<Timesheet/>}/>
                <Route path='configurations' element={<Configurations/>}/>
            </Routes>
        </>
    )
}

export default ProjectDetails;