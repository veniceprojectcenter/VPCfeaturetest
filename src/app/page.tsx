"use client"

import Image from 'next/image'
import {Navlist} from "@/app/components/nav/Navlist";
import VeniceMapThing from "@/app/resources/VeniceMapThing.png";
import fabioPic from "@/app/resources/IMG-1346.png";
import fabio1 from "@/app/resources/Fabio1.jpg";
import fabio2 from "@/app/resources/Fabio2.jpg";
import fabio3 from "@/app/resources/Fabio3.webp";
import fabio4 from "@/app/resources/Fabio4.jpg";
import fabio5 from "@/app/resources/Fabio5.png";


import Link from "next/link";

import React, {useEffect, useState} from 'react';
import './homePage.css';
import './components/random/AutoSlideshow.css';
import {menuToggle} from "@/app/components/nav/menuToggle";
import {request} from "https";
import {AutoSlideshow} from "@/app/components/random/AutoSlideshow";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";

export default function Home() {

    const studentProjectColors = ["#000000","#000000","#000000"];
    const studentProjectCaptions = ["Preserving Venetian Bell Towers Through Virtual Experiences Documenting the Bells and Bell Towers de Ultra","A Greener Venice: An Exploration and Mapping of Green Spaces in the Venice Islands","Vacation Rentals and Residential Housing in Venice"];
    const studentProjectPictures = ["https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/479/medium/open-uri20180817-3363-1es27lv?1534507111","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/472/medium/open-uri20180817-3363-fawu1h?1534507071"];
    let studentProjectLinks = ["/","/","/"];

    let publicationColors = ["#000000", "#000000", "#000000"];
    let publicationCaptions = ["Emergent systems","Spacial Data","Venezia la catta dei rii"];
    let publicationPictures = ["https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/072/medium/open-uri20180830-1548-iarn2f?1535634888","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/062/medium/open-uri20180830-1548-15efokn?1535634876"];
    let publicationLinks = ["/","/","/"];
    let publicationPicWidth = 700;
    let publicationPicHeight = 500;
    let publicationSlideDelay = 3600;

    const publicationID = "first";

    const [publicationData,setPublicationData] = useState<any | undefined>(undefined);

    let applicationsToolsColors:string[] = ["#000000","#000000","#000000"];
    let applicationsToolsCaptions = ["Dashboard","Bridges story map","Wifi hotspots"];
    let applicationsToolsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567","https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ponte_delle_Tette_%28Venice%29.jpg/1200px-Ponte_delle_Tette_%28Venice%29.jpg","https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062"];
    let applicationsToolsLinks = ["http://dashboard.cityknowledge.net/#/venice","https://storymaps.arcgis.com/stories/0e9aea9fc6c54b0eb9df8a5d80a37130","http://wifi.veniceprojectcenter.org/"];

    const impactsPictures = ["https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/061/original/61.png?1536744567","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/067/medium/p10.png?1536675289","https://s3.amazonaws.com/hive-engine/publications/imgs/000/000/062/medium/open-uri20180830-1548-15efokn?1535634876","https://s3.amazonaws.com/hive-engine/applications/imgs/000/000/060/original/60.png?1536744062","https://s3.amazonaws.com/hive-engine/theses/imgs/000/001/483/medium/open-uri20180817-3363-1dw7lu2?1534507130",VeniceMapThing];
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

    if(publicationData != undefined) {
        publicationColors = publicationData.backgroundColors;
        publicationCaptions = publicationData.pictureCaptions;
        publicationPictures = publicationData.pictures;
        publicationSlideDelay = publicationData.slideDelay;
        publicationLinks = publicationData.links;
        publicationPicWidth = publicationData.picWidth;
        publicationPicHeight = publicationData.picHeight;
    }
    // @ts-ignore


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
                backgroundColors:publicationColors,
                pictureCaptions:publicationCaptions,
                slideDelay: publicationSlideDelay,
                pictures: publicationPictures,
                links:publicationLinks,
                picWidth: publicationPicWidth,
                picHeight: publicationPicHeight
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

  return (
      <div className = {"homePage flex flex-col"}>
          <div className={"text-white bg-[url('./resources/VeniceMapThing.png')] grid xl:grid-cols-2 gap-0 bg-no-repeat ml-20"} style={{height: "653px"}} >
              <div className={"grid grid-cols-2"}>
                  <div></div>
                  <div></div>
                  <div className = {"text-3xl font-bold xl:w-96"}>
                      <p className ={"text-white"}>
                          For 30 years we have been studying solutions to preserve and improve life in the city of Venice.
                      </p>
                  </div>
              </div>
              <div></div>
              <div></div>
              <div className = {"flex-row flex"}>
                  <div className = {"mx-5 text-3xl font-bold basis-6/12"}>
                      <div className={"grid grid-cols-2 justify-items-center"}>
                          <h1 className = {""}>
                              Open
                          </h1>
                          <div className={"grid justify-items-center"}>
                            <div className={"border mt-5 h-0 w-24 border-white"} ></div>
                          </div>
                      </div>
                      <h1 className={"ml-20"}>
                          Data
                      </h1>
                  </div>
                  <div className={"flex flex-col"}>
                  <div className = {""}>
                      <p className = {""}>Years of activity have allowed us to collect a considerable amount of data concerning the city.
                          This data is the basis for the operation of many services useful to the community, and are used daily by applications and predictive models. We are proud of our Open approach, giving access to our data in order to support and enhance the quality of life in the city.
                      </p>
                  </div>
                  <Link className={"border p-2 rounded-full hover:drop-shadow-2xl hover:shadow-white text-3xl"} href={"/opendata"}>See all</Link>
                  </div>
              </div>
          </div>
          <div className={"studentProjects"}>
              <h1 className={"sptitle"}><p className = {"text-white"}>Student Projects</p></h1>
              <div className={"studentProjectsDescription"}>
                  <p className = {"text-white"}>Every year since 1988, WPI students have carried out relevant projects in order to solve issues and problems of the city of Venice with a scientific and technological approach. In 30 years of activity, the projects have covered a wide range of topics, from conservation of cultural heritage to in-depth analysis of the hydrogeological data of the lagoon. Many of these projects have inspired and started the creation of Venetian start-ups.</p>
              </div>
              <div className = {"sampleProjects"}>
                  {studentProjectColors.map((backgroundColor,index) => (
                    <div className = "sampleProject"
                         key = {index}
                         style = {{backgroundColor}}>
                        <Link href = {studentProjectLinks[index]}>
                        <figure className = {"picContainer"}>
                            <Image src={studentProjectPictures[index]} width={500} height = {"500"} alt={"iqp image"} className={"studentProjectPic"}></Image>
                            <figcaption className="studentProjectTitle">{studentProjectCaptions[index]}</figcaption>
                        </figure></Link>
                    </div>
                  ))}
              </div>
              <button className = {"seeAll"}><Link href={"/projects"}>See All {"-->"} </Link></button>
          </div>
          <div className = {"publications"}>
              <h1 className={"ptitle"}><p className = {"text-white"} onClick={enterSlideshow}>Publications</p></h1>
              <AutoSlideshow backgroundColors={publicationColors} pictureCaptions={publicationCaptions} slideDelay={publicationSlideDelay} pictures={publicationPictures} links = {publicationLinks} picWidth={publicationPicWidth} picHeight={publicationPicHeight}/>
              <button className = {"seeAll"}><Link href={"/publications"}>See All {"-->"}</Link></button>
          </div>
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
                          </figure></button>
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
