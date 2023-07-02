import React, {useState} from "react";
import {Dataurl} from "@prisma/client";
import PopupWithClose from "@/app/components/random/PopupWithClose";

export default function EditableDataUrl(props:{dataurl:Dataurl}) {
    let [open,setOpen] = useState(false);

    return(
        <div>
            <PopupWithClose open={open} setOpen={setOpen}>
                <div className={"m-20"}>

                </div>
            </PopupWithClose>
            <button onClick={()=> setOpen(true)} key={props.dataurl.id + "link"} className={"text-white rounded border-4 text-base"}>
                {props.dataurl.text}
            </button>
        </div>
    )
}