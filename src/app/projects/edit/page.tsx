"use client"
import {EditableProject} from "@/app/components/ProjectContent/editingCode/EditableProject";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export default function Page() {
    let project: Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null} = {} as Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null};
    project.title = "create a project"
    project.description = "click click on the data elements to edit them"
    project.year = new Date().getFullYear();
    project.type = "IQP";
    project.dataurls = []
    project.iqp_team = {} as IqpTeam
    project.iqp_team.team = [];
    project.iqp_team.sponsors = [];
    project.iqp_team.advisors = [];

    return(
        <EditableProject project={project as FullProject}></EditableProject>
    )
}