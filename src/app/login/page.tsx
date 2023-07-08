"use client"
import {useRouter} from "next/navigation";
import React from "react";
import {Maintainer} from "@prisma/client";

export default async function Page() {
    const router = useRouter();


    // @ts-ignore I don't like that I have to do this, but it's the easiest way
    const handleSub = async (event) => {
        event.preventDefault();
        // @ts-ignore
        await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username:event.target.username.value,
                password:event.target.password.value
            })
        })
        //TODO let them know if they are authenticated or not
        await router.push("/")
    }
    return(
        <div className={"grid place-items-center "}>
            <form onSubmit={handleSub}>
                <div className={"flex flex-col"}>
                    <label className={"text-white"}>username:</label>
                    <input className={"text-black rounded-md"} type="text" id="username" name="username" required />
                    <div className={"m-10"}></div>
                    <label className={"text-white"}>password:</label>
                    <input className={"text-black rounded-md"} type="password" id="password" name="password" required />
                    <div className={"m-2"}></div>
                    <button className={"text-white rounded-full border-white border-4"} type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}