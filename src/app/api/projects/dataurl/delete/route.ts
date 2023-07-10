import {NextRequest, NextResponse} from "next/server";
import {Dataurl} from "@prisma/client";
import {prisma} from "@/app/api/db";

export async function POST(request:NextRequest) {
    console.log("test")
    let dataUrl:Dataurl;
    try {
        dataUrl = await request.json()
        console.log(dataUrl.id)
        await prisma.dataurl.delete({
            where: {
                id:dataUrl.id
            }
        })
    } catch (error) {
        return NextResponse.json("bad request")
    }
    return NextResponse.json("deleted data url")
}