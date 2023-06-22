import {Dataurl, IqpTeam, Project} from "@prisma/client";

export type ProjectRequestResponse = {
    projects:(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null})[]
}