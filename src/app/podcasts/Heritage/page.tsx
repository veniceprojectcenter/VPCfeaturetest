
import {SeasonPage} from "@/app/components/random/SeasonPage";

export default function Page() {

    let episodeNames = ["Serenity to Speed","Changes Over Time","Churches","Scoules & Guilds","Outdoor Art"];
    let episodeThumbnails = ["https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg"];

    let episodeDescriptions = ["Pick any episode to start watching!","As the city of Venice steps into the modern age, will it's unique history and culture be lost to mass produced vessels?","Heritage of Venice’s borders, economy, and demographics","The art and infrastructure of churches and how they are repurposed","Report of the state of fraternities, guilds, and monastery groups in Venice","Venetian public art and documentation of the types of damages they accrue"];
    let episodeLinks = ["https://www.youtube.com/embed/6otibCUER3I",
        "https://www.youtube.com/embed/Ziz5tB3Nr-U",
        "https://www.youtube.com/embed/TD1JUh8UyAM?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm",
        "https://www.youtube.com/embed/t6pqxafXJMo?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm",
        "https://www.youtube.com/embed/NzgMy9h6eDE?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm",
        "https://www.youtube.com/embed/uZWGRCRj06U?list=PLWnELGmjl00Zh-Qz83gxg-CHfFFJoeLkm"];
    let episodeTitles = ["Venice Project Center – Introduction",
        "Serenity to Speed: What Happened to Venice's Boats? (The Floating City)",
        "The Boundaries of Venice",
        "Local Food and Neighborhood Stores",
        "Made in Venice: Past, Present and Future",
        "Venice Big Data"];

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={"Heritage"} seasonColor = {"bg-orange-400"} seasonDescription={"The Venetian Republic was founded at the end of the 7th century, and as a result has a large amount of history. It is important that we work to preserve this history. "} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}
