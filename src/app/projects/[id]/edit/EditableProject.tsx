import {useEffect, useState} from "react";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Project} from "@prisma/client";

export function EditableProject(props:{id:string}) {
    let [project,setProject] = useState<Project | undefined>(undefined)
    let [editedProject,setEditedProject] = useState<Project>({} as Project)
    let [loading,setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            let projects = await getProject(props.id)
            console.log(projects)
            setProject(projects.projects[0])
            setEditedProject(projects.projects[0]);
            setLoading(false)
        }
        getData()
        return () => {

        }
    },[props.id])


    // @ts-ignore
    let leftFocus = (event) => {
        let target = event.target;
        switch (target.id) {
            case 'description':
                editedProject.description = event.target.textContent;
                break;
            case 'title':
                editedProject.title = event.target.textContent;
                break;
        }
        setEditedProject(editedProject);
    }
    // @ts-ignore
    let commit = async (event) => {
        let create = await fetch(window.location.origin+"/api/projects",{
            method:"POST",
            body:JSON.stringify(editedProject),
        });
    }
    if(loading) {
        return (<div className={"text-white"}>
            loading
        </div>)
    }
    if(project != undefined) {
        return (
            <div className={"flex flex-col"}>
                <div className={"text-white"}>
                    <button onClick={commit}>commit</button>
                </div>
                <h1 className={"text-white"} id={"title"} contentEditable suppressContentEditableWarning={true} onBlur={leftFocus}>
                    {project.title}
                </h1>
                <p className={"text-white"} id={"description"} contentEditable suppressContentEditableWarning={true}
                   onBlur={leftFocus}>{project.description}</p>
            </div>
        );
    }
    return (<div>
        no project
    </div>)
}

async function getProject(id:string):Promise<ProjectRequestResponse> {
    let domain = (new URL(window.location.href));
    let projectsResponse = await fetch(domain.origin+"/api/projects/?id="+id,{
        method: "GET"
    });
    return await projectsResponse.json();
}

