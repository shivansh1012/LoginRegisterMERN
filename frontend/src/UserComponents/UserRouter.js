import React, { useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import SignIn from "./auth/SignIn";

//authorization
import UserAuthContext from "./UserAuthContext";

export default function UserRouter() {
    const { userLoggedIn } = useContext(UserAuthContext);
    const { path } = useRouteMatch();
    return (
        <Switch>
            {userLoggedIn === true && (
                <>
                    <Route path={`${path}`} >
                        <div>Home</div>
                    </Route>
                </>
            )}
            {userLoggedIn === false && (
                <>
                    <Route path={`${path}`} component={SignIn} />
                </>
            )}
        </Switch>
    )
}
