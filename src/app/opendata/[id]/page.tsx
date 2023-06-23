import {getProject} from "@/app/api/projects/route";
import {Dataurl} from "@prisma/client";
import {IqpTeamComp} from "@/app/projects/IqpTeamComp";
import {DataUrlDisplay} from "@/app/components/ProjectContent/DataUrl";

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
                <div className={"flex-row flex h-64 bg-blend-multiply bg-black bg-opacity-40"} style={{backgroundImage: `url(${project.img})`}}>
                    <div className={"text-white text-2xl font-bold basis-1/2 justify-self-center flex flex-row"}>
                        <h1 className={"ml-16 flex items-center"}>
                            {project.title}
                        </h1>
                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <div className={"basis-1/2 "}>
                        <p className={"text-white my-10"}>{project.description}</p>
                        <DataUrlDisplay dataurls={dataUrls}></DataUrlDisplay>
                    </div>
                </div>
            </div>
        )
    }
    //TODO make this a comp
    return <h1 className={"text-white"}>
        project not found
    </h1>
}