import {AutoSlideshow} from "@/app/components/random/AutoSlideshow";
import Link from "next/link";
import React from "react";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";

export function PublicationSection() {
    let publicationColors = ["#000000", "#000000", "#000000"];
    let publicationCaptions = ["Emergent systems","Spatial Data","Venezia la catta dei rii"];
    let publicationPictures = ["https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/072/medium/open-uri20180830-1548-iarn2f?1535634888","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/062/medium/open-uri20180830-1548-15efokn?1535634876"];
    let publicationLinks = ["https://www.semanticscholar.org/paper/Making-history%3A-an-emergent-system-for-the-accrual-Carrera/ebbd0621aa9469ece8901480cbd7ecf3fd812b20","https://www.academia.edu/32819431/The_Future_of_Spatial_Data_Infrastructures_Capacity_Building_for_the_Emergence_of_Municipal_SDIs","https://www.editori-veneti.it/libri/venezia-la-citta-dei-rii/"];
    let publicationPicWidth = 700;
    let publicationPicHeight = 500;
    let publicationSlideDelay = 3600;

    return(
        <div className = {"mx-2 md:mx-10"}>
            <div className={"grid my-10 xl:mb-36"}>
                <div className={"flex-row flex items-center"}>
                    <h1 className={"text-5xl xl:text-5xl text-white font-bold"}>
                        PUBLICATIONS
                    </h1>
                    <div className={"mx-2 w-0 h-0 md:w-80 md:border md:border-white"}></div>
                </div>
            </div>
            <AutoSlideshow backgroundColors={publicationColors} pictureCaptions={publicationCaptions} slideDelay={publicationSlideDelay} pictures={publicationPictures} links = {publicationLinks} picWidth={publicationPicWidth} picHeight={publicationPicHeight}/>
            <div className={"grid place-items-center"}>
                <HomePageLink href={'/publications'}>
                    <h1 className={"text-white text-base font-bold"}>See All</h1>
                </HomePageLink>
            </div>
        </div>
    )
}