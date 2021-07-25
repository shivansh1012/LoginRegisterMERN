import React from 'react'
import { Route, useRouteMatch } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";

export default function LoggedInRouter() {
    const { path } = useRouteMatch();
    return (
        <Route path={`${path}`} > <Home /> </Route>
    )
}
