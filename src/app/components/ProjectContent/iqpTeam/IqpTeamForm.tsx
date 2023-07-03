import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {OnUpdateStateCallback} from "@/app/components/ProjectContent/editingCode/UpdateProject";
import React from "react";

export function IqpTeamForm(props:{editableProject:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null},
    iqpTeamId:string,
    onUpdateState:OnUpdateStateCallback,
    closeCallback?:Function}
) {
    function addIqpTeamMember(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        //This is adding the data of the from onto the target without breaking the type system
        const target = event.target as typeof event.target & {
            name: {value:string},
        }
        switch (props.iqpTeamId) {
            case "team":
                props.editableProject.iqp_team?.team.push(target.name.value)
                break;
            case "advisors":
                props.editableProject.iqp_team?.advisors.push(target.name.value)
                break;
            case "sponsors":
                props.editableProject.iqp_team?.sponsors.push(target.name.value)
                break;
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