import React, {useState} from "react";
import PopupWithClose from "@/app/components/random/popup/PopupWithClose";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
import { useRouter } from 'next/navigation'
import {TagRequestResponse} from "@/app/api/projects/datatypes/TagRequestResponse";
export function DeleteProjectButton(props:{project:FullProject}) {
    let [open,setOpen] = useState(false)
    const router = useRouter();
    let DeleteProject = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await fetch("/api/projects", {
            method:"DELETE",
            body:JSON.stringify(props.project)
        });
        await router.push('/')
    }
    if(props.project.id !== "") {
        return (
            <>
                <button className={"text-white w-full border-white border-2 text-4xl my-10"}
                        onClick={() => setOpen(true)}>delete project
                </button>
                <PopupWithClose open={open} setOpenCallback={(value) => setOpen(value)}>
                    <div className={"m-20"}>
                        <h1>
                            Are you sure you want to delete this project?
                        </h1>
                        <button onClick={DeleteProject}>Yes</button>
                    </div>
                </PopupWithClose>
            </>
        )
    }
    return null
}
