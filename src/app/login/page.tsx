"use client"
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {AuthResponce} from "@/app/api/auth/login/route";
import {LoginPageComp} from "@/app/login/LoginPageComp";

export default async function Page() {
    const router = useRouter();

    return(
        <LoginPageComp></LoginPageComp>
    )
}