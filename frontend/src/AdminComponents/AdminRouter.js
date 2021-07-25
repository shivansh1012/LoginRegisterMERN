import React, { useContext } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "../App.css";

//authorization
import AdminAuthContext from "./AdminAuthContext";

//import components
import Register from './auth/Register.js';
import Login from './auth/Login.js';

import Sidebar from "./layout/Sidebar/Sidebar.jsx";
import Topbar from "./layout/Topbar/Topbar.jsx";

import LoggedInRouter from "./LoggedInRouter";

export default function Router() {
    const { adminLoggedIn } = useContext(AdminAuthContext);
    const { path } = useRouteMatch();
    return (
        <>
            {adminLoggedIn === true && (
                <>
                    <Topbar />
                    <div className="container">
                        <Sidebar />
                        <LoggedInRouter />
                    </div>
                </>
            )}
            {adminLoggedIn === false && (
                <>
                    <Route exact path={`${path}`}>
                        <Login />
                    </Route>
                    <Route path={`${path}/register`}>
                        <Register />
                    </Route>
                </>
            )}
        </>
    )
}
