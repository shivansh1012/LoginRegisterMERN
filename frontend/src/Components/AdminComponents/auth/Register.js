import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { apiBaseURL } from "../../../Config";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function register(e) {
        e.preventDefault();
        try {
            const registerData = {
                email,
                password
            }

            await axios.post(`${apiBaseURL}/auth/register`, registerData);

            await getLoggedIn();
            history.push("/");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="container w-50">
            <h3 className="text-center py-5">
                Login Page
            </h3>
            <form onSubmit={register}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} className="form-control" id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rePassword" className="form-label">Re-enter Password</label>
                    <input type="password" value={passwordVerify} onChange={(e) => {setPasswordVerify(e.target.value)}} className="form-control" id="rePassword" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
