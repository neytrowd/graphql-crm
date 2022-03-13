import React from "react";
import {Routes, Route} from 'react-router-dom'
import Profile from "./profile";
import Navbar from "./navbar";
import Info from "./info";


const Employee: React.FC = () => {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route index element={<Profile/>}/>
                <Route path='info' element={<Info/>}/>
            </Routes>
        </>
    )
}

export default Employee;