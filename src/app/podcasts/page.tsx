"use client"
import {AutoSlideshow} from "@/app/components/random/AutoSlideshow";
import "@/app/components/random/AutoSlideshow.css";
import "./podcasts.css";

import {useEffect, useState} from "react";

export default function Page() {

    let seasonColors = ["#F79646","#FF8C84","#41B8D5","#9BBB59"];
    let seasonCaptions = ["Heritage","Tourism and Demographics","Urban Infrastructure","Environment"];
    let seasonPictures = ["https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/480/original/open-uri20180817-3363-em8rkn?1534507116",
                                    "https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/491/original/open-uri20180817-3363-k8psec?1534507148",
                                    "https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/477/original/open-uri20180817-3363-1bucdbw?1534507101",
                                    "https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/496/original/open-uri20180817-3363-qrubz7?1534507181"];
    let seasonLinks = ["./podcasts/Heritage","./podcasts/Tourism","./podcasts/UrbanInfrastructure","./podcasts/Environment"];
    let seasonPicWidth = 600;
    let seasonPicHeight = 800;
    let seasonSlideDelay = 3200;

    const seasonID = "ID 6";

    const [seasonData,setSeasonData] = useState<any | undefined>(undefined);

    useEffect(() => {
        const getSeasonData = async() => {
            let response = await fetch(`/api/random/AutoSlideshow/?id=${seasonID}`,{
                method: "GET",
            });

            console.log(response);
            const seasonResponse = await response.json();
            setSeasonData(seasonResponse);
        }

        getSeasonData();
        return () => {

        }
    },[]);

    if(seasonData != undefined) {
        seasonColors = seasonData.backgroundColors;
        seasonCaptions = seasonData.pictureCaptions;
        seasonPictures = seasonData.pictures;
        seasonSlideDelay = seasonData.slideDelay;
        seasonLinks = seasonData.links;
        seasonPicWidth = seasonData.picWidth;
        seasonPicHeight = seasonData.picHeight;
    }

    // @ts-ignore
    const enterSlideshow = async (event) => {
        console.log("Enter Slideshow method entered");
        event.preventDefault();
        if(event.target == null) {
            console.log("target is null");
        } else {
            console.log("Creating Request");
            let request = {
                type:"enterSlideshow",
                backgroundColors:seasonColors,
                pictureCaptions:seasonCaptions,
                slideDelay: seasonSlideDelay,
                pictures: seasonPictures,
                links: seasonLinks,
                picWidth: seasonPicWidth,
                picHeight: seasonPicHeight
            };
            console.log("Request Created");

            let response = await fetch("/api/random/AutoSlideshow",{
                method: "POST",
                body: JSON.stringify(request)
            });
            console.log("method successfully fetched");
            let responseJSON = await response.json();
            console.log(responseJSON);

            console.log(responseJSON.response);
        }

    }

    return(<div className = {"podcastPage flex flex-col justify-center mx-auto w-3/4"}>
                <h1 className = {"podcastTitle"} onClick={enterSlideshow}>Docuseries</h1>
                <p className = {"podcastsDescription my-4"}>Here is the compilation of episodes about the history of the VPC gathered by the 35th anniversary team. The episodes are split into respective themes of the projects they contain. </p>
                <div className = {"w-5/6 justify-center mx-auto"}>
                    <AutoSlideshow backgroundColors={seasonColors} pictureCaptions={seasonCaptions} slideDelay={seasonSlideDelay} pictures={seasonPictures} links={seasonLinks} picWidth={seasonPicWidth} picHeight={seasonPicHeight}/>
                </div>
           </div>);
}