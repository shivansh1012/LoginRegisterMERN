import React, { useContext } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import "../App.css";

import SignIn from "./auth/SignIn";

//authorization
import UserAuthContext from "./UserAuthContext";

import Sidebar from "./layout/Sidebar/Sidebar.jsx";
import Topbar from "./layout/Topbar/Topbar.jsx";

import LoggedInRouter from "./LoggedInRouter";

export default function UserRouter() {
    const { userLoggedIn } = useContext(UserAuthContext);
    const { path } = useRouteMatch();
    return (
        <>
            {userLoggedIn === true && (
                <>
                    <Topbar />
                    <div className="container">
                        <Sidebar />
                        <LoggedInRouter />
                    </div>
                </>
            )}
            {userLoggedIn === false && (
                <>
                    <Route path={`${path}`} component={SignIn} />
                </>
            )}
        </>
    )
}
