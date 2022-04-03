import React from 'react';
import './App.scss';
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import ScrollToTop from "./components/scrollToTop";
import theme from "./assets/theme";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from "./pages/app-router";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <ScrollToTop/>
            <AppRouter/>
            <ToastContainer
                position={'top-right'}
            />
        </ThemeProvider>
    );
}

export default App;
