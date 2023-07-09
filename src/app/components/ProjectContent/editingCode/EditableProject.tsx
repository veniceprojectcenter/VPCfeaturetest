import React, {useCallback, useState} from "react";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import PopupWithClose, {PopUpButton} from "@/app/components/random/popup/PopupWithClose";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";
import {ProjectDescription} from "@/app/components/ProjectContent/ProjectDescription";
import {DataUrlForm} from "@/app/components/ProjectContent/DataUrl/DataUrlForm";
import {UpdateProject} from "@/app/components/ProjectContent/editingCode/UpdateProject";
import {CommitProject} from "@/app/components/ProjectContent/editingCode/CommitProject";
import EditableDataUrl from "@/app/components/ProjectContent/DataUrl/EditableDataUrl";
import {uploadFile} from "@/helpers/uploadFile";
import {IqpTeamDisplay} from "@/app/components/ProjectContent/iqpTeam/IqpTeamDisplay";
import {FullProject} from "@/app/components/ProjectContent/FullProject";


export function EditableProject(props:{project:FullProject}) {
    let [project,setProject] = useState<FullProject>(props.project)
    let [editedProject,setEditedProject] = useState<FullProject>(props.project)
    let [fileState,setFileState] = useState<File | null>(null)
    let [confirmationOpen,setConfirmationOpen] = useState(false);
    let dataUrls:Dataurl[] = []
    let dataElements:JSX.Element[] = []
    let term = "";
    // @ts-ignore
    let leftFocus = (event) => {
        let target = event.target;
        UpdateProject(target.id,target.textContent,editedProject,(project) => setEditedProject({...project}));
    }
    // @ts-ignore
    let commit = async (event) => {
        editedProject.id = await CommitProject(editedProject);
        setEditedProject({...editedProject});
        setConfirmationOpen(true);
    }
    let onFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as typeof event.target & {
            files:File[]
        }
        setFileState(target.files[0])
    }


    const uploadFileEvent = useCallback( async (event: React.MouseEvent<HTMLButtonElement>) => {
        if(fileState != null) {
            let newUrl = await uploadFile(fileState);
            editedProject.img = newUrl;
            setEditedProject({...editedProject})
        }
    }, [fileState]);

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
                <PopupWithClose open={confirmationOpen} setOpenCallback={(value) => setConfirmationOpen(value)}>
                   <h1> successfully created or updated project with id {editedProject.id}</h1>
                </PopupWithClose>
                <ProjectTitleCard project={project} onBlur={leftFocus} contentEditable>
                    <PopUpButton className={"flex items-center my-20"} customButton={
                        <div className={"text-white  border-white border-2"}>
                            change image
                        </div>}>
                        <div className={"m-20"}>
                            {
                                //TODO make it so when you upload it closes the screen
                            }
                            <h1>current file:{fileState?.name ? fileState.name:"no file selected"}</h1>
                            <input className={"w-auto"} onChange={onFileChange} type={"file"}/>
                            <button onClick={async (event) => {
                                await uploadFileEvent(event)
                            }} >upload file </button>
                        </div>
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
                    {project.iqp_team ?
                    <IqpTeamDisplay project={project} editedProject={editedProject} editProjectCallback={setEditedProject}></IqpTeamDisplay> : <div/>}
                </div>
                <div>
                    <button className={"text-white w-full border-white border-2 text-4xl my-10"} onClick={commit}>commit</button>
                </div>
            </div>

        );
    }
    return (<ProjectNotFound></ProjectNotFound>)
}


