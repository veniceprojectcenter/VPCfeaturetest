import {Project} from "@prisma/client";
import React from "react";

export function ProjectDescription(props:{project:Project,onBlur?: (event: any) => void,contentEditable?: boolean}) {
    return(
        <p id={"description"} suppressContentEditableWarning className={"text-white leading-loose text-base my-10"} contentEditable={props.contentEditable} onBlur={props.onBlur}>{props.project.description}</p>
    )
}