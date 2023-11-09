import {Project, PROJECT_TYPE} from "@prisma/client";
import {useEffect, useState} from "react";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
import {ProjectWidget} from "@/app/components/nav/projectWidget";
import NavLoading from "@/app/components/nav/NavLoading";
import {CreateProjectButton} from "@/app/components/ProjectContent/editingCode/CreateProjectButton";
import {LoadingWidget} from "@/app/components/nav/LoadingWidget";


export function Navlist(props: {search:string,type:PROJECT_TYPE, tagsToFilter:string[], dateFilter:string}) {
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
        projects = data?.projects.filter(filterCat(props.tagsToFilter))
        projects = projects.filter(filterFunc(props.search))
        projects = projects.filter(filterDate(props.dateFilter))
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

function filterDate(param:string) {
    return function (element:Project,index:number) {
        if(param === "" || param === undefined || param.length < 4 ) { //year should be 4 characters!
            return true
        }
        return element.year == Number(param);
    }
}

function filterCat(param:string[]) { //this is to filter by categories, not used yet
    return function (element:FullProject, index:number): boolean {
        if (param.length > 0) {
            if (element.tags?.length != undefined) {
                for (let i = 0; i < param.length; i++) {
                    for (let j = 0; j < element.tags?.length; j++) {
                        if (element.tags[j].name == param[i]) {
                            return true
                        }
                    }
                }
                return false
            }
        }
        return true //if there's no tags selected
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