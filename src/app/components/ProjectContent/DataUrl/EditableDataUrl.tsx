import React, {useState} from "react";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import PopupWithClose from "@/app/components/random/PopupWithClose";
import {DataUrlForm} from "@/app/components/ProjectContent/DataUrl/DataUrlForm";
import {OnUpdateStateCallback} from "@/app/components/ProjectContent/editingCode/UpdateProject";

export default function EditableDataUrl(props:{dataurl:Dataurl
    ,editableProject:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}
    ,onUpdateState:OnUpdateStateCallback}) {

    let [open,setOpen] = useState(false);

    return(
        <div>
            <PopupWithClose open={open} setOpen={setOpen}>
                <div className={"m-20"}>
                    <DataUrlForm editableProject={props.editableProject} onUpdateState={props.onUpdateState} postSubmitCallback={() => setOpen(false)} dataUrl={props.dataurl}></DataUrlForm>
                </div>
            </PopupWithClose>
            <button onClick={()=> setOpen(true)} key={props.dataurl.id + "link"} className={"text-white rounded border-4 text-base"}>
                {props.dataurl.text}
            </button>
        </div>
    )
}