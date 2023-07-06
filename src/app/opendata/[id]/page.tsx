import {getProject} from "@/app/api/projects/route";
import {Dataurl} from "@prisma/client";
import {IqpTeamComp} from "@/app/components/ProjectContent/iqpTeam/IqpTeamComp";
import {DataUrlDisplay} from "@/app/components/ProjectContent/DataUrl/DataUrlDisplay";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {ProjectDescription} from "@/app/components/ProjectContent/ProjectDescription";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";

export default async function Page({params}: {
    params: {id:string}
}) {
    const projects = await getProject(params.id,"");
    if(projects.length > 0) {
        const project = projects[0];
        let dataUrls:Dataurl[] = []
        if(project.dataurls != null) {
            for (let i = 0; i < project.dataurls.length; i++) {
                dataUrls.push(project.dataurls[i]);
            }
        }
        return (
            <div className={"flex flex-col"}>
                <ProjectTitleCard project={project}>
                    <div className={"text-white font-bold basis-1/2 place-content-end flex flex-row"}>
                        <h1 className={"text-white mr-20 flex items-center"}>YEAR: {project.year} | TERM: {project.term}</h1>
                    </div>
                </ProjectTitleCard>
                <div className={"flex flex-col"}>
                    <div className={"basis-1/2 "}>
                        <ProjectDescription project={project}></ProjectDescription>
                        <DataUrlDisplay dataurls={dataUrls}></DataUrlDisplay>
                    </div>
                </div>
            </div>
        )
    }
    return (<ProjectNotFound></ProjectNotFound>)
}