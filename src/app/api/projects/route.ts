import {NextRequest, NextResponse} from "next/server";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Project, IqpTeam, Dataurl, PROJECT_TYPE,} from '@prisma/client'
import { prisma } from '../db'
import {ProjectGetRequestBody} from "@/app/api/projects/datatypes/ProjectGetRequestBody";

export async function GET(request:NextRequest) {
    let id = await request.nextUrl.searchParams.get("id");
    let type = await request.nextUrl.searchParams.get("type");
    let data: ProjectRequestResponse;
    if(id == null) {
        const allProjects = await getProject("",type == null ? "" : type);
        data = {
            projects: allProjects
        }
    } else {
        let project = await getProject(id,"");
        data = {
            projects:project
        }
    }
    return NextResponse.json(data);
}

export async function POST(request: Request) {
    let project:Project = await request.json();
    const checkDb = await prisma.project.findFirst({
        where:{
            id:project.id
        }
    });
    if(checkDb == null) {
        const createProject = await prisma.project.create({data:project});
    } else {
        const updateProject = await prisma.project.update({
            where:{
                id:checkDb.id
            },
            data:{
                title:project.title,
                description:project.description,
                type:project.type,
                term:project.term,
                img:project.img,
                tags:project.tags,
                year:project.year,
            }
        })
    }
    return NextResponse.json("Created or updated project");
}

//TODO rework and simplefy
export async function getProject(id:string,type:string):Promise<(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null})[]> {
    let projects:(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null})[] = [];
    if(id === "") {
        if(type === "") {
            projects = await prisma.project.findMany({
                include: {
                    dataurls: true,
                    iqp_team: true
                }
            });
        } else {
            projects = await prisma.project.findMany({
                where: {
                    type:PROJECT_TYPE[type as keyof typeof PROJECT_TYPE]
                },
                include: {
                    dataurls: true,
                    iqp_team: true
                }
            });
        }
    } else {
        const project:(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}) | null = await prisma.project.findFirst({
            where: {
                id: id
            },
            include:{
                dataurls:true,
                iqp_team:true,
            }
        });
        if(project != null) {
            projects.push(project)
        }
    }
    return projects;
}