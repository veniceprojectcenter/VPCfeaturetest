"use client"
import React from "react";
import {Sidebar} from "@/app/components/nav/Sidebar";
import {menuToggle} from "@/app/components/nav/menuToggle";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";


export function Navbar() {
    const { data: session } = useSession()
    if(session) {
        return (
            <div className={"flexNavBar"}>
                <div className={"menuBox"}>
                    <button onClick={menuToggle} className={"menu"}>Menu</button>
                </div>
                <div className={"vpcBox"}><h1 className={"VPC"}><Link href={"/"}>Venice Project Center</Link></h1></div>
                <div className={"loginBox"}>
                    <button className={"logIn text-white"} onClick={() => signOut()}>Log out</button>
                </div>
            </div>
        )
    }
    return (
        <div className={"flexNavBar"}>
            <div className={"menuBox"}>
                <button onClick={menuToggle} className={"menu"}>Menu</button>
            </div>
            <div className={"vpcBox"}><h1 className={"VPC"}><Link href={"/"}>Venice Project Center</Link></h1></div>
            <div className={"loginBox"}>
                <button className={"logIn text-white"}>
                    <Link href={"/login"}>Log In</Link>
                </button>
            </div>
        </div>
    )
}