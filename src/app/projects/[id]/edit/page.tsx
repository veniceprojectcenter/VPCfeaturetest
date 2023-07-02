"use client"
import {useEffect, useState} from "react";
import {Project} from "@prisma/client";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {EditableProject} from "@/app/projects/[id]/edit/EditableProject";
import EditableProjectLoader from "@/app/projects/[id]/edit/EditableProjectLoader";



export default async function Page({params}: {
    params: {id:string}
}) {
    return(
        <EditableProjectLoader id={params.id}></EditableProjectLoader>
    )
}
