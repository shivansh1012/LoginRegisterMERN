import axios from "axios";
import React, { useEffect, useState } from "react";
import UserForm from './HomeLayout/UserForm';
import UserList from './HomeLayout/UserList';
import {apiBaseURL} from "../../Config";


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
        <div>
            <UserForm getUsers={getUsers}/>
            <UserList users={users}/>
        </div>
    )
}
