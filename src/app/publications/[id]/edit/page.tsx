"use client"
import EditableProjectLoader from "@/app/components/ProjectContent/editingCode/EditableProjectLoader";
import {useState} from "react";



export default async function Page({params}: {
    params: {id:string}
}) {
    return (
        <EditableProjectLoader id={params.id}></EditableProjectLoader>
    )
}
