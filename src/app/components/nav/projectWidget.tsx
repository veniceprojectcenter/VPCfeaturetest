import {Project} from "@prisma/client";
import Image from "next/image";
import Link from 'next/link'
import {reduceTextSection, wordListToString} from "@/helpers/stringHelpers";
import {FullProject} from "@/app/components/ProjectContent/FullProject";
interface ProjectLinkProps {
    project: FullProject
}


export function ProjectWidget({project}: ProjectLinkProps) {
    let imgSrc = "";
    if(project.img != null) {
        imgSrc = project.img
    }
    let projectTags = ""
    if(project.tags != null) {
            for (let i = 0; i < project.tags.length; i++) {
                if (i < project.tags.length - 1) {
                    projectTags += project.tags[i].name + ","
                } else {
                    projectTags += project.tags[i].name;
                }
            }
    }
    let reducedProjectDescription = project.description.split(".")[0];
    //reducedProjectDescription.push("[more]");
    // @ts-ignore
    return(
        <Link className={"mx-2 my-4 md:m-4"} href={`${urlPathFromProject(project)}/${project.id}`}>
            <div className={"text-white flex flex-row"}>
                <Image className={"rounded-full mx-5 w-[100px] h-[100px]"} src={imgSrc} height={100} width={100} alt={"iqp image"}></Image>
                <div>
                    <div className={"flex flex-col"}>
                        <h1 className={"font-bold"}>
                             {project.title}
                        </h1>
                        <h1 className={"basis-full shrink"}>
                            {reducedProjectDescription}
                        </h1>
                    </div>
                </div>
                {/*<div className={"flex flex-col"}>*/}
                {/*    {projectTags}*/}
                {/*</div>*/}
            </div>
        </Link>
    )
}

export function urlPathFromProject(project:Project) {
    switch (project.type) {
        case "APP":
            return "/applications"
        case "PUBLICATION":
            return "/publications"
        case "DATA":
            return "/opendata"
        case "IQP":
            return "/projects"
        case "IMPACT":
            return "/impacts"
    }
}