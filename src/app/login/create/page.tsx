"use client"
import {useRouter} from "next/navigation";
import React, {useEffect, useRef, useState} from "react";
import {Maintainer} from "@prisma/client";
import {MaintainerList, ReloadHandle} from "@/app/components/maintainerComponites/MaintainerList";
import CreatePage from "@/app/login/create/CreatePage";

export default async function Page() {
    return(
        <div>
            <CreatePage></CreatePage>
        </div>
    )
}