import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Project} from "@prisma/client";


export async function fetchProjects(id:string):Promise<Project[]> {
    let response = await fetch(`/api/projects/?id=${id}`, {
        method: "GET"
    });
    let projectResponse: ProjectRequestResponse = await response.json();
    return projectResponse.projects;
}