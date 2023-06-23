import Image from "next/image";
import React from "react";

export function AutoSlideshow(props:{backgroundColors:string[],pictureCaptions:string[],slideDelay:number,pictures:string[],picWidth:number,picHeight:number}) {

    const [publicationSlideIndex, setPublicationSlideIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    return (
        <div className={"slideshowContainer"}>
            <div className={"slideshow"} style={{transform: `translate3d(${-publicationSlideIndex * 100}%, 0, 0)`}}>
                {props.backgroundColors.map((backgroundColor, index) => (
                    <div className="slide"
                         key={index}
                         style={{backgroundColor }}>
                        <div className={"picContainer"}>
                            <Image width = {props.picWidth} height = {props.picHeight} src={props.pictures[index]} alt={"iqp image"} className={"pic w-auto"}></Image>
                            <p className="publicationTitle">{props.pictureCaptions[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="dots">
                {props.backgroundColors.map((_, idx) => (
                    <div key={idx}
                         className={`dot${publicationSlideIndex === idx ? " active" : ""}`}
                         onClick = {() => {setPublicationSlideIndex(idx);}}>
                    </div>
                ))}
            </div>
        </div>
    );

}