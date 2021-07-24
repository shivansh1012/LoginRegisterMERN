import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";

//authorization
import AuthContext from "../context/AuthContext";

//import components
import Navbar from "../Components/AdminComponents/layout/Navbar";
import Register from '../Components/AdminComponents/auth/Register';
import Login from '../Components/AdminComponents/auth/Login';
import UserPage from "../Components/AdminComponents/layout/UserPage";

export default function Router() {
    const { loggedIn } = useContext(AuthContext);
    const { path } = useRouteMatch();
    return (
        <>
            <Navbar />
            <Switch>
                {loggedIn === true && (
                    <>
                        <Route path={`${path}`}>
                            <UserPage />
                        </Route>
                    </>
                )}
                {loggedIn === false && (
                    <>
                        <Route exact path={`${path}`}>
                            <Login />
                        </Route>
                        <Route path={`${path}/register`}>
                            <Register />
                        </Route>
                    </>
                )}
            </Switch>
        </>
    )
}
