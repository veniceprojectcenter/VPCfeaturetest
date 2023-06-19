"use client"
import fetch from "node-fetch";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {ProjectWidget} from "@/app/components/nav/projectWidget";
import {useEffect, useState} from "react";
import {Project} from "@prisma/client";

export function Navlist(props: {search:string}) {
    const [data, setData] = useState<ProjectRequestResponse | undefined>(undefined)
    const [loading, setLoading] = useState(true)
    let projects:Project[] = [];
    useEffect(() => {
        const getData = async () => {
            let data = await getProjects();
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
        //.filter(filterFunc,{""});
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



async function getProjects() {
    let domain = (new URL(window.location.href));
    //TODO figure out how to make this only take in the end of the route
    const  res = await fetch(  domain.origin + "/api/projects", {
        method:"GET"
    })
    const data: ProjectRequestResponse = await res.json();
    return data;
}
