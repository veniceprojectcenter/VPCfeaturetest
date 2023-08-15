import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {getProject} from "@/app/api/projects/route";
import {IqpTeamComp} from "@/app/components/ProjectContent/iqpTeam/IqpTeamComp";
import {DataUrlDisplay} from "@/app/components/ProjectContent/DataUrl/DataUrlDisplay";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {ProjectDescription} from "@/app/components/ProjectContent/ProjectDescription";
import {IqpTeamDisplay} from "@/app/components/ProjectContent/iqpTeam/IqpTeamDisplay";
import EmbedUrlDisplay from "@/app/components/ProjectContent/DataUrl/EmbedUrlDisplay";
import {FullIqpTeam} from "@/app/components/ProjectContent/FullProject";


//TODO make a good way to store embeds on project

export default async function Page({params}: {
    params: {id:string}
}) {
    let projects = await getProject(params.id,"");
    if(projects.length > 0) {
        let project = projects[0];
        let team:FullIqpTeam = {
        } as FullIqpTeam
        let dataUrls:Dataurl[] = []
        if(project.iqp_team != null) {
            team = project.iqp_team;
        }
        if(project.dataurls != null) {
            for (let i = 0; i < project.dataurls.length; i++) {
                dataUrls.push(project.dataurls[i]);
            }
        }
        console.log(project.term)
        return (
            <div className={"flex flex-col"}>
                {/*@ts-ignore*/}
                <ProjectTitleCard project={project}>
                    <div className={"text-white font-bold basis-1/2 flex-shrink place-content-end flex flex-row"}>
                        <h1 className={"text-white mr-20 flex items-center"}>YEAR: {project.year}</h1>
                        {project.term !== null ?
                            <h1 className={"text-white mr-20 flex items-center"}>| TERM: {project.term}</h1> : <div/>}
                    </div>
                </ProjectTitleCard>
                <div className={"flex md:flex-row flex-col"}>
                    <div className={"basis-1/2 "}>
                        <ProjectDescription project={project}></ProjectDescription>
                        <DataUrlDisplay dataurls={dataUrls}></DataUrlDisplay>
                    </div>
                    <div className={"basis-1/2 flex flex-col ml-9"}>
                        <IqpTeamComp title={"Team"} team={project.iqp_team?.team} idPrefix={"STUDENT"}></IqpTeamComp>
                        <IqpTeamComp title={"Sponsors"} team={project.iqp_team?.team} idPrefix={"SPONSOR"}></IqpTeamComp>
                        <IqpTeamComp title={"Advisors"} team={project.iqp_team?.team} idPrefix={"ADVISOR"}></IqpTeamComp>
                    </div>
                </div>
                <EmbedUrlDisplay dataurls={dataUrls}></EmbedUrlDisplay>
            </div>
        );
    } else {
        return (<ProjectNotFound></ProjectNotFound>)
    }
}