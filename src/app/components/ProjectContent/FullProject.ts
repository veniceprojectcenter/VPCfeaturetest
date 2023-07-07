import {Dataurl, IqpTeam, Project,Tag} from "@prisma/client";

export type FullProject = Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null, tags: Tag[] | null}