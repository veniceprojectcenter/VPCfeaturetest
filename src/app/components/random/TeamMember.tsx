
import React from "react";
import Link from "next/link";
import fabio1 from "@/app/resources/Fabio1.jpg";
import "./TeamMember.css";

export function TeamMember(props:{
    sourceImage:string,memberName:string,memberRole:string}) {
    return (
        <div className={"team_el"}>

            <img alt={""} src={props.sourceImage}></img>
            <span className={"name"}>{props.memberName}</span>
            <span className={"role"}>{props.memberRole}</span>

        </div>
    );
}