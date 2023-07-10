import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";

export default function Page() {
    return(
        <div className={"flex-row flex mx-10"}>
            <div className={"basis-1/3 back"}>
                <div className={"flex flex-col text-white fixed"}>
                    <div>
                        <h1 className={"text-5xl font-bold mb-5"}>Publications</h1>
                    </div>
                    <h1 className = {"my-5"}>input params</h1>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"PUBLICATION"}></NavListSearch>
            </div>
        </div>
    );
}