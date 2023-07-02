"use client"
import {EditableProject} from "@/app/projects/[id]/edit/EditableProject";
import {Dataurl, IqpTeam, Project} from "@prisma/client";

export default function Page() {
    let project: Project = {} as Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null};
    project.title = "create a project"
    project.description = "click click on the data elements to edit them"
    project.year = new Date().getFullYear();
    project.type = "IQP";
    return(
        <EditableProject project={project as Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}}></EditableProject>
    )
}