import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

//authorization
import AuthContext from "./AdminAuthContext";

//import components
import Register from './auth/Register.js';
import Login from './auth/Login.js';
import UserPage from "./layout/UserPage.js";

export default function Router() {
    const { loggedIn } = useContext(AuthContext);
    const { path } = useRouteMatch();
    return (
        <>
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
