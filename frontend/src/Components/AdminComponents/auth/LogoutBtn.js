import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { apiBaseURL } from "../../../Config";


function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get(`${apiBaseURL}/auth/logout`);
    await getLoggedIn();
    history.push("/admin/");
  }

  return <button className="btn btn-warning" onClick={logOut}>Log out</button>;
}

export default LogOutBtn;