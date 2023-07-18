import {Project} from "@prisma/client";
import React from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { usePathname} from 'next/navigation'
import EditButton from "@/app/components/ProjectContent/editingCode/EditButton";


export function ProjectTitleCard(props:{project:Project,children?:React.ReactNode,onBlur?: (event: any) => void,contentEditable?: boolean}) {

    return(
        <div className={"flex-row flex h-64 bg-blend-multiply bg-cover bg-black w-auto bg-opacity-40"}  style={{backgroundImage: `url(${props.project.img})`}}>
            <div className={"text-white flex-initial text-2xl font-bold basis-1/2 justify-self-center flex flex-row"}>
                <h1 id={"title"} contentEditable={props.contentEditable} onBlur={props.onBlur} suppressContentEditableWarning className={"ml-16 flex items-center"}>
                    {props.project.title}
                </h1>
            </div>
            {props.children}
            <EditButton></EditButton>
        </div>
    )
}