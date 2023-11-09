import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export async function UpdateTags(project:FullProject):Promise<string> {
    let createResponse = await fetch(window.location.origin+"/api/projects/tagcontrol",{
        method:"POST",
        body:JSON.stringify(project),
    });
    let projectData:FullProject = await createResponse.json();
    return projectData.id
}