import {Project, PROJECT_TYPE} from "@prisma/client";
import {useEffect, useState} from "react";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
import {ProjectWidget} from "@/app/components/nav/projectWidget";
import NavLoading from "@/app/components/nav/NavLoading";
import {CreateProjectButton} from "@/app/components/ProjectContent/editingCode/CreateProjectButton";
import {LoadingWidget} from "@/app/components/nav/LoadingWidget";


export function Navlist(props: {search:string,type:PROJECT_TYPE}) {
    const [data, setData] = useState<ProjectRequestResponse | undefined>(undefined)
    const [loading, setLoading] = useState(true)
    let projects:FullProject[] = [];
    useEffect(() => {
        const getData = async () => {
            let data = await getProjects(props.type);
            console.log(data?.projects)
            setData(data);
            setLoading(false)
        }
        getData();
        return () => {
            // here you can clean the effect in case the component gets unmounted before the async function ends
        }
    },[props.type])
    if(data != undefined) {
        projects = data?.projects.filter(filterFunc(props.search))
        console.log(projects);
    }
    if (loading) {
        return <NavLoading></NavLoading>
    }
    if(projects != undefined) {
        return (
        <div className={"text-white flex flex-col w-fit"}>
            <CreateProjectButton></CreateProjectButton>
            {projects.map((project) => {
                    return (
                        <ProjectWidget key={project.id} project={project}></ProjectWidget>
                    )
                }
            )}
        </div>);
    } else {
        return (<div></div>)
    }
}
function filterFunc(param:string) {
    return function (element:Project,index:number) {
        if(param === "" || param === undefined) {
            return true
        }
        return element.title.toLowerCase().includes(param.toLowerCase()) || element.description.toLowerCase().includes(param.toLowerCase());

    }
}



async function getProjects(type:PROJECT_TYPE) {
    let domain = (new URL(window.location.href));
    let url = domain.origin + `/api/projects?type=${type}`;
    const res = await fetch(url, {
        method: "GET"
    })
    try {
        const data: ProjectRequestResponse = await res.json();
        return data;
    } catch (error) {
        return undefined
    }
}