import Link from "next/link";
import React from "react"

//TODO add the hover affect to the button
export function HomePageLink(props:{href:string,children?:React.ReactNode}) {
    return(
        <button className={"max-h-8 flex flex-row flex-row items-center group border border-white px-10 py-1 rounded-full text-3xl"}>
            <Link href={props.href}>
                {props.children}
            </Link>
            <div className={"self-center group-hover:mx-2 w-0 h-0 duration-300 group-hover:w-5 group-hover:border border-white"}></div>
        </button>
    )
}