import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {fetchProjects} from "@/app/projects/[id]/fetchProjects";
import {getProject} from "@/app/api/projects/route";




export default async function Page({params}: {
    params: {id:string}
}) {
    let projects = await getProject(params.id);
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
        console.log(dataUrls[0].id)
        return (
            <div className={"flex flex-col"}>
                <h1 className={"text-white"}>
                    {project.title}
                </h1>
                <p className={"text-white"}>{project.description}</p>
                {dataUrls.map((dataurl,index) => {
                    return(<div key={dataurl.id} className={"text-white"}>
                        <a href={dataurl.url} key={dataurl.id + "link"} className={"text-white"}>
                            {dataurl.text}
                        </a>
                    </div>)
                })}
            </div>
        );
    } else {
        return <h1 className={"text-white"}>
            project not found
        </h1>
    }
}