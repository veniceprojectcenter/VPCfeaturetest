"use client"
import React, {useCallback, useState} from "react";
import {Dataurl, DATAURL_TYPE, IqpTeam, Project, PROJECT_TYPE} from "@prisma/client";
import {OnUpdateStateCallback} from "@/app/components/ProjectContent/editingCode/UpdateProject";
import {uploadFile} from "@/helpers/uploadFile";

export function DataUrlForm(props:{editableProject:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null},
    onUpdateState:OnUpdateStateCallback,
    dataUrl?:Dataurl,
    closeCallback?:Function}
) {
    let [renderUrlLine,setRenderUrlLine] = useState(true);
    let addDataUrlOrUpdate = async (event:React.FormEvent<HTMLFormElement>)  => {
        event.preventDefault();
        //This is adding the data of the from onto the target without breaking the type system
        const target = event.target as typeof event.target & {
            url: {value:string} | undefined,
            buttonText: {value:string}
            dataType: {value:DATAURL_TYPE}
            inputFile: {value:File} | undefined
        }
        let url = "";
        if(target.url != undefined) {
            url = target.url.value;
        }
        let dataUrl:Dataurl;
        if(target.inputFile  != undefined) {
            url = await uploadFile(target.inputFile.value);
        }
        if(props.dataUrl != undefined) {
            dataUrl = props.dataUrl;
            dataUrl.url  = url;
            dataUrl.text = target.buttonText.value;
            dataUrl.type = target.dataType.value;
            dataUrl.projectId = props.editableProject.id;
        } else {
            dataUrl = {
                id: "",
                url: url,
                text: target.buttonText.value,
                type: target.dataType.value,
                projectId: props.editableProject.id
            }
            props.editableProject.dataurls?.push(dataUrl);
        }
        props.onUpdateState(props.editableProject);
        if(props.closeCallback != undefined) {
            props.closeCallback()
        }
    }
    const onDataTypeChange = useCallback((event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        // pull target out of the event
        const target = event.target as typeof event.target & {
            value: DATAURL_TYPE
        }
        if(target.value == DATAURL_TYPE.DOWNLOAD) {
            setRenderUrlLine(false);
        } else {
            setRenderUrlLine(true);
        }
    }, []);

    return(
    <div className={"m-10"}>
        <form  onSubmit={async (event) => {
            await addDataUrlOrUpdate(event);
        }}>
            <div>
                {renderUrlLine ?
                    <div>
                        <label>Url Input</label>
                        <input className={"text-black"} defaultValue={props.dataUrl?.url} type={"text"} name={"url"}/>
                    </div>:
                <div>
                    <input name={"inputFile"} type={"file"}/>
                </div>
                }
            </div>
            <div></div>
            <label> link text </label>
            <input className={"text-black"} defaultValue={props.dataUrl?.text} type={"text"} name={"buttonText"}/>
            <h1>type</h1>
            <select onChange={onDataTypeChange} defaultValue={props.dataUrl?.type} className={"text-black"} name={"dataType"}>
                <option value={DATAURL_TYPE.LINK}>LINK</option>
                <option value={DATAURL_TYPE.DOWNLOAD}>DOWNLOAD</option>
                <option value={DATAURL_TYPE.EMBED}>EMBED</option> {/* TODO make a good way to display embeds on projects */}
            </select>
            <input type={"submit"}/>
        </form>
    </div>)
}