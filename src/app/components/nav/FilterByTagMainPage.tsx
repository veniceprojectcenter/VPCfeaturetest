import React, {useEffect, useState} from "react";
import {TagRequestResponse} from "@/app/api/projects/datatypes/TagRequestResponse";
import {DeleteTagButton} from "@/app/components/ProjectContent/editingCode/DeleteTagButton";

export function FilterByTagMainPage(props: {onCheckboxChange: (checkedValues: string[]) => void}) {
    const [checkedTags, setCheckedTags] = useState<string[]>([]);
    let [tagSearchInput , setTagSearchInput] = useState("");
    //---------------------------- redundant code to get the tags from api
    let [allTagData, setAllTagData] = useState<TagRequestResponse | undefined>(undefined)
    useEffect(() => {
        const getData = async () => {
            let tagResponse = await getTag();
            setAllTagData(tagResponse);
        }
        getData();
        return () => {
        }
    })
    let allTags: string[] = [];
    if (allTagData != undefined) {
        for (let i = 0; i < allTagData.tags.length; i++) {
            allTags.push(allTagData.tags[i].name);
        }
    }
    //---------------------------- redundant code to get the tags from api

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedTags((prevCheckedTags) => [...prevCheckedTags, value]);
        } else if(!checked) {
            setCheckedTags((prevCheckedTags) => prevCheckedTags.filter((tag) => tag !== value));
        }
    };
 
  // Notify the parent component of the checked tags using the callback function
        props.onCheckboxChange(checkedTags);

    return (
        <>
            <input value={tagSearchInput} onInput={e => { // @ts-ignore
                setTagSearchInput(e.target.value);}} placeholder={"find tags..."} className={"bg-transparent border-t-2 w-50 h-25 border-b-2 outline-none"}/>
            <div className={"container border-b-2 border-b-white"} style={{overflowY: "scroll", height: "150px", alignSelf: "center"}}>
            {allTags.map((tag: string) => ( tag.toLowerCase().includes(tagSearchInput.toLowerCase()) ? (

                <label style={{margin: "4%"}} key={tag}>
                        <input style={{marginRight: "2%"}} id="tagSearchCheckBoxes" type="checkbox" value={tag} onInput={handleCheckboxChange} />
                    {tag} <br/>
                </label>)
                        : (<></>)
            )
            )
            }
            </div>
            <DeleteTagButton selectedTags={checkedTags}/>
            </>
);
}
async function getTag() {
    let domain = (new URL(window.location.href));
    let url = domain.origin + `/api/projects/tagcontrol`;
    const res = await fetch(url, {
        method: "GET"
    })
    try {
        const data: TagRequestResponse = await res.json();
        return data;
    } catch (error) {
        return undefined
    }
}