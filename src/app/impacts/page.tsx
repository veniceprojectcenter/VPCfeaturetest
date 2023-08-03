import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";
import {PROJECT_TYPE} from "@prisma/client";

export default function Page() {
    return(
        <div className={"flex-col xl:flex-row flex mx-10"}>
            <div className={"basis-2/6 back mr-5"}>
                <div className={"flex flex-col text-white"}>
                    <div>
                        <h1 className={"text-5xl font-bold mb-5"}>IMPACTS</h1>
                    </div>
                </div>
                <p className={"text-white relative"}>
                    We believe that our work through the years, by supporting local institutions and activities, has significantly contributed to improving the living conditions of the City.
                </p>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={PROJECT_TYPE.IMPACT}></NavListSearch>
            </div>
        </div>
    );
}