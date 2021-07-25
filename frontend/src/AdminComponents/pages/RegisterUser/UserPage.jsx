import axios from "axios";
import React, { useEffect, useState } from "react";
import UserForm from './UserForm';
import { apiBaseURL } from "../../../Config";
import "./userPage.css";
import { DataGrid } from "@material-ui/data-grid"

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'email', headerName: 'Email', width: 700 }
]

export default function UserPage() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const userList = await axios.get(`${apiBaseURL}/admin/userList/`);
    setUsers(userList.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="user">
      <UserForm getUsers={getUsers} />
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={100}
        />
      </div>
    </div>
  )
}
