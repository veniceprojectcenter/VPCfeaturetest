import {NextResponse} from "next/server";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {PrismaClient, Project} from '@prisma/client'
import {ProjectGetRequestBody} from "@/app/api/projects/datatypes/ProjectGetRequestBody";

export async function GET() {
    const prisma = new PrismaClient();

    const allProjects = await prisma.project.findMany();


    console.log("route call attempt");
    let data:ProjectRequestResponse = {
        projects:allProjects
    }
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    const prisma = new PrismaClient();
    let project:Project = await request.json();
    const createProject = await prisma.project.create({data:project});
    return NextResponse.json("we good");
}