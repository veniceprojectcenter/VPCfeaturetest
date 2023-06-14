"use client"
import {Navlist} from "@/app/components/nav/Navlist";
import {FormEvent, useState} from "react";

export default function Page() {
    let [searchParam,setSearchParam] = useState("");

    return(
        <div className={"flex-row flex mx-10"}>
            <div className={"basis-1/3 back"}>
                <div className={"flex flex-col text-white"}>
                    <h1>input params</h1>
                </div>
            </div>
            <div className={"flex flex-col text-white basis-full"}>
                <div className={"border-b-2 border-b-white mb-7"}>
                   <input value={searchParam} onInput={e => { // @ts-ignore
                       setSearchParam(e.target.value);}} placeholder={"Search Projects..."} className={"bg-transparent w-max h-50 outline-none text-2xl"}/>
                </div>
                <div>
                    <Navlist search={searchParam}></Navlist>
                </div>
            </div>
        </div>
    );
}