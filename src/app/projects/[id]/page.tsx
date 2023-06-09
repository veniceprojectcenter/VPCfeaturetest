import {Project} from "@prisma/client";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";


export default async function Page({params}: {
    params: {id:string}
}) {
    let response = await fetch(`http://localhost:3000/api/projects/?id=${params.id}`,{
        method:"GET"
    });
    let projectResponse:ProjectRequestResponse = await response.json();
    if(projectResponse.projects.length > 0) {
        let project = projectResponse.projects[0];
        return (
            <h1 className={"text-white"}>
                {project.title}
            </h1>
        );
    } else {
        return <h1 className={"text-white"}>
            project not found
        </h1>
    }
}