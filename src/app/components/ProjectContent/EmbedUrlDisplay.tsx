import {Dataurl} from "@prisma/client";

export default function EmbedUrlDisplay(props:{dataurls:Dataurl[]}) {
    return(
        <div className={"flex flex-col"}>
            {props.dataurls.map((embed,index) => {
                if(embed.type == "EMBED") {
                    return(
                    <div key={embed.projectId + index +"container"} className={"flex flex-col"}>
                        <iframe className={"mx-10 w-auto"} height={1000} src={embed.url} key={embed.projectId + index}></iframe>
                    </div>
                    )
                }
            })}
        </div>
    )
}