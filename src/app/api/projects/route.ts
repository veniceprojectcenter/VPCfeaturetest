import {NextRequest, NextResponse} from "next/server";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {PrismaClient, Project} from '@prisma/client'
import {ProjectGetRequestBody} from "@/app/api/projects/datatypes/ProjectGetRequestBody";

export async function GET(request:NextRequest) {
    const prisma = new PrismaClient();
    let requsestPerams = request.nextUrl.searchParams;
    let data: ProjectRequestResponse = {
        projects:[]
    };
    if(requsestPerams.size < 0) {

        const allProjects = await prisma.project.findMany();
        console.log("route call attempt");
        data = {
            projects: allProjects
        }
    } else {
        let id = requsestPerams.get("id");
        if(id != null) {
            const project = await prisma.project.findFirst({where:{
                id:id
            }});
            if(project != null) {
                 data = {
                    projects: [project]
                }
            }
        }
    }
    await prisma.$disconnect();
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const prisma = new PrismaClient();
    let project:Project = await request.json();
    const createProject = await prisma.project.create({data:project});
    return NextResponse.json("we good");
}