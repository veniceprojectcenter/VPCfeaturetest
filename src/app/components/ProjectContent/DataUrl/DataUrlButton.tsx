import React from "react";
import {Dataurl} from "@prisma/client";

export function DataUrlButton(props:{dataurl:Dataurl}) {
    return(
        <a href={props.dataurl.url}  key={props.dataurl.id + "link"} className={"text-white rounded border-4 text-base"}>
            {props.dataurl.text}
        </a>
    )
}