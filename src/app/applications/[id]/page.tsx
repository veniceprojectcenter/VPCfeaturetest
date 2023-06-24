import {getProject} from "@/app/api/projects/route";
import {Dataurl} from "@prisma/client";
import {IqpTeamComp} from "@/app/projects/IqpTeamComp";
import {DataUrlDisplay} from "@/app/components/ProjectContent/DataUrl";
import EmbedUrlDisplay from "@/app/components/ProjectContent/EmbedUrlDisplay";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";

export default async function Page({params}: {
    params: {id:string}
}) {
    const projects = await getProject(params.id,"APP");
    if(projects.length > 0) {
        const project = projects[0];
        let dataUrls:Dataurl[] = []
        if(project.dataurls != null) {
            for (let i = 0; i < project.dataurls.length; i++) {
                dataUrls.push(project.dataurls[i]);
            }
        }
        return (
            <div className={"w-full"}>
                <div className={"flex flex-col w-full"}>
                <ProjectTitleCard project={project}></ProjectTitleCard>
                    <div className={"flex flex-col"}>
                            <p className={"text-white my-10"}>{project.description}</p>
                            <EmbedUrlDisplay dataurls={dataUrls}></EmbedUrlDisplay>
                    </div>
                </div>
            </div>
        )
    }
    return <ProjectNotFound></ProjectNotFound>
}