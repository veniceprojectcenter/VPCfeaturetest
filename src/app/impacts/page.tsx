"use client";
import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";
import {FilterByTagMainPage} from "@/app/components/nav/FilterByTagMainPage";
import React, {useState} from "react";
import {PROJECT_TYPE} from "@prisma/client";

export default function Page() {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const handleCheckboxChange = (checkedValues: string[]) => {
        setSelectedTags(checkedValues);
    };
    return(
        <div className={"flex-col xl:flex-row flex mx-10"}>
            <div className={"basis-2/6 back"}>
                <div className={"flex flex-col text-white mr-5"}>
                    <div>
                        <h1 className={"text-5xl font-bold mb-5 tracking-widest"}>IMPACTS</h1>
                    </div>
                    <div>
                        <p className={"my-4 "}>
                            We believe that our work through the years, by supporting local institutions and activities, has significantly contributed to improving the living conditions of the City.
                        </p>
                    </div>
                    <FilterByTagMainPage onCheckboxChange={handleCheckboxChange}/>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={PROJECT_TYPE.IMPACT} tagsToFilter={selectedTags}></NavListSearch>
            </div>
        </div>
    );
}



