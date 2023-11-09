import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
import {prisma} from "@/app/api/db";
import {Tag} from "@prisma/client";
import {TagRequestResponse} from "@/app/api/projects/datatypes/TagRequestResponse";

//TODO to make everything simple, disconnect old relations first.
export async function POST(request:NextRequest) {
    const session = await getServerSession(authOptions);
    if(session != null) {
        let project: FullProject = await request.json();
        if (project.tags != null){
        if (project.id != undefined){
            const deleteTags = await prisma.project.update({
                where: {id: project.id},
                data: {
                    tags: {
                        deleteMany: {}
                    },
                },
            });
            for(let i=0; i< project.tags.length; i++){
                const updatedTags = await prisma.project.update({
                    where:{id: project.id},
                    data: {
                        tags:{
                            create:[
                                {
                                    tag:{
                                        connectOrCreate:{
                                            where: {name: project.tags[i].name},
                                            create:{name: project.tags[i].name}
                                        },
                                    },
                                },
                            ],
                        },
                    },
                });
            }
            }
    }
    return NextResponse.json("Successfully Changed the tags", {status: 200})}
    else{
        return NextResponse.json("not authenticated",{status:401})
    }
}


export async function GET(request:NextRequest) {
    let data: TagRequestResponse;
    const allTags = await getTags();
    data = {
        tags: allTags
    }
    return NextResponse.json(data);
}


async function getTags():Promise<Tag[]> {
    let allTagsReceived: Tag[] = [];
    allTagsReceived = await prisma.tag.findMany({
        orderBy: {
            name: 'desc'
        }
    });
    return allTagsReceived;
}


export async function DELETE(request:NextRequest) {
    const session = await getServerSession(authOptions)
    if(session != null) {
        let tags: string[];
        try {
            tags = await request.json();
        } catch (error) {
            return NextResponse.json("bad body",{status:400})
        }
        for(let i=0; i < tags.length; i++){
        await prisma.tag.delete({
            where: {
                name: tags[i]
            }
        })
        }
        console.log("Successfully deleted the tags");
        return NextResponse.json("successfully deleted tags",{status:200})
    }
    console.log("Problemo!");
    return NextResponse.json("not authenticated",{status:401})
}