
import {SeasonPage} from "@/app/components/random/SeasonPage";

export default function Page() {

    let episodeNames = ["Tourist Crowds",
                                "Cost of Living",
                                "Business of Tourism",
                                "Job Market",
                                "Aging Population"];
    let episodeThumbnails = ["https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg"];

    let episodeDescriptions = ["Pick any episode to start watching!",
                                        "The amount of and trends of tourists who visit Venice",
                                        "Discusses how the cost of living for residents has increased year to year",
                                        "How tourist-catered buildings  have taken over much of the city’s area.",
                                        "The lack of jobs available for residents because of loss of local businesses",
                                        "Why and how the average age of residents to grows higher"];
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

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={"Tourism and Demographics"} seasonColor = {"bg-rose-400"} seasonDescription={"Tourism is an essential part of the Venetian economy. It provides millions of dollars of economic benefit to the city, however, it causes significant problems as well."} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}
