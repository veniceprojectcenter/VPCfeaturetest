
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
        "https://www.youtube.com/embed/Us3LBnwPNM8",
        "https://www.youtube.com/embed/0R8CpjAYPcY",
        "https://www.youtube.com/embed/ZZ5LpwO-An4",
        "https://www.youtube.com/embed/z6AF4HPpWF8",
        "https://www.youtube.com/embed/FzoXQKumgCw"];
    let episodeTitles = ["Venice Project Center – Introduction",
        "Batu Khan: The Final Nut Trailer",
        "Rat multiplying meme",
        "HEYYEYAAEYAAAEYAEYAA",
        "Synthizens of Synthos",
        "Is The Government Spying On Schizophrenics Enough?"];

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={"Community/Overtourism"} seasonColor = {"bg-rose-400"} seasonDescription={"Tourism is an essential part of the Venetian economy. It provides millions of dollars of economic benefit to the city, however, it causes significant problems as well."} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}
