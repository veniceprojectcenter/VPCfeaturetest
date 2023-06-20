export function IqpTeamComp(props:{title:string,team:string[] | undefined}) {
    if(props.team != undefined) {
        return (
            <div className={""}>
                <h1 className={"text-white mt-9 mb-3"}>
                    {props.title}
                </h1>
                <div className={"flex flex-row"}>
                    {props.team.map((advisor, index) => {
                        return (<h1 className={"flex text-white font-bold"} key={advisor + index}>{advisor}</h1>)
                    })}
                </div>
            </div>
        )
    }
    return (<div></div>)
}