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
    let reducedProjectDescription = reduceTextSection(project.description,20);
    reducedProjectDescription.push("...");
    // @ts-ignore
    return(
        <Link className={"mx-10"} href={`${urlPathFromProject(project)}/${project.id}`}>
            <div className={"text-white flex flex-row"}>
                <Image className={"rounded-full mx-5"} src={imgSrc} height={50} width={50} alt={"iqp image"}></Image>
                <div>
                <div className={"flex flex-col"}>
                    <h1 className={"font-bold"}>
                         {project.title}
                    </h1>
                    <h1>
                        {wordListToString(reducedProjectDescription)}
                    </h1>
                </div>
                </div>
                <div className={"flex flex-col"}>
                    {projectTags}
                </div>
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
    }
}