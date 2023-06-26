import {Dataurl} from "@prisma/client";

export function DataUrlDisplay(props:{dataurls:Dataurl[]}) {
    return(
        <div className={"flex flex-row"}>
        {props.dataurls.map((dataurl,index) => {
            return(
                <a href={dataurl.url}    key={dataurl.id + "link"} className={"text-white rounded border-4 text-base"}>
                    {dataurl.text}
                </a>
            )
        })}
    </div>
    );
}