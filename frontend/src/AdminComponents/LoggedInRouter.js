import React from 'react'
import { Route, useRouteMatch } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import UserPage from "./pages/RegisterUser/UserPage.jsx";

export default function LoggedInRouter() {
    const { path } = useRouteMatch();
    return (
        <>
        <Route exact path={`${path}`}><Home/></Route>
        <Route path={`${path}/user`}><UserPage/></Route>
        </>
    )
}
