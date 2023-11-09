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
                        <h1 className={"text-5xl font-bold mb-5 tracking-widest"}>PUBLICATIONS</h1>
                    </div>
                    <div>
                        <p className={"my-4 "}>
                            We have always tried to give back to the city and to people the knowledge gathered during the years of activity by publishing articles and collaborating in scientific publications.
                        </p>
                    </div>
                    <FilterByTagMainPage onCheckboxChange={handleCheckboxChange}/>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"PUBLICATION"} tagsToFilter={selectedTags}></NavListSearch>
            </div>
        </div>
    );
}






