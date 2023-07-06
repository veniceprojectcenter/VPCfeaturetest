import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Dataurl, IqpTeam, Project} from "@prisma/client";


export async function FetchProjects(id:string):Promise<ProjectRequestResponse> {
    let domain = (new URL(window.location.href));
    let projectsResponse = await fetch(domain.origin+"/api/projects/?id="+id,{
        method: "GET"
    });
    let responce: ProjectRequestResponse = await projectsResponse.json();
    console.log(responce)
    return responce;
}
