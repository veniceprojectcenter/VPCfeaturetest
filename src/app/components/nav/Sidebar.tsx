"use client"

import Link from "next/link";
import React from "react";
import {menuToggle} from "@/app/components/nav/menuToggle";



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
                        <Link onClick={menuToggle} href={"/"} className={"menuLink"}>Applications & Tools</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/"} className={"menuLink"}>Impacts</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/"} className={"menuLink"}>Open Data</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/"} className={"menuLink"}>Publications</Link>
                    </li>
                    <li className={"list"}>
                        <Link onClick={menuToggle} href={"/projects"} className={"menuLink"}>Student Projects</Link>
                    </li>
                </ul>
                <div className={"bottom-content"}>
                </div>
            </div>
        </nav>
    );
}
