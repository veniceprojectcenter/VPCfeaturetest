import {IPQ_ENTITY_TYPE, IqpEntity} from "@prisma/client";

export function IqpTeamComp(props:{title:string,team:IqpEntity[] | null | undefined,idPrefix:IPQ_ENTITY_TYPE,onBlur?: (event: any) => void,contentEditable?: boolean,addElementButton?:JSX.Element}) {
    // @ts-ignore
    if(props.team != undefined) {
        let elementsList = [];
        for (let i = 0; i < props.team.length; i++) {
            if(props.team[i].type === props.idPrefix) {
                elementsList.push(<h1 onBlur={props.onBlur} suppressContentEditableWarning
                                      contentEditable={props.contentEditable}
                                      className={"flex mx-3 text-white"} id={"iqpEntity " + i}
                                      key={props.team[i].name + i}>
                    {props.team[i].name}
                </h1>);
            }
        }
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