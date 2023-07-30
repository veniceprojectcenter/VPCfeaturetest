import "./programPage.css"
import programHeader from "./program-header.jpg"
import venice1 from "./venice1.png"
import venice2 from "./venice2.png"
import venice3 from "./venice3.png"
import venice4 from "./venice4.png"
import Image from "next/image";

export default function Page() {

    let headingTitle = "VENICE PROJECT CENTER\nTEAM PROGRAM";
    let infoLabels = ["Program Term : ",
    "Director : ",
    "Housing : ",
    "Center Highlights : ",
    "Program Eligibility : ",
    "Major Eligibility : ",
    "Program Preparation : ",
    "Visa Requirements : "];
    let infoDescriptions = ["B,D,E term",
    "Fabio Carrera",
    "Shared apartments",
    "Community Development, International, Urban",
    "Sophomore at the time of application.",
    "All Majors",
    "1/6 PQP in the term preceding departure, ID 2050 in the term preceding departure, Language preparation preceding departure.",
    "Visa Not Required for US Citizens - International Students Should Confirm Personal Status."];

    let venicePics = [venice1,
    venice2,
    venice3,
    venice4];

    return (
        <div className = {"programPage flex flex-col"}>
            <div className = {"heading"}>
                <Image src={programHeader} alt={"an image of a student working on a project"}></Image>
                <div className={"overlay"}></div>
                <h1>VENICE PROJECT CENTER{"\n"}
                    TEAM PROGRAM</h1>
            </div>
            <div className = {"info1"}>
                    {infoLabels.map((infoLabel,index) => (
                        <div className = {"info_el"} key = {index}>
                            <span className={"label"}>{infoLabel}</span>
                            <span className={"elem"}>{infoDescriptions[index]}</span>
                        </div>
                    ))}
            </div>
            <div className = {"info2"}>
                <div className = {"left"}>
                    <p>Called the most beautiful city in the world, Venice is a city filled with outstanding historical, artistic, and architectural heritage, and is adapting to 21st century lifestyles while preserving its environmental, artistic, and cultural heritage. The rising cost of living in Venice has led to a dramatic exodus of its population, which has decreased from 200,000 to 60,000 since World War II, while tourism has expanded to 12 million visitors per year. The city has a humid, subtropical climate with cool winters and very warm summers; average temperatures in November fall between 39°F and 53°F.</p>
                </div>
                <div className = {"right"}>
                    {venicePics.map((venicePic,index) => (
                        <Image key = {index} src={venicePic} alt={"an image of the city of venice"}></Image>
                    ))}
                </div>
            </div>
        </div>
    );
}