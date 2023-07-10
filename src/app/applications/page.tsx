import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";

export default function Page() {
    return(
        <div className={"flex-row flex mx-10"}>
            <div className={"basis-1/6 back"}>
                <div className={"flex flex-col text-white mr-5"}>
                    <div>
                        <h1 className={"text-5xl font-bold mb-5 tracking-widest"}>APPLICATIONS</h1>
                    </div>
                    <div>
                        <p className={"my-4 "}>
                            Over the years we have implemented several projects, tools and applications based on the data collected through the work of the students.
                        </p>
                        <p className={"my-4"}>
                            Some of these aim to become real start-ups with the goal of creating work in the city and providing useful tools to its inhabitants
                        </p>
                    </div>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"APP"}></NavListSearch>
            </div>
        </div>
    );
}