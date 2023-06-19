import {Project} from "@prisma/client";
import Image from "next/image";
import Link from 'next/link'
import {reduceTextSection, wordListToString} from "@/helpers/stringHelpers";
interface ProjectLinkProps {
    project: Project
}


export function ProjectWidget({project}: ProjectLinkProps) {
    let imgSrc = "";
    if(project.img != null) {
        imgSrc = project.img
    }
    let projectTags = ""
    for (let i = 0; i < project.tags.length; i++) {
        if(i < project.tags.length-1) {
            projectTags += project.tags[i] + ","
        } else {
            projectTags += project.tags[i];
        }
    }
    let reducedProjectDescription = reduceTextSection(project.description,20);
    reducedProjectDescription.push("...");
    // @ts-ignore
    return(
        <Link className={"mx-10"} href={`/projects/${project.id}`}>
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