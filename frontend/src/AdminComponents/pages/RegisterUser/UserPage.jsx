import axios from "axios";
import React, { useEffect, useState } from "react";
import UserForm from './UserForm';
import UserList from './UserList';
import { apiBaseURL } from "../../../Config";
import "./userPage.css";

export default function UserPage() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    const userList = await axios.get(`${apiBaseURL}/admin/userList/`);
    setUsers(userList.data);
  }

  const renderForms = (user, index) => {
    return (
      <tr key={index}>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    )
  }

  useEffect(() => {
    getUsers();
  }, []);
  
  return (
    <div className="user">
      <UserForm getUsers={getUsers} />
      <UserList users={users} />
    </div>
  )
}
