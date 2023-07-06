export function IqpTeamComp(props:{title:string,team:string[] | undefined,idPrefix:string,onBlur?: (event: any) => void,contentEditable?: boolean,addElementButton?:JSX.Element}) {
    if(props.team != undefined) {
        let elementsList = props.team.map((advisor, index) => {
            return (<h1 onBlur={props.onBlur} suppressContentEditableWarning contentEditable={props.contentEditable} className={"flex mx-3 text-white font-bold"}  id={props.idPrefix + " " + index} key={advisor + index}>{advisor}</h1>)
        });
        return (
            <div className={""}>
                <h1 className={"text-white mt-9 mb-3"}>
                    {props.title}
                </h1>
                <div className={"flex flex-row"}>
                    {elementsList.map((item) => (
                        item
                    ))}
                    {props.addElementButton}
                </div>
            </div>
        )
    }
    return (<div></div>)
}