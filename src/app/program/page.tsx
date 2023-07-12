"use client"

import "./programPage.css"

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

    let venicePics = ["https://www.veniceprojectcenter.org/assets/p1-c164190f8b2dc1a8882fee91754b25a1995f6e85b39f9eed956deb31854836ee.png",
    "https://www.veniceprojectcenter.org/assets/p2-4a3b82642a5106ffb44fdff6ca150741ec8c017a6f66c65c9f0a7a8b97f37190.png",
    "https://www.veniceprojectcenter.org/assets/p3-8dfa25224bb95758b245f0af8c3a4eb7fc691ea405b41a657f8fe6641f93ce16.png",
    "https://www.veniceprojectcenter.org/assets/p4-d10bf493e5b16ec486ddd22ac93af2d8505bf4f254e229a84a79e9b441f08269.png"];

    return (
        <div className = {"programPage flex flex-col"}>
            <div className = {"heading"}>
                <img src="https://www.veniceprojectcenter.org/assets/1-b023a86defce385621a6e30d03e1c4a2a38ae8b103826663eed67eee5e7aac88.jpg"></img>
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
                        <img key = {index} src={venicePic}></img>
                    ))}
                </div>
            </div>
        </div>
    );
}