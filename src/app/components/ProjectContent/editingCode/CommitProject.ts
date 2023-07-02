import {Dataurl, IqpTeam, Project} from "@prisma/client";

export async function CommitProject(project:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}) {
    let create = await fetch(window.location.origin+"/api/projects",{
        method:"POST",
        body:JSON.stringify(project),
    });
}