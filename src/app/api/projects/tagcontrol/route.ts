import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
import {prisma} from "@/app/api/db";

export async function POST(request:NextRequest) {
    const session = await getServerSession(authOptions);
    if(session != null) {
        let project: FullProject = await request.json();
        if (project.tags != null){
        if (project.id != undefined){
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
    }}
    else{
        return NextResponse.json("not authenticated",{status:401})
    }
}