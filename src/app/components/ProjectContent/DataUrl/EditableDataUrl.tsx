import React, {useState} from "react";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import PopupWithClose from "@/app/components/random/popup/PopupWithClose";
import {DataUrlForm} from "@/app/components/ProjectContent/DataUrl/DataUrlForm";
import {OnUpdateStateCallback} from "@/app/components/ProjectContent/editingCode/UpdateProject";

export default function EditableDataUrl(props:{dataurl:Dataurl
    ,editableProject:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}
    ,onUpdateState:OnUpdateStateCallback}) {

    let [open,setOpen] = useState(false);
    function deleteDataUrl() {
        const index = props.editableProject.dataurls?.indexOf(props.dataurl);
        if (index != undefined && index > -1) {
            props.editableProject.dataurls?.splice(index,1);
        }
        setOpen(false);
        props.onUpdateState(props.editableProject);
    }
    return(
        <div>
            <PopupWithClose open={open} setOpenCallback={(value) => setOpen(value)}>
                <div className={"m-20"}>
                    <DataUrlForm editableProject={props.editableProject} onUpdateState={props.onUpdateState} closeCallback={() => setOpen(false)} dataUrl={props.dataurl}></DataUrlForm>
                    <button onClick={deleteDataUrl}>
                        delete url
                    </button>
                </div>
            </PopupWithClose>
            <button onClick={()=> setOpen(true)} key={props.dataurl.id + "link"} className={"text-white rounded border-4 text-base"}>
                {props.dataurl.text}
            </button>
        </div>
    )
}