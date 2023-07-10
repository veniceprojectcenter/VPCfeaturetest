import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";

export default function Page() {
    return(
        <div className={"flex-row flex mx-10"}>
            <div className={"basis-1/6 back mr-5"}>
                <div className={"flex flex-col text-white"}>
                    <div>
                        <h1 className={"text-5xl font-bold mb-5"}>Publications</h1>
                    </div>
                </div>
                <p className={"text-white"}>
                    We have always tried to give back to the city and to people the knowledge gathered during the years of activity by publishing articles and collaborating in scientific publications.
                </p>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"PUBLICATION"}></NavListSearch>
            </div>
        </div>
    );
}