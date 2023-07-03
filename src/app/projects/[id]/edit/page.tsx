"use client"
import EditableProjectLoader from "@/app/projects/[id]/edit/EditableProjectLoader";
import {useState} from "react";



export default async function Page({params}: {
    params: {id:string}
}) {
    return (
        <EditableProjectLoader id={params.id}></EditableProjectLoader>
    )
}
