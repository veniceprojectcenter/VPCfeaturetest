"use client"
import {useSession} from "next-auth/react";
import {TagRequestResponse} from "@/app/api/projects/datatypes/TagRequestResponse";

export function DeleteTagButton(props:{selectedTags:string[]}) {
    const { data: session } = useSession()
    if(session) {
        return (
            <div className={"mx-10 text-white flex flex-row w-max"}>
                <button className={"border-white border-2 rounded-lg  w-fit"} onClick={e => deleteSelectedTag(props.selectedTags)}>
                    Delete Selected Tags
                </button>
            </div>
        )
    }
    return null
}

async function deleteSelectedTag(checkedTags:string[]) {
    console.log(checkedTags)
    let domain = (new URL(window.location.href));
    let url = domain.origin + `/api/projects/tagcontrol`;
    try {
        const res = await fetch(url, {
            method: "DELETE",
            body: JSON.stringify(checkedTags)
        });
        return "Successfully Deleted!"
    }
    catch (error) {
        return undefined
    }
}