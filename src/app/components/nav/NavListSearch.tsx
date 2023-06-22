"use client"
import {Navlist} from "@/app/components/nav/Navlist";
import {useState} from "react";
import {PROJECT_TYPE} from "@prisma/client";

export function NavListSearch(props:{type:PROJECT_TYPE}) {
    let [searchParam,setSearchParam] = useState("");
    return (
        <div className={"flex flex-col text-white basis-full w-full"}>
            <div className={"border-b-2 border-b-white mb-7"}>
                <input value={searchParam} onInput={e => { // @ts-ignore
                    setSearchParam(e.target.value);}} placeholder={"Search Projects..."} className={"bg-transparent w-max h-50 outline-none text-2xl"}/>
            </div>
            <div>
               <Navlist search={searchParam} type={props.type}></Navlist>
            </div>
        </div>
    );
}