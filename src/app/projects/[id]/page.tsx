import {Project} from "@prisma/client";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {fetchProjects} from "@/app/projects/[id]/fetchProjects";
import {getProject} from "@/app/api/projects/route";


export default async function Page({params}: {
    params: {id:string}
}) {
    let projects = await getProject(params.id)
    if(projects.length > 0) {
        let project = projects[0];
        return (
            <div className={"flex flex-col"}>
                <h1 className={"text-white"}>
                    {project.title}
                </h1>
                <p className={"text-white"}>{project.description}</p>
                <div className={"text-white border-2 border-white"}>
                    <a href={project.dataurls[0]}>
                        <h1>download pdf</h1>
                    </a>
                </div>
            </div>
        );
    } else {
        return <h1 className={"text-white"}>
            project not found
        </h1>
    }
}