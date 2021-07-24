import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import { AdminAuthContextProvider } from "./AdminComponents/AdminAuthContext";
import { UserAuthContextProvider } from "./UserComponents/UserAuthContext"

import AdminRouter from "./AdminComponents/AdminRouter.js";
import UserRouter from "./UserComponents/UserRouter.js";

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/user">
          <UserAuthContextProvider>
            <UserRouter />
          </UserAuthContextProvider>
        </Route>
        <Route path="/admin">
          <AdminAuthContextProvider>
            <AdminRouter />
          </AdminAuthContextProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}