"use client"
import Link from "next/link";
import React from "react";
import {useSession} from "next-auth/react";
import {usePathname, useRouter} from "next/navigation";

export default function EditButton() {
    const { data: session } = useSession()
    let pathname = usePathname();
    const router = useRouter()
    if(session && !pathname.includes("/edit")) {
        return (
            <div className={"items-end"}>
                <button className={"p-2 basis-1/5 rounded-full text-4xl text-white border-2"}  onClick={() => router.push(pathname+"/edit")}>edit </button>
            </div>
        )
    } else {
        return null
    }
}