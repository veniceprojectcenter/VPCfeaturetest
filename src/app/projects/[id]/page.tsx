import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {fetchProjects} from "@/app/projects/[id]/fetchProjects";
import {getProject} from "@/app/api/projects/route";
import {IqpTeamComp} from "@/app/projects/IqpTeamComp";
import {DataUrlDisplay} from "@/app/components/ProjectContent/DataUrl";
import {ProjectTitleCard} from "@/app/components/ProjectContent/ProjectTitleCard";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {ProjectDescription} from "@/app/components/ProjectContent/ProjectDescription";


//TODO make a good way to store embeds on project

export default async function Page({params}: {
    params: {id:string}
}) {
    let projects = await getProject(params.id,"");
    if(projects.length > 0) {
        let project = projects[0];
        let team:IqpTeam = {
            id:-1,
            sponsors:[],
            advisors:[],
            team:[],
            projectId:""
        }
        let dataUrls:Dataurl[] = []
        if(project.iqp_team != null) {
            team = project.iqp_team;
        }
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
                <div className={"flex md:flex-row flex-col"}>
                    <div className={"basis-1/2 "}>
                        <ProjectDescription project={project}></ProjectDescription>
                        <DataUrlDisplay dataurls={dataUrls}></DataUrlDisplay>
                    </div>
                    <div className={"basis-1/2 flex flex-col ml-9"}>
                        <IqpTeamComp title={"Team"} team={project.iqp_team?.team}></IqpTeamComp>
                        <IqpTeamComp title={"Sponsors"} team={project.iqp_team?.sponsors}></IqpTeamComp>
                        <IqpTeamComp title={"Advisors"} team={project.iqp_team?.advisors}></IqpTeamComp>
                    </div>
                </div>
            </div>
        );
    } else {
        //TODO make this a comp
        return (<ProjectNotFound></ProjectNotFound>)
    }
}