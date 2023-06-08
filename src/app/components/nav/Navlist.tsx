"use client"
import fetch from "node-fetch";
import {ProjectGetRequestBody} from "@/app/api/projects/datatypes/ProjectGetRequestBody";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {ProjectLink} from "@/app/components/nav/projectLink";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export function Navlist() {
    const [data, setData] = useState<ProjectRequestResponse | undefined>(undefined)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const getData = async () => {
            let data = await getProjects();
            setData(data);
            setLoading(false)
        }
        getData();
        return () => {
            // here you can clean the effect in case the component gets unmonth before the async function ends
        }
    },[])

    if (loading) {
        return <>loading...</>
    }
    return( <div className={"text-white flex-col"}>
        {data?.projects.map((project) => {
                return (
                    <ProjectLink key={project.id} project={project}></ProjectLink>
                )
            }
        )}
    </div>);
}



async function getProjects() {
    let body:ProjectGetRequestBody = {
        fetchAll:true
    }
    //TODO figure out how to make this only take in the end of the route
    const  res = await fetch("http://localhost:3000/api/projects", {
        method:"POST",
        body: JSON.stringify(body),
    }).then((res) => {return res}).catch(err => console.log(err));
    if (res instanceof Response) {
        const data: ProjectRequestResponse = await res.json();
        return data;
    }
    return undefined;
}
