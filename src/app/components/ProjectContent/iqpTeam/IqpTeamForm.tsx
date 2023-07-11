import {Dataurl, IPQ_ENTITY_TYPE, IqpEntity, IqpTeam, Project} from "@prisma/client";
import {OnUpdateStateCallback} from "@/app/components/ProjectContent/editingCode/UpdateProject";
import React from "react";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export function IqpTeamForm(props:{editableProject:FullProject,
    iqpTeamId:IPQ_ENTITY_TYPE,
    onUpdateState:OnUpdateStateCallback,
    closeCallback?:Function}
) {
    function addIqpTeamMember(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //This is adding the data of the from onto the target without breaking the type system
        const target = event.target as typeof event.target & {
            name: {value:string},
        }
        if(props.editableProject.iqp_team != undefined) {
            let newIqpTeam: IqpEntity = {
                id: "",
                name: target.name.value,
                type: props.iqpTeamId,
                teamId: props.editableProject.iqp_team.id
            }
            props.editableProject.iqp_team.team?.push(newIqpTeam)
        }
        props.onUpdateState(props.editableProject)
        if(props.closeCallback != undefined) {
            console.log("close callback getting called")
            props.closeCallback();
        }
    }

    return(
        <div className={"m-10"}>
            <form onSubmit={(event) => {
                event.preventDefault()
                addIqpTeamMember(event);
            }}>
                <label>name</label>
                <input className={"text-black"} type={"text"} name={"name"}/>
                <input className={"m-3"}  type={"submit"}/>
            </form>
        </div>)
}