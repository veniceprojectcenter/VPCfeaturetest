"use client";
import {Navlist} from "@/app/components/nav/Navlist";
import {NavListSearch} from "@/app/components/nav/NavListSearch";
import {FilterByTagMainPage} from "@/app/components/nav/FilterByTagMainPage";
import React, {useState} from "react";

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
                        <h1 className={"text-5xl font-bold mb-5 tracking-widest"}>OPENDATA</h1>
                    </div>
                    <div>
                        <p className={"my-4 "}>
                            Years of activity have allowed us to collect a considerable amount of data concerning the city.
                        </p>
                        <p className={"my-4"}>
                            This data is the basis for the operation of many services that are useful to the community, and is used daily by applications and predictive models.                         </p>
                        <p className={"my-4"}>
                            We are proud of our Open approach, giving access to our data in order to support and enhance the quality of life in the city.                        </p>
                    </div>
                    <FilterByTagMainPage onCheckboxChange={handleCheckboxChange}/>
                </div>
            </div>
            <div className={"w-fit basis-full"}>
                <NavListSearch type={"DATA"} tagsToFilter={selectedTags}></NavListSearch>
            </div>
        </div>
    );
}