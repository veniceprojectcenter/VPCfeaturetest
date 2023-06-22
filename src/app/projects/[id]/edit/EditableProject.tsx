import React, {useEffect, useState} from "react";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {IqpTeamComp} from "@/app/projects/IqpTeamComp";
import Popup from "reactjs-popup";
import AddDataUrl from "@/app/projects/[id]/edit/AddDataUrl";

export function EditableProject(props:{id:string}) {
    let [project,setProject] = useState<(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}) | undefined>(undefined)
    let [editedProject,setEditedProject] = useState<Project>({} as (Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}))
    let [loading,setLoading] = useState(true)
    let [open,setOpen] = useState(false);
    let dataUrls:Dataurl[] = []
    let dataElements:JSX.Element[] = []
    let term = "";

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
            case 'year':
                editedProject.year = parseInt(event.target.textContent);
                break;
            case 'term':
                //TODO add checks to make sure its a valid term
                editedProject.term = event.target.textContent[0];
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
        if(project.dataurls != null) {
            for (let i = 0; i < project.dataurls.length; i++) {
                dataUrls.push(project.dataurls[i]);
            }
        }
        if(project.term != null) {
            term = project.term;
        } else {
            term = "A"
        }
        dataElements = dataUrls.map((dataurl,index) => {
            return(
                <a href={dataurl.url}    key={dataurl.id + "link"} className={"text-white rounded border-4 text-base"}>
                    {dataurl.text}
                </a>)
        });
        dataElements.push(AddDataUrl(open,setOpen))
        console.log(dataElements.length)
        return (
            <div className={"flex flex-col"}>
                <div className={"flex-row flex h-64 bg-blend-multiply bg-black bg-opacity-40"} style={{backgroundImage: `url(${project.img})`}}>
                    <div className={"text-white text-2xl font-bold basis-1/2 justify-self-center flex flex-row"}>
                        <h1 className={"ml-16 flex items-center"} id={"title"} onBlur={leftFocus}  contentEditable suppressContentEditableWarning={true}>
                            {project.title}
                        </h1>
                    </div>
                    <div className={"text-white font-bold basis-1/2 place-content-end flex flex-row"}>
                        <h1 className={"text-white flex items-center"}>YEAR: </h1>
                        <h1 className={"text-white mx-3 flex items-center"} id={"year"} onBlur={leftFocus} contentEditable suppressContentEditableWarning={true}>{project.year}</h1>
                        <h1 className={"text-white flex items-center"}>| TERM: </h1>
                        <h1 className={"text-white ml-3 mr-20 flex items-center w-3"} id={"term"} contentEditable suppressContentEditableWarning={true} onBlur={leftFocus}>{term}</h1>
                    </div>
                </div>
                <div className={"flex flex-row"}>
                    <div className={"basis-1/2 flex flex-col ml-9"}>
                        <IqpTeamComp title={"Team"} team={project.iqp_team?.team}></IqpTeamComp>
                        <IqpTeamComp title={"Sponsors"} team={project.iqp_team?.sponsors}></IqpTeamComp>
                        <IqpTeamComp title={"Advisors"} team={project.iqp_team?.advisors}></IqpTeamComp>
                    </div>
                    <div className={"basis-1/2 "}>
                        <p className={"text-white my-10"}  id={"description"} onBlur={leftFocus} contentEditable suppressContentEditableWarning={true}>{project.description}</p>
                        <div className={"flex flex-row"}>
                            {dataElements.map((element,index)=> {
                                return(<div key={"dataButton" + index}>
                                    {element}
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <button className={"text-white w-full border-white border-2 text-4xl my-10"} onClick={commit}>commit</button>
                </div>
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

