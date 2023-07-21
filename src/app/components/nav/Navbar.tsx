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
            <div className={"flex text-3xl w-full flex-row text-white"}>
                <div className={"basis-3/12"}>
                    <button onClick={menuToggle} className={"menu ml-3"}>Menu</button>
                </div>
                <div className={"basis-6/12 grid justify-items-center"}><h1 className={"VPC"}>
                    <Link href={"/"}>Venice Project Center</Link></h1>
                </div>
                <div className={"grid basis-3/12 w-fit shrink justify-items-end"}>
                    <button className={"logIn text-white mr-3"} onClick={() => signOut()}>Log out</button>
                </div>
            </div>
        )
    }
    return (
        <div className={"flex text-3xl w-full flex-row text-white"}>
            <div className={"basis-3/12"}>
                <button onClick={menuToggle} className={"menu ml-3"}>Menu</button>
            </div>
            <div className={"basis-6/12 grid justify-items-center"}><h1 className={"VPC"}>
                <Link href={"/"}>Venice Project Center</Link></h1>
            </div>
            <div className={"grid basis-3/12 w-fit shrink justify-items-end"}>
                <Link className={"mr-3"} href={"/login"}>Login</Link>
            </div>
        </div>
    )
}