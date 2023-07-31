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
                <div className={"text-white mx-32 text-3xl font-bold "}>
                    <div className={"my-7"}>
                        <Link onClick={menuToggle} href={"/"} className={""}>Home</Link>
                    </div>
                    <div className={"my-7"}>
                        <Link onClick={menuToggle} href={"/applications"} className={""}>Applications & Tools</Link>
                    </div>
                    <div className={"my-7"}>
                        <Link onClick={menuToggle} href={"/impacts"} className={""}>Impacts</Link>
                    </div>
                    <div className={"my-7"}>
                        <Link onClick={menuToggle} href={"/opendata"} className={""}>Open Data</Link>
                    </div>
                    <div className={"my-7"}>
                        <Link onClick={menuToggle} href={"/publications"} className={""}>Publications</Link>
                    </div>
                    <div className={"my-7"}>
                        <Link onClick={menuToggle} href={"/projects"} className={""}>Student Projects</Link>
                    </div>
                    <div className={"my-7"}>
                        <Link onClick={menuToggle} href={"/podcasts"} className={""}>Docu-Series</Link>
                    </div>
                </div>
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
