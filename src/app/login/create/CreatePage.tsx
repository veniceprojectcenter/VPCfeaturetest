"use client"


import React, {useState} from "react";
import {MaintainerList} from "@/app/components/maintainerComponites/MaintainerList";

export default function CreatePage() {
    let [reload,setReload] = useState(true);
    let setReloadCall = () => {
        setReload((reload) => {
            return !reload;
        });
        console.log(reload)
    }




    // @ts-ignore I don't like that I have to do this, but it's the easiest way
    const handleSub = async (event) => {
        event.preventDefault();
        // @ts-ignore
        await fetch("/api/auth/create", {
            method: "POST",
            body: JSON.stringify({
                id:"",
                email:event.target.username.value,
            })
        })
        await setReloadCall();
    }
    return(
        <div>
            <form onSubmit={handleSub}>
                <label htmlFor="username">Think</label>
                <label className={"text-white"}>username</label>
                <input className={"text-black"} type="text" id="email" name="email" required />
                <button className={"text-white"} type="submit">Submit</button>
            </form>
            <MaintainerList reloadTrigger={reload} postReloadCallback={setReloadCall}></MaintainerList>
        </div>
    )
}