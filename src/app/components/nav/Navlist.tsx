"use client"
import fetch from "node-fetch";
import {ProjectGetRequestBody} from "@/app/api/projects/datatypes/ProjectGetRequestBody";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {ProjectWidget} from "@/app/components/nav/projectWidget";
import {useEffect, useState} from "react";

export function Navlist() {
    const [data, setData] = useState<ProjectRequestResponse | undefined>(undefined)
    const [loading, setLoading] = useState(true)
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

    if (loading) {
        return <h1 className={"text-white"}>loading...</h1>
    }
    return( <div className={"text-white flex-col"}>
        {data?.projects.map((project) => {
                return (
                    <ProjectWidget key={project.id} project={project}></ProjectWidget>
                )
            }
        )}
    </div>);
}



async function getProjects() {
    //TODO figure out how to make this only take in the end of the route
    const  res = await fetch(  window.location.href + "api/projects", {
        method:"GET",
    }).then((res) => {return res}).catch(err => console.log(err));
    if (res instanceof Response) {
        const data: ProjectRequestResponse = await res.json();
        return data;
    }
    return undefined;
}
