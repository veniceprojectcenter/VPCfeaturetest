import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export function PublicationCard(props:{href:string,src:string|StaticImport,alt:string,txt:string,className?:string}) {
    return(
        <div>
            <div className={props.className}>
                <div className={"group w-fit h-fit relative overflow-hidden duration-500 hover:scale-110"}>
                    <Link className={""} href={props.href}>
                        <Image className={"object-fill"} src={props.src} alt={props.alt} width={500} height={500}/>
                        <div className={"absolute w-full h-full group-hover:bg-black duration-500 group-hover:bg-opacity-10 z-10 top-0 grid place-items-end"} >
                            <div className={"mb-10 mr-10 z-20"}>
                                <h1 className={"text-white text-xl tracking-wider font-bold mb-5"}>{props.txt}</h1>
                                <div className={"grid place-items-center"}>
                                    <div className={"h-0 w-36 md:w-48 border border-white"}></div>
                                </div>
                                <h1 className={"text-white mt-5"}>View {"->"}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}