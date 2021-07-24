import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SignIn from "./auth/SignIn";

export default function UserRouter() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <div>{path}</div>
            </Route>
            <Route path={`${path}signin`} component={SignIn} />
        </Switch>
    )
}
