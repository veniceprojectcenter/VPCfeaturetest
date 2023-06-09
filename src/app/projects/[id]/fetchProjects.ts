import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";


export async function fetchProjects() {
    let response = await fetch(`/api/projects/?id=${params.id}`, {
        method: "GET"
    });
    let projectResponse: ProjectRequestResponse = await response.json();
    return projectResponse;
}