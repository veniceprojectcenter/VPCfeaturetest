import {NextRequest, NextResponse} from "next/server";
import {Dataurl} from "@prisma/client";
import {DataUrlArray, isDataUrlArray} from "@/app/api/projects/dataurl/DataUrlArray";
import {prisma} from "@/app/api/db";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";



export async function POST(request:NextRequest) {
    const session = await getServerSession(authOptions)
    if(session != null) {
        let dataUrl: DataUrlArray | Dataurl = {data: []}
        try {
            dataUrl = await request.json();
        } catch (error) {
            return NextResponse.json("bad request")
        }
        if (isDataUrlArray(dataUrl)) {
            for (let i = 0; i < dataUrl.data.length; i++) {
                let dataUrlObeject = dataUrl.data[i];
                await createOrUpdateDataUrl(dataUrlObeject)
            }
        } else {
            await createOrUpdateDataUrl(dataUrl)
        }

        return NextResponse.json("created or updated data urls")
    }
    return NextResponse.json("not authenticated",{status:404})
}

async function createOrUpdateDataUrl(dataUrl:Dataurl) {
    if (dataUrl.id != undefined) {
        const checkDb = await prisma.dataurl.findFirst({
            where: {
                id: dataUrl.id
            }
        });
        if (checkDb != null) {
            //update
            await prisma.dataurl.update({
                where: {
                    id: dataUrl.id
                },
                data: {
                    projectId: dataUrl.projectId,
                    url: dataUrl.url,
                    text: dataUrl.text,
                    type: dataUrl.type
                }
            })
            return;
        }
    }
    //create
    await prisma.dataurl.create({
        data: {
            projectId: dataUrl.projectId,
            url: dataUrl.url,
            text: dataUrl.text,
            type: dataUrl.type
        }
    })
}