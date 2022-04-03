import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./home";
import Auth from "../components/auth";
import SignIn from "./signIn";
import SignUp from "./signUp";
import Verification from "./verification";
import Layout from "../components/layout";
import Dashboard from "./dashboard";
import Projects from "./projects";
import ProjectDetails from "./project-details";
import Team from "./team";
import Employee from "./employee";
import {getUserToken, useLoginUser} from "../service/auth";
import {useMutation} from "@apollo/client";
import {TOKEN_IS_VALID} from "../apollo/queries/authQueries";
import {useAppSelector} from "../store";

const AppRouter = () => {
    const location = useLocation();
    const loginUser = useLoginUser();
    const [tokenIsValid] = useMutation(TOKEN_IS_VALID);
    const {userId} = useAppSelector(store => store.auth)

    useEffect(() => {
        (async () => {
            try {
                let token: string = getUserToken()

                if (token) {
                    let res = await tokenIsValid({variables: {token}})
                    let {success, data} = res.data.tokenIsValid
                    if (success) loginUser(data.userId, token)
                }

            } catch (err: unknown) {
                (err instanceof Error) && console.log(err.message)
            }
        })()
    }, [location])

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}/>

                <Route path={'auth'} element={<Auth/>}>
                    <Route path={'signIn'} element={<SignIn/>}/>
                    <Route path={'signUp'} element={<SignUp/>}/>
                    <Route path={'verify/:userId'} element={<Verification/>}/>
                </Route>

                {userId && (
                    <Route path={'app'} element={<Layout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path={'projects'} element={<Projects/>}/>
                        <Route path={'projects/info/*'} element={<ProjectDetails/>}/>
                        <Route path={'team'} element={<Team/>}/>
                        <Route path={'team/employee/*'} element={<Employee/>}/>
                    </Route>
                )}

                <Route path={'*'} element={<Home/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;