import React from "react";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import SideBar from "./SideBar";

export default function Body() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>

            <div className="sidebar">
                <SideBar />
            </div>
        </div>
    );
}
