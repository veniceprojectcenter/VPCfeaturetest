import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";
import {Suspense} from "react";
import NavLoading from "@/app/components/nav/NavLoading";

export default function Page() {
    return(
        <div className={"flex-row flex mx-10"}>
            <div className={"basis-1/6 back"}>
                <div className={"flex flex-col text-white fixed"}>
                    <div>
                        <h1 className={"text-5xl font-bold mb-5"}>Student</h1>
                        <h1 className={"text-5xl font-bold"}>Projects</h1>
                    </div>
                    <h1 className = {"my-5"}>input params</h1>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"IQP"}></NavListSearch>
            </div>
        </div>
    );
}