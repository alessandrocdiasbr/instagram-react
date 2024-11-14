import React from "react";
import User from "./User";
import Suggestions from "./components/Suggestions";

export default function SideBar() {
    return (
        <div className="sidebar">
            <User />
            <Suggestions />
            
        </div>
    );
}
