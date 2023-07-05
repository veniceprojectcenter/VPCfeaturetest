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
        "Subtitelent",
        "subtitel",
        "System in place and proposed that protect the city from sewage and pollution"];
    let episodeLinks = ["https://www.youtube.com/embed/6otibCUER3I",
        "https://www.youtube.com/embed/yNCgpaMlOcs",
        "https://www.youtube.com/embed/z6AF4HPpWF8",
        "https://www.youtube.com/embed/ZZ5LpwO-An4",
        "https://www.youtube.com/embed/EeELtjzwIkc",
        "https://www.youtube.com/embed/lvwZQTB4iv4"];
    let episodeTitles = ["Venice Project Center – Introduction",
        "Cucuí Ganon Dos (Extended Mid Suavemente Cut) Suave @TerminalMontage",
        "Synthizens of Synthos",
        "HEYYEYAAEYAAAEYAEYAA",
        "Jynxi “light work no reaction” original clip",
        "capybara ok i pull up"];

    return(<SeasonPage pageWidth={"5/6"} seasonTitle={seasonTitle} seasonColor = {seasonColor} seasonDescription={seasonDescription} episodeNames={episodeNames} episodeThumbnails={episodeThumbnails} episodeDescriptions={episodeDescriptions} episodeLinks={episodeLinks} episodeTitles={episodeTitles}/>);
}