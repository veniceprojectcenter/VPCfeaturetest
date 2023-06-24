"use client"

import Link from "next/link";
import React from "react";
import {menuToggle} from "@/app/components/nav/menuToggle";
import {Navbar} from "@/app/components/nav/Navbar";
import {Navlist} from "@/app/components/nav/Navlist";



export function Sidebar() {

    return (
        <nav className={"sidebar"}>
            <button onClick={menuToggle} className={"closeMenu"}>Close</button>
            <div className={"sidebar-content"}>
                <ul className={"lists"}>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/"} className={"menuLink"}>Home</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/applications"} className={"menuLink"}>Applications & Tools</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/"} className={"menuLink"}>Impacts</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/opendata"} className={"menuLink"}>Open Data</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/"} className={"menuLink"}>Publications</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/projects"} className={"menuLink"}>Student Projects</Link>
                    </li>
                </ul>
                <div className = {"sidebarNavlist"}>
                    {
                        // TODO this makes it so we scroll for awhile
                        //<Navlist search={""}/>
                    }
                </div>
                <div className={"bottom-content"}></div>
            </div>
        </nav>
    );
}
