
import {SeasonPage} from "@/app/components/random/SeasonPage";

export default function Page() {

    let episodeNames = ["Infrastructure","Changes Over Time","Churches","Scoules & Guilds","Outdoor Art"];
    let episodeThumbnails = ["https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg"];

    let episodeDescriptions = ["Pick any episode to start watching!","Information about cultural buildings and arts in Venice","History of Venice’s borders, economy, and demographics","The art and infrastructure of churches and how they are repurposed","Report of the state of fraternities, guilds, and monastery groups in Venice","Venetian public art and documentation of the types of damages they accrue"];
    let episodeLinks = ["https://www.youtube.com/embed/6otibCUER3I",
                                "https://www.youtube.com/embed/EeELtjzwIkc",
                                "https://www.youtube.com/embed/nN_hkz56n8Y",
                                "https://www.youtube.com/embed/fnD2HHvcYSs",
                                "https://www.youtube.com/embed/AQx_KMoCgJU",
                                "https://www.youtube.com/embed/Ar5yV4Bflmw"];
    let episodeTitles = ["Venice Project Center – Introduction",
                                "Jynxi “light work no reaction” original clip",
                                "Better Call Saul Theme but only the good part",
                                "President Trump, Obama, Hillary, and Biden Playing Minecraft Together",
                                "【ジョジョ５】ギャングダンス Gang Torture Dance",
                                "25 Lego Yoda Death Sound Variations in 60 Seconds"];

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={"Historical Conservation"} seasonColor = {"bg-orange-400"} seasonDescription={"The Venetian Republic was founded at the end of the 7th century, and as a result has a large amount of history. It is important that we work to preserve this history. Lorem ipsum dolor suit amet or something idkkkkkk. I literally only added that last sentence to test text wrapping stuff. "} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}
