import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//authorization
import AdminAuthContext from "./AdminAuthContext";

//import components
import Register from './auth/Register.js';
import Login from './auth/Login.js';
import UserPage from "./layout/UserPage.js";

export default function Router() {
    const { adminLoggedIn } = useContext(AdminAuthContext);
    const { path } = useRouteMatch();
    return (
        <>
            <Switch>
                {adminLoggedIn === true && (
                    <>
                        <Route path={`${path}`}>
                            <UserPage />
                        </Route>
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
            </Switch>
        </>
    )
}
