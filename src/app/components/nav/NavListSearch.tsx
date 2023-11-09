"use client"
import {Navlist} from "@/app/components/nav/Navlist";
import {Suspense, useState} from "react";
import {PROJECT_TYPE} from "@prisma/client";
import NavLoading from "@/app/components/nav/NavLoading";

export function NavListSearch(props:{type:PROJECT_TYPE, tagsToFilter:string[]}) {
    let [searchParam,setSearchParam] = useState("");
    return (
        <div className={"flex flex-col text-white basis-full max-w-4xl"}>
            <div className={"border-b-2 border-b-white mb-7"}>
                <input value={searchParam} onInput={e => { // @ts-ignore
                    setSearchParam(e.target.value);}} placeholder={"Search Projects..."} className={"bg-transparent w-max h-50 outline-none text-2xl"}/>
            </div>
            <div className = {"my-5"}>
                <Navlist search={searchParam} type={props.type} tagsToFilter={props.tagsToFilter}></Navlist>
            </div>
        </div>
    );
}