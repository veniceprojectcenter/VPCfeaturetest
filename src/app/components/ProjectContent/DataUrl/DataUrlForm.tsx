"use client"
import React from "react";
import {Dataurl, DATAURL_TYPE, IqpTeam, Project} from "@prisma/client";
import {OnUpdateStateCallback} from "@/app/components/ProjectContent/editingCode/UpdateProject";

export function DataUrlForm(props:{editableProject:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null},
    onUpdateState:OnUpdateStateCallback,
    dataUrl?:Dataurl,
    closeCallback?:Function}
) {
    let addDataUrlOrUpdate = (event:React.FormEvent<HTMLFormElement>)  => {
        event.preventDefault();
        //This is adding the data of the from onto the target without breaking the type system
        const target = event.target as typeof event.target & {
            url: {value:string},
            buttonText: {value:string}
            dataType: {value:DATAURL_TYPE}
        }
        let dataUrl:Dataurl;
        if(props.dataUrl != undefined) {
            dataUrl = props.dataUrl;
            dataUrl.url  =target.url.value;
            dataUrl.text = target.buttonText.value;
            dataUrl.type = target.dataType.value;
            dataUrl.projectId = props.editableProject.id;
        } else {
            dataUrl = {
                id: "",
                url: target.url.value,
                text: target.buttonText.value,
                type: target.dataType.value,
                projectId: props.editableProject.id
            }
        }
        props.editableProject.dataurls?.push(dataUrl);
        props.onUpdateState(props.editableProject);
        if(props.closeCallback != undefined) {
            props.closeCallback()
        }
    }
    return(
    <div className={"m-10"}>
        <form onSubmit={(event) => {
            addDataUrlOrUpdate(event);
        }}>
            <label>Url Input</label>
            <input className={"text-black"} defaultValue={props.dataUrl?.url} type={"text"} name={"url"}/>
            <div></div>
            <label> link text </label>
            <input className={"text-black"} defaultValue={props.dataUrl?.text} type={"text"} name={"buttonText"}/>
            <h1>type</h1>
            <select defaultValue={props.dataUrl?.type} className={"text-black"} name={"dataType"}>
                <option value={DATAURL_TYPE.DOWNLOAD}>DOWNLOAD</option>
                <option value={DATAURL_TYPE.LINK}>LINK</option>
                <option value={DATAURL_TYPE.EMBED}>EMBED</option> {/* TODO make a good way to display embeds on projects */}
            </select>
            <input type={"submit"}/>
        </form>
    </div>)
}