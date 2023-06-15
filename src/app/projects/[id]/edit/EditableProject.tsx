import {useEffect, useState} from "react";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Project} from "@prisma/client";
import {awaitExpression} from "@babel/types";

export function EditableProject(props:{id:string}) {
    let [project,setProject] = useState<Project | undefined>(undefined)
    let [loading,setLoading] = useState(true)

    useEffect(() => {
        console.log("bruh")
        const getData = async () => {
            let projects = await getProject(props.id)
            console.log(projects)
            setProject(projects.projects[0])
            setLoading(false)
        }
        getData()
        return () => {

        }
    },[props.id])


    // @ts-ignore
    let leftFocus = (event) => {
        console.log(event.target.textContent)
    }
    if(loading) {
        return (<div className={"text-white"}>
            loading
        </div>)
    }
    if(project != undefined) {
        return (
            <div className={"flex flex-col"}>
                <h1 className={"text-white"} contentEditable suppressContentEditableWarning={true} onBlur={leftFocus}>
                    {project.title}
                </h1>
                <p className={"text-white"} contentEditable suppressContentEditableWarning={true}
                   onBlur={leftFocus}>{project.description}</p>
                <div className={"text-white border-2 border-white"}>
                    <a href={project.dataurls[0]}>
                        <h1>download pdf</h1>
                    </a>
                </div>
            </div>
        );
    }
}
async function getProject(id:string):Promise<ProjectRequestResponse> {
    let domain = (new URL(window.location.href));
    let projectsResponse = await fetch(domain.origin+"/api/projects/?id="+id,{
        method: "GET"
    });
    return await projectsResponse.json();
}

