import Link from "next/link";
import Image from "next/image";
import React from "react";
import {newSudentProjectData, StudentProjectCard} from "@/app/components/homepage/StudentProjects/StudentProjectCard";

export function StudentProjectsSection() {
    const studentProjects = [
        newSudentProjectData("#000000","Preserving Venetian Bell Towers Through Virtual Experiences Documenting the Bells and Bell Towers de Ultra","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130","/"),
        newSudentProjectData("#000000","A Greener Venice: An Exploration and Mapping of Green Spaces in the Venice Islands","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/479/medium/open-uri20180817-3363-1es27lv?1534507111","/"),
        newSudentProjectData("#000000","Vacation Rentals and Residential Housing in Venice","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/472/medium/open-uri20180817-3363-fawu1h?1534507071","/")
    ]
    return(
        <div className={"studentProjects"}>
            <h1 className={"sptitle"}><p className = {"text-white"}>Student Projects</p></h1>
            <div className={"studentProjectsDescription"}>
                <p className = {"text-white"}>Every year since 1988, WPI students have carried out relevant projects in order to solve issues and problems of the city of Venice with a scientific and technological approach. In 30 years of activity, the projects have covered a wide range of topics, from conservation of cultural heritage to in-depth analysis of the hydrogeological data of the lagoon. Many of these projects have inspired and started the creation of Venetian start-ups.</p>
            </div>
            <div className = {"sampleProjects"}>
                {studentProjects.map((project)=> {
                    // eslint-disable-next-line react/jsx-key
                    return <StudentProjectCard data={project}></StudentProjectCard>
                })}
            </div>
            <button className = {"seeAll"}><Link href={"/projects"}>See All {"-->"} </Link></button>
        </div>
    )
}