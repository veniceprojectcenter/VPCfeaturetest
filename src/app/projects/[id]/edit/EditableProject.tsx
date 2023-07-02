import React, {useEffect, useState} from "react";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {IqpTeamComp} from "@/app/components/ProjectContent/IqpTeamComp";
import {OpenButton} from "@/app/components/random/PopupWithClose";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";
import PopupWithClose from "@/app/components/random/PopupWithClose";
import {ProjectDescription} from "@/app/components/ProjectContent/ProjectDescription";
import {DataUrlForm} from "@/app/components/ProjectContent/DataUrl/DataUrlForm";
import {DataUrlButton} from "@/app/components/ProjectContent/DataUrl/DataUrlButton";
import {UpdateProject} from "@/app/components/ProjectContent/editingCode/UpdateProject";
import {set} from "zod";
import {CommitProject} from "@/app/components/ProjectContent/editingCode/CommitProject";
import EditableDataUrl from "@/app/components/ProjectContent/DataUrl/EditableDataUrl";

export function EditableProject(props:{id:string}) {
    let [project,setProject] = useState<(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}) | undefined>(undefined)
    let [editedProject,setEditedProject] = useState<Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}>({} as (Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}))
    let [loading,setLoading] = useState(true)
    let [open,setOpen] = useState(false);
    let dataUrls:Dataurl[] = []
    let dataElements:JSX.Element[] = []
    let term = "";

    //This loads the project from the database
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
    // this returns loading if the page is still requesting data
    if(loading) {
        return (<div className={"text-white"}>
            loading
        </div>)
    }
    // @ts-ignore
    let leftFocus = (event) => {
        let target = event.target;
        UpdateProject(target.id,target.textContent,editedProject,(project) => setEditedProject(project));
    }
    // @ts-ignore
    let commit = async (event) => {
        await CommitProject(editedProject);
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
                <EditableDataUrl key={dataurl.id+"buttion"} dataurl={dataurl} editableProject={editedProject} onUpdateState={(project) => setEditedProject(project)}></EditableDataUrl>
            )
        });
        dataElements.push(
            <PopupWithClose open={open} setOpen={setOpen} openButton={OpenButton(setOpen)}>
                <DataUrlForm editableProject={editedProject} onUpdateState={(project) => setEditedProject(project)}  postSubmitCallback={() => setOpen(false)}></DataUrlForm>
            </PopupWithClose>
        )
        return (
            <div className={"flex flex-col"}>
                <ProjectTitleCard project={project} onBlur={leftFocus} contentEditable>
                    <div className={"text-white font-bold basis-1/2 place-content-end flex flex-row"}>
                        <h1 className={"text-white flex items-center"}>YEAR: </h1>
                        <h1 className={"text-white mx-3 flex items-center"} id={"year"} onBlur={leftFocus} contentEditable suppressContentEditableWarning={true}>{project.year}</h1>
                        <h1 className={"text-white flex items-center"}>| TERM: </h1>
                        <h1 className={"text-white ml-3 mr-20 flex items-center w-3"} id={"term"} contentEditable suppressContentEditableWarning={true} onBlur={leftFocus}>{term}</h1>
                    </div>
                </ProjectTitleCard>
                <div className={"flex md:flex-row flex-col"}>
                    <div className={"basis-1/2"}>
                        <ProjectDescription project={project} onBlur={leftFocus} contentEditable></ProjectDescription>
                        <div className={"flex flex-row"}>
                            {dataElements.map((element,index)=> {
                                return(<div key={"dataButton" + index}>
                                    {element}
                                </div>)
                            })}
                        </div>
                    </div>
                    <div className={"basis-1/2 flex flex-col ml-9"}>
                        <IqpTeamComp onBlur={leftFocus} contentEditable title={"Team"} team={project.iqp_team?.team} idPrefix={"team"}></IqpTeamComp>
                        <IqpTeamComp onBlur={leftFocus} contentEditable title={"Sponsors"} team={project.iqp_team?.sponsors} idPrefix={"sponsors"}></IqpTeamComp>
                        <IqpTeamComp onBlur={leftFocus} contentEditable title={"Advisors"} team={project.iqp_team?.advisors} idPrefix={"advisor"}></IqpTeamComp>
                    </div>
                </div>
                <div>
                    <button className={"text-white w-full border-white border-2 text-4xl my-10"} onClick={commit}>commit</button>
                </div>
            </div>

        );
    }
    return (<ProjectNotFound></ProjectNotFound>)
}

async function getProject(id:string):Promise<ProjectRequestResponse> {
    let domain = (new URL(window.location.href));
    let projectsResponse = await fetch(domain.origin+"/api/projects/?id="+id,{
        method: "GET"
    });
    return await projectsResponse.json();
}

