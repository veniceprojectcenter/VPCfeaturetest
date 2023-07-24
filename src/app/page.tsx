import Image from 'next/image'
import {Navlist} from "@/app/components/nav/Navlist";
import veniceMap from "@/app/resources/VeniceMap.png";


import Link from "next/link";

import './homePage.css';
import './components/random/AutoSlideshow.css';
import {menuToggle} from "@/app/components/nav/menuToggle";
import {request} from "https";
import {AutoSlideshow} from "@/app/components/random/AutoSlideshow";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {HomePageLink} from "@/app/components/homepage/HomePageLink";
import {HomePageLanding} from "@/app/components/homepage/HomePageLanding";
import {StudentProjectsSection} from "@/app/components/homepage/StudentProjects/StudentProjectsSection";
import {PublicationSection} from "@/app/components/homepage/PublicationSection";

export default function Home() {
    let applicationsToolsColors:string[] = ["#000000","#000000","#000000"];
    let applicationsToolsCaptions = ["Dashboard","Bridges story map","Wifi hotspots"];
    let applicationsToolsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ponte_delle_Tette_%28Venice%29.jpg/1200px-Ponte_delle_Tette_%28Venice%29.jpg","https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062"];
    let applicationsToolsLinks = ["http://dashboard.cityknowledge.net/#/venice","https://storymaps.arcgis.com/stories/0e9aea9fc6c54b0eb9df8a5d80a37130","http://wifi.veniceprojectcenter.org/"];

    const impactsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/062/medium/open-uri20180830-1548-15efokn?1535634876","https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130",veniceMap];
    const impactsCaptions = ["","","","","",""];
    const impactsLinks = ["http://dashboard.cityknowledge.net/#/venice","/","/","/","/","http://dashboard.cityknowledge.net/#/venice"];

    // useEffect(() => {
    //     const getPublicationData = async() => {
    //         let response = await fetch(`/api/random/AutoSlideshow/?id=${publicationID}`,{
    //             method: "GET",
    //         });
    //
    //         console.log(response);
    //         const publicationResponse = await response.json();
    //         if(publicationResponse != undefined) {
    //             setPublicationData(publicationResponse);
    //             console.log(publicationResponse.backgroundColors);
    //             console.log(publicationResponse.slideDelay);
    //         }
    //     }
    //
    //     getPublicationData();
    //     return () => {
    //
    //     }
    // },[]);

    // @ts-ignore


    // @ts-ignore
    // const enterSlideshow = async (event) => {
    //     console.log("Enter Slideshow method entered");
    //     event.preventDefault();
    //     if(event.target == null) {
    //         console.log("target is null");
    //     } else {
    //         console.log("Creating Request");
    //         let request = {
    //             type:"enterSlideshow",
    //             backgroundColors:publicationColors,
    //             pictureCaptions:publicationCaptions,
    //             slideDelay: publicationSlideDelay,
    //             pictures: publicationPictures,
    //             links:publicationLinks,
    //             picWidth: publicationPicWidth,
    //             picHeight: publicationPicHeight
    //         };
    //         console.log("Request Created");
    //
    //         let response = await fetch("/api/random/AutoSlideshow",{
    //             method: "POST",
    //             body: JSON.stringify(request)
    //         });
    //         console.log("method successfully fetched");
    //         let responseJSON = await response.json();
    //         console.log(responseJSON);
    //
    //         console.log(responseJSON.response);
    //     }
    //
    // }

    return (
        <div className = {"homePage flex flex-col"}>
            <HomePageLanding></HomePageLanding>
            <StudentProjectsSection></StudentProjectsSection>
            <PublicationSection></PublicationSection>
            <div className = {"applicationsTools"}>
                <h1 className={"attitle"}><p className = {"text-white"}>Applications & Tools</p></h1>
                <div className={"applicationsToolsDescription"}>
                    <p className = {"text-white"}>Thanks to the knowledge collected over the years, we have produced a wide range of applications and tools, ranging from data visualization tools to tourist flow management models.</p>
                </div>
                <div className = {"sampleTools"}>
                    {applicationsToolsColors.map((backgroundColor,index) => (
                        <div className = "sampleTool"
                             key = {index}
                             style = {{backgroundColor}}>
                            <button>
                                <figure className = {"picContainer"}>
                                    <Link href={applicationsToolsLinks[index]} target={"_blank"}>
                                        <Image src={applicationsToolsPictures[index]} width={"500"} height = {"500"} alt={"iqp image"} className={"applicationToolPic"}></Image></Link>
                                    <figcaption className="applicationToolTitle">{applicationsToolsCaptions[index]}</figcaption>
                                </figure>
                            </button>
                        </div>
                    ))}
                </div>
                <button className = {"seeAll"}><Link href={"/applications"}>See All {"-->"}</Link></button>
            </div>
            <div className = {"impacts flex flex-col"}>
                <h1 className = {"impactsTitle"}><p className = {"text-white"}>Impacts</p></h1>
                <div className={"impactsDescription"}>
                    <p className = {"text-white"}>We believe that our work through the years, by supporting local institutions and activities, has significantly contributed to improving the living conditions in the city.</p>
                </div>
                <div className = {"sixImpacts flex flex-row"}>
                    <div className = {"leftImpacts flex flex-row"}>
                        <div className = {"bigImpact"}>
                            <Link href={impactsLinks[0]} target = {"_blank"}>
                                <div className={"picContainer"}>
                                    <Image src={impactsPictures[0]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                    <div className="impactTitle">{impactsCaptions[0]}</div>
                                </div></Link>
                        </div>
                        <div className = {"limpacts flex flex-col"}>
                            <Link href = {impactsLinks[1]}>
                                <div className={"picContainer"}>
                                    <Image src={impactsPictures[1]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                    <div className="impactTitle">{impactsCaptions[1]}</div>
                                </div></Link>
                            <Link href = {impactsLinks[2]}>
                                <div className={"picContainer"}>
                                    <Image src={impactsPictures[2]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                    <div className="impactTitle">{impactsCaptions[2]}</div>
                                </div></Link>
                        </div>
                    </div>
                    <div className = {"rightImpacts flex flex-row"}>
                        <div className = {"rimpacts flex flex-col"}>
                            <Link href = {impactsLinks[3]}>
                                <div className={"picContainer"}>
                                    <Image src={impactsPictures[2]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                    <div className="impactTitle">{impactsCaptions[3]}</div>
                                </div></Link>
                            <Link href = {impactsLinks[4]}>
                                <div className={"picContainer"}>
                                    <Image src={impactsPictures[1]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                    <div className="impactTitle">{impactsCaptions[4]}</div>
                                </div></Link>
                        </div>
                        <div className = {"bigImpact"}>
                            <Link href = {impactsLinks[5]} target = {"_blank"}>
                                <div className={"picContainer"}>
                                    <Image src={impactsPictures[0]} width={"500"} height={"500"} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                    <div className="impactTitle">{impactsCaptions[5]}</div>
                                </div></Link>
                        </div>
                    </div>
                </div>
                <button className = {"seeAll"}><Link href={"/impacts"}>See All {"-->"}</Link></button>
            </div>
        </div>
    );
}
