import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { AdminAuthContextProvider } from "./AdminComponents/AdminAuthContext";
import { UserAuthContextProvider } from "./UserComponents/UserAuthContext"

import AdminRouter from "./AdminComponents/AdminRouter.js";
import UserRouter from "./UserComponents/UserRouter.js";

axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function App() {
  
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div class="flex">
            <Button variant="outlined" size="large" color="primary" className={classes.margin} component={Link} to="/user">
              User Portal
            </Button>
            <Button variant="outlined" size="large" color="primary" className={classes.margin} component={Link} to="/admin">
              Admin Portal
            </Button>
          </div>
        </Route>
        <Route path="/user">
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