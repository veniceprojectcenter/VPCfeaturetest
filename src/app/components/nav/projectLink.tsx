import {Project} from "@prisma/client";

interface ProjectLinkProps {
    project: Project
}

export function ProjectLink({project}: ProjectLinkProps) {
    return(
        <div className={"text-white"}>
            <h1>
                {project.title}
            </h1>
        </div>
    )
}