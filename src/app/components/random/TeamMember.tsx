
import React from "react";
import Link from "next/link";
import fabio1 from "@/app/resources/Fabio1.jpg";
import "./TeamMember.css";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

export function TeamMember(props:{
    sourceImage:string | StaticImport,memberName:string,memberRole:string}) {
    return (
        <div className={"team_el"}>

            <Image width={500} height={500} alt={`${props.memberName} picture`} src={props.sourceImage}></Image>
            <span className={"name"}>{props.memberName}</span>
            <span className={"role"}>{props.memberRole}</span>

        </div>
    );
}