import {useEffect, useState} from "react";
import {FetchProjects} from "@/app/components/ProjectContent/fetchProjects";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {EditableProject} from "@/app/components/ProjectContent/editingCode/EditableProject";
import {ProjectNotFound} from "@/app/components/ProjectContent/ProjectNotFound";
import {FullProject} from "@/app/components/ProjectContent/FullProject";

export default function EditableProjectLoader(props:{id:string}) {
    let [project,setProject] = useState<FullProject>({} as FullProject)
    let [loading,setLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            let projects = await FetchProjects(props.id)
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