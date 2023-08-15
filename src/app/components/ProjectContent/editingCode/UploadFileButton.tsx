import PopupWithClose, {PopUpButton} from "@/app/components/random/popup/PopupWithClose";
import React, {useState} from "react";
import {delay} from "@/app/components/delay";

export function UploadFileButton(props:{uploadFileCallback:(file:File|null)=>Promise<boolean>}) {
    let [open,setOpen] = useState(false)
    let [fileState,setFileState] = useState<File | null>(null)
    let [message,setMessage] = useState("");
    let onFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target as typeof event.target & {
            files:File[]
        }
        setFileState(target.files[0])
    }
    return(
        <div>
        <button onClick={() => setOpen(true)} className={"text-white  border-white border-2"}>
            change image
        </button>
        <PopupWithClose open={open} setOpenCallback={(value) => setOpen(value)}>
            <div className={"m-20"}>
                <h1>{message}</h1>
                <h1>current file:{fileState?.name ? fileState.name:"no file selected"}</h1>
                <input className={"w-auto"} onChange={onFileChange} type={"file"}/>
                <button onClick={async (event) => {
                    let result = await props.uploadFileCallback(fileState)
                    if(result) {
                        setMessage("file successfully uploaded")
                    } else {
                        setMessage("failed to upload")
                    }
                    await delay(5000);
                    setFileState(null);
                    setOpen(false);
                }} >upload file </button>
            </div>
        </PopupWithClose>
        </div>
    )
}