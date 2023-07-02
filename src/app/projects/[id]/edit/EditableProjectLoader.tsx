import {useEffect, useState} from "react";
import {FetchProjects} from "@/app/components/ProjectContent/fetchProjects";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {EditableProject} from "@/app/projects/[id]/edit/EditableProject";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";

export default function EditableProjectLoader(props:{id:string}) {
    let [project,setProject] = useState<(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null})>({} as Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null})
    let [loading,setLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            let projects = await FetchProjects(props.id)
            console.log(projects.projects[0])
            setProject(projects.projects[0])
            setLoading(false)
        }
        getData()
        return () => {

        }
    },[props.id])
    if(loading) {
        return (<div>
            loading
        </div>)
    }
    if(project != undefined) {
        return <EditableProject project={project}></EditableProject>
    } else {
        return <ProjectNotFound></ProjectNotFound>
    }
}