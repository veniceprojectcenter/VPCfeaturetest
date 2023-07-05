import {Dataurl} from "@prisma/client";
import {DataUrlButton} from "@/app/components/ProjectContent/DataUrl/DataUrlButton";

export function DataUrlDisplay(props:{dataurls:Dataurl[]}) {
    return(
        <div className={"flex flex-row"}>
        {props.dataurls.map((dataurl,index) => {
            if(dataurl.type == "LINK" || dataurl.type == "DOWNLOAD") {
                return (
                    <DataUrlButton key={dataurl.id + "link"} dataurl={dataurl}></DataUrlButton>
                )
            }
        })}
    </div>
    );
}