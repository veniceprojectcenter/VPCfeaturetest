"use client"
import Link from "next/link";

import "./SeasonPage.css"
import React from "react";
import Image from "next/image";
import veniceMapThing from "@/app/resources/VeniceMap.png";

export function SeasonPage(props:{pageWidth:string,seasonTitle:string,seasonColor:string,seasonDescription:string,episodeNames:string[],episodeThumbnails:string[],episodeDescriptions:string[],episodeLinks:string[],episodeTitles:string[]}) {

    const [currentEpisode, setCurrentEpisode] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();

        setTimeout(() => {
            console.log("Regular timeout to prevent continuous rendering")
            console.log(currentEpisode);
        },5000);

        return () => {resetTimeout();};
    });

    return(<div>
                <p className={'backButton text-white text-3xl'}><Link href = {"./podcasts"}>Back</Link></p>
                <div className={`seasonPage w-${props.pageWidth} mx-auto`}>
                    <div className = {"seasonHeader my-4"}>
                        <h1 className = {"seasonTitle text-white text-2xl my-6 mx-24"}>{props.seasonTitle}</h1>
                        <p className = {"seasonDescription text-white my-4 mx-10"}>{props.seasonDescription}</p>
                    </div>
                    <div className = {"seasonBody flex flex-row"}>
                        <div className = {"leftSide flex flex-col w-2/3"}>
                            <div className = {"videoContainer mx-auto w-11/12"}>
                                <iframe className = {"embedVid mx-auto"} src={props.episodeLinks[currentEpisode]}
                                        title={props.episodeTitles[currentEpisode]}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen = {true}>
                                </iframe>
                            </div>
                            <p className = {"episodeDescription mx-auto w-3/4 text-white"}>{props.episodeDescriptions[currentEpisode]}</p>
                        </div>
                        <div className = {"rightSide flex flex-col w-2/5"}>
                            <h1 className = {"episodeHeader text-white italic mx-auto"}>Episodes</h1>
                            <ol className = {"episodes w-5/6 flex flex-col gap-2.5"}>
                                {props.episodeNames.map((episodeName, index) => (
                                    <li className = {`episodeContainer relative my-1 border-white border-2 rounded-lg shadow-[0_0px_0px_3px_rgba(255,255,255,0.8)] ${props.seasonColor}`}
                                         key={index}
                                         onClick={() => {setCurrentEpisode(index + 1);
                                                                console.log("Episode set to : ");
                                                                console.log(currentEpisode);}}>
                                        <a className = {"anker relative flex flex-row"}>
                                            <span className = {"episodeThumbnail"}><Image width = {36} height = {36} src={veniceMapThing/*props.episodeThumbnails[index]*/} alt={"iqp image"} className={"h-auto"}></Image></span>
                                            <span className = {"episodeName"}>{episodeName}</span>
                                        </a>

                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className = {"recommended w-3/4"}>

                    </div>
                </div>
           </div>

        );
}