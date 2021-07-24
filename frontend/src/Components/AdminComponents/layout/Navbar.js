import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import LogOutBtn from "../auth/LogoutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/admin/">MERNPortal</a>
        <div>
          <div className="navbar-nav">
            {loggedIn === false && (
              <>
                <a className="nav-link" href="/admin/">Login</a>
                <a className="nav-link" href="/admin/register">Register</a>
              </>
            )}

            {loggedIn === true && (
              <>
                <LogOutBtn/>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;