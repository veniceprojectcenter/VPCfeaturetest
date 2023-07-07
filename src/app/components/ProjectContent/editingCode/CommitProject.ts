import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export async function CommitProject(project:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}):Promise<string> {
    let createResponse = await fetch(window.location.origin+"/api/projects",{
        method:"POST",
        body:JSON.stringify(project),
    });
    let projectData:FullProject = await createResponse.json();
    console.log(projectData);
    return projectData.id
}