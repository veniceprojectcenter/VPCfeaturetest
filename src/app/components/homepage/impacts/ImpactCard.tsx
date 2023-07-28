import Image from "next/image";
import Link from "next/link";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {className} from "postcss-selector-parser";

export function ImpactCard(props:{href:string,src:string|StaticImport,alt:string,txt:string,width?:number,height?:number,className?:string}) {
    return(
        <div className={props.className}>
            <div className={"group w-fit h-fit relative overflow-hidden"}>
                <Link className={""} href={props.href}>
                    <Image className={"duration-300 group-hover:scale-110 object-fill"} src={props.src} alt={props.alt} width={props.width} height={props.height}/>
                    <div className={"absolute w-full h-full z-10 bg-black bg-opacity-20 duration-300 group-hover:bg-opacity-50 top-0 grid place-items-center"} >
                        <h1 className={"text-white text-xl tracking-wider font-bold"}>{props.txt}</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}