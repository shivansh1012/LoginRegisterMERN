import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserAuthContext from "../../UserAuthContext"
import { apiBaseURL } from "../../../Config";
import "./topbar.css";
import { PowerSettingsNew } from "@material-ui/icons";

export default function Topbar() {
    const { getUserLoggedIn } = useContext(UserAuthContext);

    const history = useHistory();
    
    async function logout() {
        await axios.get(`${apiBaseURL}/user/logout`);
        await getUserLoggedIn();
        history.push("/user");
      }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">MERNPortal</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer" onClick={logout}>
                        <PowerSettingsNew />
                    </div>
                </div>
            </div>
        </div>
    )
}
