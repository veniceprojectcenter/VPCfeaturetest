
import "./CanalWalls.css"
import {SeasonPage} from "@/app/components/random/SeasonPage";

export default function Page() {

    let episodeNames = ["What are Canals",
                        "Protecting The Canal Walls",
                        "Boat Transport",
                        "Boat Turbulence",
                        "Size Matters"];
    let episodeThumbnails = ["https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg",
                                "https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg",
                                "https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg",
                                "https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg",
                                "https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg"];

    let episodeDescriptions = ["Pick any episode to start watching!",
                                        "Heritage and Significance of the canals",
                                        "What systems exist to stop future damage of the walls",
                                        "How boats are used in Venice","How boat turbulence and waves work and how they can erode canal walls",
                                        "How the size of boats determines the type of damage and the steps taken to protect the walls"];
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

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={"Urban Infrastructure"} seasonColor = {"bg-sky-400"} seasonDescription={"Throughout the years the flow of water throughout the canals has caused extensive damage to the walls."} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}

