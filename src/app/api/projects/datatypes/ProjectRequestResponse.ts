import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export type ProjectRequestResponse = {
    projects:FullProject[]
}