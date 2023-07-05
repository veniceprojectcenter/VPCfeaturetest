
import "./CanalWalls.css"
import {SeasonPage} from "@/app/components/random/SeasonPage";

export default function Page() {

    let episodeNames = ["What are Canals","Protecting The Canal Walls","Boat Transport","Boat Turbulence","Size Matters"];
    let episodeThumbnails = ["https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg","https://theromanguy.com/wp-content/uploads/Venice-canals-featured-780x420.jpeg"];

    let episodeDescriptions = ["Pick any episode to start watching!","History and Significance of the canals","What systems exist to stop future damage of the walls","How boats are used in Venice","How boat turbulence and waves work and how they can erode canal walls","How the size of boats determines the type of damage and the steps taken to protect the walls"];
    let episodeLinks = ["https://www.youtube.com/embed/6otibCUER3I","https://www.youtube.com/embed/yNCgpaMlOcs","https://www.youtube.com/embed/BgFxeAq126g","https://www.youtube.com/embed/PEh6QRJ4D4c","https://www.youtube.com/embed/J2aJlb-bmuM","https://www.youtube.com/embed/lvwZQTB4iv4"];
    let episodeTitles = ["Venice Project Center – Introduction","Cucuí Ganon Dos (Extended Mid Suavemente Cut) Suave @TerminalMontage","BAD TO THE BONE(s)","Pipes of diffrent materials falling for 6 minutes(Pipe ASMR)","Bing chilling🥶👌👌spinning chinese fish","capybara ok i pull up"];

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={"Canal Walls"} seasonColor = {"bg-sky-400"} seasonDescription={"Throughout the years the flow of water throughout the canals has caused extensive damage to the walls. Lorem ipsum dolor suit amet or something idkkkkkk. I literally only added that last sentence to test text wrapping stuff. "} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}