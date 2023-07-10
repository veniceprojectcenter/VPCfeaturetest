import React, {useState} from "react";
import {AuthResponce} from "@/app/api/auth/login/route";

export function LoginPageComp() {
    let [authResult,setAuthResult] = useState<AuthResponce>({} as AuthResponce);
    let [authResultText,setAuthResultText] = useState("");
    // @ts-ignore I don't like that I have to do this, but it's the easiest way
    const handleSub = async (event) => {
        event.preventDefault();
        // @ts-ignore
        let authResponce = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
                username:event.target.username.value,
                password:event.target.password.value
            })
        })
        let authBody:AuthResponce =await authResponce.json();
        setAuthResult({...authBody})
        if(authBody.authenticated) {
            setAuthResultText("you have been logged in as " + authBody.name);
        } else {
            setAuthResultText("wrong username or password")
        }
        //await router.push("/")
    }
    return(
        <div className={"grid place-items-center "}>
            <div className={"flex flex-col"}>
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
                <h1 className={"text-white"}>{authResultText}</h1>
            </div>
        </div>
    )
}