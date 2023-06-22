"use client"

import Image from 'next/image'
import {Navlist} from "@/app/components/nav/Navlist";
import VeniceMapThing from "@/app/resources/VeniceMapThing.png";
import fabioPic from "@/app/resources/IMG-1346.png";
import fabio1 from "@/app/resources/Fabio1.jpg";
import fabio2 from "@/app/resources/Fabio2.jpg";
import fabio3 from "@/app/resources/Fabio3.webp";
import fabio4 from "@/app/resources/Fabio4.jpg"
import fabio5 from "@/app/resources/Fabio5.png"

import Link from "next/link";

import React from 'react';
import './homePage.css';
import {menuToggle} from "@/app/components/nav/menuToggle";

export default function Home() {

    const studentProjectColors = ["#000000","#000000","#000000"];
    const studentProjectCaptions = ["Whiteboard Fabio","Whietboard Fabio","Whitebaord Fabio"];
    const studentProjectPictures = [fabioPic,fabio2,fabio4];

    const publicationColors = ["#0088FE", "#00C49F", "#FFBB28","#FF00FF","#FF1111"];
    const publicationCaptions = ["ae","io","ua","ei","ou"];
    const publicationPictures = [fabio3,fabioPic,fabio5,fabio4,fabio1];
    const [publicationSlideIndex, setPublicationSlideIndex] = React.useState(0);
    const publicationSlideDelay = 4200;
    const timeoutRef = React.useRef(null);

    const applicationsToolsColors = ["#000000","#000000","#000000"];
    const applicationsToolsCaptions = ["Wrench","Pliers","Screwdriver"];
    const applicationsToolsPictures = [fabio3,fabio2,fabio1];
    const applicationsToolsLinks = ["/","https://storymaps.arcgis.com/stories/0e9aea9fc6c54b0eb9df8a5d80a37130","/"];

    const impactsPictures = [fabioPic,fabio1,fabio2,fabio3,fabio4,VeniceMapThing];
    const impactsCaptions = ["Fabio 1","Fabio 2","Fabio 3","Fabio 4","Fabio 5","Fabio 6"];

    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        // @ts-ignore
        timeoutRef.current = setTimeout(
           () =>
               setPublicationSlideIndex((prevIndex) =>
                   prevIndex === publicationColors.length - 1 ? 0 : prevIndex + 1
               ),publicationSlideDelay
       );

       return () => {resetTimeout();};
    }, [publicationSlideIndex]);

  return (
      <div className = {"homePage flex flex-col"}>
          <div className={"opendata"}>
              <div className = {"lefttt"}>
                  <Image src={VeniceMapThing} alt={"iqp image"} className={"veniceMapHomepage"}></Image>
                  <div className = {"vpcStatement"}><p className = {"text-white"}>For 30 years we have been studying solutions to preserve and improve life in the city of Venice.</p></div>
              </div>
              <div className = {"rightt"}>
                  <div className = {"titleBox"}>
                      <button className = {"opendataTitle"}><Link href={"/"}>Open Data</Link></button>
                  </div>
                  <div className = {"opendataParagraph"}><p className = {"text-white"}>Years of activity have allowed us to collect a considerable amount of data concerning the city.
                          This data is the basis for the operation of many services useful to the community, and are used daily by applications and predictive models. We are proud of our Open approach, giving access to our data in order to support and enhance the quality of life in the city.</p></div>
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
                        <figure className = {"picContainer"}>
                            <Image src={studentProjectPictures[index]} height = {"500"} alt={"iqp image"} className={"studentProjectPic"}></Image>
                            <figcaption className="studentProjectTitle">{studentProjectCaptions[index]}</figcaption>
                        </figure>
                    </div>
                  ))}
              </div>
              <button className = {"seeAll"}><Link href={"/projects"}>See All ---></Link></button>
          </div>
          <div className = {"publications"}>
              <h1 className={"ptitle"}><p className = {"text-white"}>Publications</p></h1>
              <div className={"slideshowContainer"}>
                  <div className={"slideshow"} style={{transform: `translate3d(${-publicationSlideIndex * 100}%, 0, 0)`}}>
                      {publicationColors.map((backgroundColor, index) => (
                          <div className="slide"
                               key={index}
                               style={{backgroundColor }}>
                              <figure className={"picContainer"}>
                                  <Image src={publicationPictures[index]} height = {"500"} alt={"iqp image"} className={"publicationPic"}></Image>
                                  <figcaption className="publicationTitle">{publicationCaptions[index]}</figcaption>
                              </figure>
                          </div>
                      ))}
                  </div>
                  <div className="dots">
                      {publicationColors.map((_, idx) => (
                          <div key={idx}
                               className={`dot${publicationSlideIndex === idx ? " active" : ""}`}
                               onClick = {() => {setPublicationSlideIndex(idx);}}>
                          </div>
                      ))}
                  </div>
              </div>
              <button className = {"seeAll"}><Link href={"/"}>See All ---></Link></button>
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
                              <Image src={applicationsToolsPictures[index]} height = {"500"} alt={"iqp image"} className={"applicationToolPic"}></Image></Link>
                              <figcaption className="applicationToolTitle">{applicationsToolsCaptions[index]}</figcaption>
                          </figure></button>
                      </div>
                  ))}
              </div>
              <button className = {"seeAll"}><Link href={"/"}>See All ---></Link></button>
          </div>
          <div className = {"impacts"}>
              <h1 className = {"impactsTitle"}><p className = {"text-white"}>Impacts</p></h1>
              <div className={"impactsDescription"}>
                  <p className = {"text-white"}>We believe that our work through the years, by supporting local institutions and activities, has significantly contributed to improving the living conditions in the city.</p>
              </div>
              <div className = {"sixImpacts flex flex-row"}>
                  <div className = {"leftImpacts flex flex-row"}>
                      <div className = {"bigImpact"}>
                          <div className={"picContainer"}>
                                <Image src={impactsPictures[0]} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                                <div className="impactTitle">{impactsCaptions[0]}</div>
                          </div>
                      </div>
                      <div className = {"limpacts flex flex-col"}>
                          <div className={"picContainer"}>
                              <Image src={impactsPictures[1]} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                              <div className="impactTitle">{impactsCaptions[1]}</div>
                          </div>
                          <div className={"picContainer"}>
                              <Image src={impactsPictures[2]} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                              <div className="impactTitle">{impactsCaptions[2]}</div>
                          </div>
                      </div>
                  </div>
                  <div className = {"rightImpacts flex flex-row"}>
                      <div className = {"rimpacts flex flex-col"}>
                          <div className={"picContainer"}>
                              <Image src={impactsPictures[2]} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                              <div className="impactTitle">{impactsCaptions[3]}</div>
                          </div>
                          <div className={"picContainer"}>
                              <Image src={impactsPictures[1]} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                              <div className="impactTitle">{impactsCaptions[4]}</div>
                          </div>
                      </div>
                      <div className = {"bigImpact"}>
                          <div className={"picContainer"}>
                              <Image src={impactsPictures[0]} max-width={"100%"} alt={"iqp image"} className = {"impactPic"}></Image>
                              <div className="impactTitle">{impactsCaptions[5]}</div>
                          </div>
                      </div>
                  </div>
              </div>
              <button className = {"seeAll"}><Link href={"/"}>See All ---></Link></button>
          </div>
      </div>
  )
}
