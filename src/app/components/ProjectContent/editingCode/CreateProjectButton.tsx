"use client"
import {useSession} from "next-auth/react";
import {usePathname, useRouter} from "next/navigation";

export function CreateProjectButton() {
    const { data: session } = useSession()
    let pathname = usePathname();
    const router = useRouter()
    if(session) {
        return (
            <div className={"mx-10 text-white flex flex-row w-max"}>
                <button className={"border-white border-2 rounded-lg  w-fit"} onClick={() => router.push(pathname+"/edit")}>
                    create project
                </button>
            </div>
        )
    }
    return null
}