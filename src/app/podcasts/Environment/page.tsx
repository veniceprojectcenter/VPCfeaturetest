import {SeasonPage} from "@/app/components/random/SeasonPage";

export default function Page() {

    let seasonTitle = "Environment/Conservation";
    let seasonColor = "bg-lime-400";
    let seasonDescription = "Protecting the environment is cool";

    let episodeNames = ["The Lagoon",
        "Cleaner and Greener Venice",
        "Canal Hydrodynamics",
        "Agriculture and Greenery",
        "Pollution"];
    let episodeThumbnails = ["https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg"];

    let episodeDescriptions = ["Pick any episode to start watching!",
        "What is the Lagoon",
        "Implementation of cleaner energy and recycling techniques in Venice",
        "How water flows through the canals",
        "How Venice gets its food, as well as the various gardens spread throughout",
        "System in place and proposed that protect the city from sewage and pollution"];
    let episodeLinks = ["https://www.youtube.com/embed/6otibCUER3I",
        "https://www.youtube.com/embed/XV-cCzhT7i0?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm",
        "https://www.youtube.com/embed/TD1JUh8UyAM?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm",
        "https://www.youtube.com/embed/t6pqxafXJMo?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm",
        "https://www.youtube.com/embed/NzgMy9h6eDE?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm",
        "https://www.youtube.com/embed/uZWGRCRj06U?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm"];
    let episodeTitles = ["Venice Project Center – Introduction",
        "Housing and Renting",
        "The Boundaries of Venice",
        "Local Food and Neighborhood Stores",
        "Made in Venice: Past, Present and Future",
        "Venice Big Data"];

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={seasonTitle} seasonColor = {seasonColor} seasonDescription={seasonDescription} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}