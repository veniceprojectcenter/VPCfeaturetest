"use client"

import Image from 'next/image'
import {Navlist} from "@/app/components/nav/Navlist";
import VeniceMapThing from "@/app/resources/VeniceMapThing.png";

import React from 'react';
import './homePage.css';

export default function Home() {
    const publicationColors = ["#0088FE", "#00C49F", "#FFBB28"];
    const publicationCaptions = ["Caption Text 1","Caption Text 2","Caption Text 3"];
    const [publicationSlideIndex, setPublicationSlideIndex] = React.useState(0);
    const publicationSlideDelay = 3500;
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
           () =>
               setPublicationSlideIndex((prevIndex) =>
                   prevIndex === publicationColors.length - 1 ? 0 : prevIndex + 1
               ),publicationSlideDelay
       );

       return () => {resetTimeout();};
    }, [publicationSlideIndex]);

  return (
      <div className = {"homePage"}>
          <div className={"opendata"}>
              <div className = {"lefttt"}>
                  <Image src={VeniceMapThing} alt={"iqp image"} className={"veniceMapHomepage"}></Image>
                  <div className = {"vpcStatement"}><p className = {"text-white"}>For 30 years we have been studying solutions to preserve and improve life in the city of Venice.</p></div>

              </div>
              <div className = {"rightt"}>
                  <div className = {"titleBox"}>
                      <button className = {"opendataTitle"}>Open Data</button>
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
                  <div className = "sampleProject"><rect/></div>
                  <div className = "sampleProject"><rect/></div>
                  <div className = "sampleProject"><rect/></div>
              </div>
          </div>
          <div className = {"publications"}>
              <h1 className={"ptitle"}><p className = {"text-white"}>Publications</p></h1>
              <div className={"slideshowContainer"}>
                  <div className={"slideshow"} style={{transform: `translate3d(${-publicationSlideIndex * 100}%, 0, 0)`}}>
                      {publicationColors.map((backgroundColor, index) => (
                          <div className="slide" key={index} style={{ backgroundColor }}>
                              <Image src={VeniceMapThing} alt={"iqp image"} className={"veniceMapHomepage"}></Image>
                              <div className="publicationTitle">{publicationCaptions[index]}</div>
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
          </div>
      </div>
  )
}
