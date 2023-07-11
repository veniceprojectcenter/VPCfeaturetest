import {IqpTeamComp} from "@/app/components/ProjectContent/iqpTeam/IqpTeamComp";
import {PopUpButton} from "@/app/components/random/popup/PopupWithClose";
import {IqpTeamForm} from "@/app/components/ProjectContent/iqpTeam/IqpTeamForm";
import React from "react";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export function IqpTeamDisplay(props:{project:FullProject,editedProject:FullProject,
    // @ts-ignore
    leftFocus?:(event) => void,
    editProjectCallback:(project:FullProject) => void}) {
    console.log(typeof props.project.iqp_team?.team)
    return(
        <div className={"basis-1/2 flex flex-col ml-9"}>
            <IqpTeamComp onBlur={props.leftFocus} contentEditable title={"Team"} team={props.project.iqp_team?.team} idPrefix={"STUDENT"} addElementButton={
                <PopUpButton>
                    <IqpTeamForm editableProject={props.editedProject} onUpdateState={(project) => {
                        props.editProjectCallback({...project})
                    }} iqpTeamId={"STUDENT"}></IqpTeamForm>
                </PopUpButton>
            }/>
            <IqpTeamComp onBlur={props.leftFocus} contentEditable title={"Sponsors"} team={props.project.iqp_team?.team} idPrefix={"SPONSOR"} addElementButton={
                <PopUpButton>
                    <IqpTeamForm editableProject={props.editedProject} onUpdateState={(project) => {
                        props.editProjectCallback({...project})
                    }} iqpTeamId={"SPONSOR"}></IqpTeamForm>
                </PopUpButton>
            }/>
            <IqpTeamComp onBlur={props.leftFocus} contentEditable title={"Advisors"} team={props.project.iqp_team?.team} idPrefix={"ADVISOR"} addElementButton={
                <PopUpButton>
                    <IqpTeamForm editableProject={props.editedProject} onUpdateState={(project) => {
                        props.editProjectCallback({...project})
                    }} iqpTeamId={"ADVISOR"}></IqpTeamForm>
                </PopUpButton>
            }/>
        </div>
    )
}