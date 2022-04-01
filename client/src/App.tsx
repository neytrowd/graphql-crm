import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom'
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Auth from "./components/auth";
import Layout from "./components/layout";
import ScrollToTop from "./components/scrollToTop";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/project-details";
import Team from "./pages/team";
import Employee from "./pages/employee";
import theme from "./assets/theme";
import Verification from "./pages/verification";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ScrollToTop/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>

                <Route path={'auth'} element={<Auth/>}>
                    <Route path={'signIn'} element={<SignIn/>}/>
                    <Route path={'signUp'} element={<SignUp/>}/>
                    <Route path={'verify/:userId'} element={<Verification/>}/>
                </Route>

                <Route path={'app'} element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path={'projects'} element={<Projects/>}/>
                    <Route path={'projects/info/*'} element={<ProjectDetails/>}/>
                    <Route path={'team'} element={<Team/>}/>
                    <Route path={'team/employee/*'} element={<Employee/>}/>
                </Route>
            </Routes>

            <ToastContainer
                position={'top-right'}
            />
        </ThemeProvider>
    );
}

export default App;
