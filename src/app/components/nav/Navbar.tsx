"use client"

import React from "react";
import {Sidebar} from "@/app/components/nav/Sidebar";

const MenuOnClick = () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar.classList.toggle("opensidebar");
    console.log(sideBar);
}
export function Navbar() {

    return (
        <div className={"flexNavBar"}>
            <button onClick={MenuOnClick} className={"menu text-white"}>Menu</button>
            <p className={"VPC text-white"}>Venice Project Center</p>
            <button className={"logIn text-white"}>Log In</button>
        </div>
    )
}