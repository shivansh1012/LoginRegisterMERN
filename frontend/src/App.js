import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import { AuthContextProvider } from "./context/AuthContext";

import AdminRouter from "./Router/AdminRouter";
import UserRouter from "./Router/UserRouter";

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <UserRouter />
        </Route>
        <Route path="/admin">
          <AuthContextProvider>
            <AdminRouter />
          </AuthContextProvider>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}