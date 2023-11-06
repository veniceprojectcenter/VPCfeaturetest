import React, {useCallback, useState} from "react";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import PopupWithClose, {PopUpButton} from "@/app/components/random/popup/PopupWithClose";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";
import {ProjectDescription} from "@/app/components/ProjectContent/ProjectDescription";
import {DataUrlForm} from "@/app/components/ProjectContent/DataUrl/DataUrlForm";
import {UpdateProject} from "@/app/components/ProjectContent/editingCode/UpdateProject";
import {CommitProject} from "@/app/components/ProjectContent/editingCode/CommitProject";
import {UpdateTags} from "@/app/components/ProjectContent/editingCode/UpdateTags";
import EditableDataUrl from "@/app/components/ProjectContent/DataUrl/EditableDataUrl";
import {uploadFile} from "@/helpers/uploadFile";
import {TagInputBox} from "@/app/components/ProjectContent/editingCode/TagInputBox";
import {IqpTeamDisplay} from "@/app/components/ProjectContent/iqpTeam/IqpTeamDisplay";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
import {UploadFileButton} from "@/app/components/ProjectContent/editingCode/UploadFileButton";
import {DeleteProjectButton} from "@/app/components/ProjectContent/editingCode/DeleteProjectButton";
import {router} from "next/client";
import Link from "next/link";


export function EditableProject(props:{project:FullProject}) {
    let [project,setProject] = useState<FullProject>(props.project)
    let [editedProject,setEditedProject] = useState<FullProject>(props.project)
    let [confirmationOpen,setConfirmationOpen] = useState(false);
    let dataUrls:Dataurl[] = []
    let dataElements:JSX.Element[] = []
    let term = "";
    let unprocessedTs: string[] = [];
    let categories = "";
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
    let updateTags = async () =>{
        editedProject.id = await UpdateTags(editedProject);
        setEditedProject({...editedProject});
        setConfirmationOpen(true);
    }



    const uploadFileEvent = async (file:File|null) => {
        if(file != null) {
            try {
                let newUrl = await uploadFile(file);
                editedProject.img = newUrl;
                setEditedProject({...editedProject})
                return true
            } catch (error) {
                return false
            }
        }
        return false
    }

    function genTags() {
        let z = document.querySelectorAll('[type="checkbox"]')
        console.log(z)
        console.log(z[0].ariaChecked)
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
        if(project.categories != null) {
            categories = project.categories;
        } else {
            categories = "Undefined"
        }



        dataElements = dataUrls.map((dataurl,index) => {
            return(
                <EditableDataUrl key={dataurl.id+"buttion"} dataurl={dataurl} editableProject={editedProject} onUpdateState={ (project) => setEditedProject({...project})}></EditableDataUrl>
            )
        });
        dataElements.push(
            <PopUpButton>
                <DataUrlForm editableProject={editedProject} onUpdateState={(project) => {
                    console.log(project)
                    setEditedProject({...project});
                }}></DataUrlForm>
            </PopUpButton>
        )

        return (
            <div className={"flex flex-col"}>
                <PopupWithClose open={confirmationOpen} setOpenCallback={(value) => setConfirmationOpen(value)}>
                   <h1> successfully created or updated project with id {editedProject.id}</h1>
                </PopupWithClose>
                <ProjectTitleCard project={editedProject} onBlur={leftFocus} contentEditable>
                    <div className={"text-white font-bold basis-1/2 place-content-end flex flex-row"}>
                        <h1 className={"text-white flex items-center"}>YEAR: </h1>
                        <h1 className={"text-white mx-3 flex items-center"} id={"year"} onBlur={leftFocus} contentEditable suppressContentEditableWarning={true}>{project.year}</h1>
                        <h1 className={"text-white flex items-center"}>| TERM: </h1>
                        <h1 className={"text-white ml-3 mr-20 flex items-center w-3"} id={"term"} contentEditable suppressContentEditableWarning={true} onBlur={leftFocus}>{term}</h1>
                        <h1 className={"text-white flex items-center"}>| Categories: </h1>
                        <h1 className={"text-white ml-3 mr-20 flex items-center w-3"} id={"categories"} contentEditable suppressContentEditableWarning={false} onBlur={leftFocus}>{categories}</h1>
                        <div className={"container"} style={{overflowY: "scroll", height: "150px", alignSelf: "center"}}>
                            <TagInputBox unprocessedTags={["it's", "me", "hi", "I'm","the","problem"]}></TagInputBox>
                        </div>
                        <button onClick={genTags}>Generate Tags</button>
                    </div>
                    <UploadFileButton uploadFileCallback={uploadFileEvent}></UploadFileButton>
                </ProjectTitleCard>
                <div className={"flex md:flex-row flex-col"}>
                    <div className={"basis-1/2"}>
                        <ProjectDescription project={editedProject} onBlur={leftFocus} contentEditable></ProjectDescription>
                        <div className={"flex flex-row"}>
                            {dataElements.map((element,index)=> {
                                return(<div key={"dataButton" + index}>
                                    {element}
                                </div>)
                            })}
                        </div>
                    </div>
                    {project.iqp_team ?
                    <IqpTeamDisplay project={project} editedProject={editedProject} leftFocus={leftFocus} editProjectCallback={(project) => {
                        console.log(project)
                        setEditedProject({...project})
                    }}></IqpTeamDisplay> : <div/>}
                </div>
                <div>
                    <button className={"text-white w-full border-white border-2 text-4xl my-10"} onClick={commit}>commit</button>
                    <button className={"text-white w-full border-white border-2 text-4xl my-10"} onClick={updateTags}>UpdateTags</button>
                    <DeleteProjectButton project={editedProject}></DeleteProjectButton>
                </div>
            </div>

        );
    }
    return (<ProjectNotFound></ProjectNotFound>)
}


