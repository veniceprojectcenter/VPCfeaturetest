import {Dataurl, IqpTeam, Project} from "@prisma/client";

export type FullProject = Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}