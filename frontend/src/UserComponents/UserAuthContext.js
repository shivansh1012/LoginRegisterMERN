import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { apiBaseURL } from "../Config";

const UserAuthContext = createContext();

function UserAuthContextProvider(props) {
  const [userLoggedIn, setUserLoggedIn] = useState(undefined);

  async function getUserLoggedIn() {
    const loggedInRes = await axios.get(`${apiBaseURL}/user/loggedIn`);
    setUserLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getUserLoggedIn();
  }, []);

  return (
    <UserAuthContext.Provider value={{ userLoggedIn, getUserLoggedIn }}>
      {props.children}
    </UserAuthContext.Provider>
  );
}

export default UserAuthContext;
export { UserAuthContextProvider };