import React, {useState} from "react";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {IqpTeamComp} from "@/app/components/ProjectContent/iqpTeam/IqpTeamComp";
import {PopUpButton} from "@/app/components/random/popup/PopupWithClose";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";
import {ProjectDescription} from "@/app/components/ProjectContent/ProjectDescription";
import {DataUrlForm} from "@/app/components/ProjectContent/DataUrl/DataUrlForm";
import {UpdateProject} from "@/app/components/ProjectContent/editingCode/UpdateProject";
import {CommitProject} from "@/app/components/ProjectContent/editingCode/CommitProject";
import EditableDataUrl from "@/app/components/ProjectContent/DataUrl/EditableDataUrl";
import {IqpTeamForm} from "@/app/components/ProjectContent/iqpTeam/IqpTeamForm";


export function EditableProject(props:{project:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}}) {
    let [project,setProject] = useState<(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null})>(props.project)
    let [editedProject,setEditedProject] = useState<Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}>(props.project)
    let dataUrls:Dataurl[] = []
    let [test,setTest] = useState(false);
    let dataElements:JSX.Element[] = []
    let term = "";

    // @ts-ignore
    let leftFocus = (event) => {
        let target = event.target;
        UpdateProject(target.id,target.textContent,editedProject,(project) => setEditedProject({...project}));
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
                <EditableDataUrl key={dataurl.id+"buttion"} dataurl={dataurl} editableProject={editedProject} onUpdateState={ (project) => setEditedProject({...project})}></EditableDataUrl>
            )
        });
        dataElements.push(
            <PopUpButton>
                <DataUrlForm editableProject={editedProject} onUpdateState={(project) => {
                    setEditedProject({...project});
                }}></DataUrlForm>
            </PopUpButton>
        )
        return (
            <div className={"flex flex-col"}>
                <ProjectTitleCard project={project} onBlur={leftFocus} contentEditable>
                    <PopUpButton className={"flex items-center my-20"} customButton={
                        <div className={"text-white  border-white border-2"}>
                            change image
                        </div>
                    }>
                    </PopUpButton>
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
                        <IqpTeamComp onBlur={leftFocus} contentEditable title={"Team"} team={project.iqp_team?.team} idPrefix={"team"} addElementButton={
                            <PopUpButton>
                                <IqpTeamForm editableProject={editedProject} onUpdateState={(project) => {
                                    setEditedProject({...project})
                                }} iqpTeamId={"team"}></IqpTeamForm>
                            </PopUpButton>
                        }/>
                        <IqpTeamComp onBlur={leftFocus} contentEditable title={"Sponsors"} team={project.iqp_team?.sponsors} idPrefix={"sponsors"} addElementButton={
                            <PopUpButton>
                                <IqpTeamForm editableProject={editedProject} onUpdateState={(project) => {
                                    setEditedProject({...project})
                                }} iqpTeamId={"sponsors"}></IqpTeamForm>
                            </PopUpButton>
                        }/>
                        <IqpTeamComp onBlur={leftFocus} contentEditable title={"Advisors"} team={project.iqp_team?.advisors} idPrefix={"advisor"} addElementButton={
                            <PopUpButton>
                                <IqpTeamForm editableProject={editedProject} onUpdateState={(project) => {
                                    setEditedProject({...project})
                                }} iqpTeamId={"advisors"}></IqpTeamForm>
                            </PopUpButton>
                        }/>
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


