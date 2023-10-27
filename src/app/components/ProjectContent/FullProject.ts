// @ts-ignore
import {Dataurl, IqpTeam, Project, Tag,IqpEntity} from "@prisma/client";

export type FullProject = Project & {
    iqp_team: FullIqpTeam,
    dataurls: Dataurl[] | null,
    tagArr: Tag[] | null
}

export type FullIqpTeam = IqpTeam & {
    team: IqpEntity[] | null,
} | null