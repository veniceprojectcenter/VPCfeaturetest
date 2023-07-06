"use client"

import React, {RefObject, useEffect, useImperativeHandle, useState} from "react";
import {Maintainer} from "@prisma/client";

export type ReloadHandle = {
    reload: () => void
}

type Props = {};

export function MaintainerList(props:{reloadTrigger:boolean,postReloadCallback:() => void}) {
    let [maintainerList,setMaintainerList] = useState<Maintainer[]>([])
    let getData = async () => {
        let maintainerListRequest = await fetch("/api/auth/list", {
            method: "GET"
        });
        setMaintainerList(await maintainerListRequest.json());
    }
    useEffect(() => {
        getData()
        if(props.reloadTrigger) {
            console.log("reloading");
            getData().then(() => {
                props.postReloadCallback();
            })
        }
        return () => {

        }
    },[props.reloadTrigger, props.postReloadCallback, props])
    return (
        <div className={"m-10 flex flex-col text-white"}>
            {maintainerList.map((maintainer) => {
                return(<div key={maintainer.id} className={"flex-row flex"}>
                    <h1 className={"mr-5"}>
                        {maintainer.id}
                    </h1>
                    <h1 className={"ml-5"}>
                        {maintainer.username}
                    </h1>
                </div>)
            })}
        </div>
    )
}