"use client"

import React from "react";
import {Sidebar} from "@/app/components/nav/Sidebar";
import {menuToggle} from "@/app/components/nav/menuToggle";


export function Navbar() {

    return (
        <div className={"flexNavBar"}>
            <button onClick={menuToggle} className={"menu text-white"}>Menu</button>
            <p className={"VPC text-white"}>Venice Project Center</p>
            <button className={"logIn text-white"}>Log In</button>
        </div>
    )
}