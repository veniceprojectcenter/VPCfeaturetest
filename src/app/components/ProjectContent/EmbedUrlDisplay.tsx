import {Dataurl} from "@prisma/client";

export default function EmbedUrlDisplay(props:{dataurls:Dataurl[]}) {
    return(
        <div className={"flex flex-col"}>
            {props.dataurls.map((embed,index) => {
                if(embed.type == "EMBED") {
                    return(
                    <div key={embed.projectId + index +"container"} className={"flex flex-col"}>
                        <iframe src={embed.url} key={embed.projectId + index}></iframe>
                        <h1>{embed.text}</h1>
                    </div>
                    )
                }
            })}
        </div>
    )
}