"use client"
import fetch from "node-fetch";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {ProjectWidget} from "@/app/components/nav/projectWidget";
import {useEffect, useState} from "react";
import {Project, PROJECT_TYPE} from "@prisma/client";

interface NavlistProps {
    type: PROJECT_TYPE
}

interface NavlistProps {
    type: PROJECT_TYPE
}

export function Navlist(props: {search:string,type:PROJECT_TYPE}) {
    const [data, setData] = useState<ProjectRequestResponse | undefined>(undefined)
    const [loading, setLoading] = useState(true)
    let projects:Project[] = [];
    useEffect(() => {
        const getData = async () => {
            let data = await getProjects(props.type);
            console.log(data?.projects)
            setData(data);
            setLoading(false)
        }
        getData();
        return () => {
            // here you can clean the effect in case the component gets unmonth before the async function ends
        }
    },[])
    if(data != undefined) {
        projects = data?.projects.filter(filterFunc(props.search))
        console.log(projects);
    }
    if (loading) {
        return <h1 className={"text-white w-full"}>loading...</h1>
    }
    return( <div className={"text-white flex-col"}>
        {projects.map((project) => {
                return (
                    <ProjectWidget key={project.id} project={project}></ProjectWidget>
                )
            }
        )}
    </div>);
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
    const  res = await fetch(  domain.origin + `/api/projects?type=${type}`, {
        method:"GET"
    })
    const data: ProjectRequestResponse = await res.json();
    return data;
}
