import axios from "axios";
import React, { useState } from "react";
import {apiBaseURL} from "../../../Config";

export default function UserForm({ getUsers }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function saveUser(e) {
        e.preventDefault();
    
        try {
          const userData = {
            email: email,
            password: password,
          };
          await axios.post(`${apiBaseURL}/admin/register/user`, userData);
          getUsers();
          setEmail("")
          setPassword("")
        } catch (err) {
          console.error(err);
        }
      }

    return (
        <div className="container w-50">
            <h3 className="text-center py-3">
                Add Users
            </h3>
            <form onSubmit={saveUser}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Add new User</button>
            </form>
        </div>
    )
}
