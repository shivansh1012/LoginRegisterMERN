import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AdminAuthContext from "../AdminAuthContext"
import { apiBaseURL } from "../../Config";


function LogOutBtn() {
  const { getAdminLoggedIn } = useContext(AdminAuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get(`${apiBaseURL}/admin/logout`);
    await getAdminLoggedIn();
    history.push("/admin/");
  }

  return <button className="btn btn-warning" onClick={logOut}>Log out</button>;
}

export default LogOutBtn;