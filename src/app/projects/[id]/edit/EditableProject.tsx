import {useEffect, useState} from "react";
import {ProjectRequestResponse} from "@/app/api/projects/datatypes/ProjectRequestResponse";
import {Dataurl, IqpTeam, Project} from "@prisma/client";
import {IqpTeamComp} from "@/app/projects/IqpTeamComp";
import Popup from "reactjs-popup";

export function EditableProject(props:{id:string}) {
    let [project,setProject] = useState<(Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}) | undefined>(undefined)
    let [editedProject,setEditedProject] = useState<Project>({} as (Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}))
    let [open,setOpen] = useState(false);
    let [loading,setLoading] = useState(true)
    let dataUrls:Dataurl[] = []
    let dataElements:JSX.Element[] = []
    let term = "";

    useEffect(() => {
        const getData = async () => {
            let projects = await getProject(props.id)
            console.log(projects)
            setProject(projects.projects[0])
            setEditedProject(projects.projects[0]);
            setLoading(false)
        }
        getData()
        return () => {

        }
    },[props.id])


    // @ts-ignore
    let leftFocus = (event) => {
        let target = event.target;
        switch (target.id) {
            case 'description':
                editedProject.description = event.target.textContent;
                break;
            case 'title':
                editedProject.title = event.target.textContent;
                break;
            case 'year':
                editedProject.year = parseInt(event.target.textContent);
                break;
            case 'term':
                //TODO add checks to make sure its a valid term
                editedProject.term = event.target.textContent[0];
                break;
        }
        setEditedProject(editedProject);
    }
    // @ts-ignore
    let commit = async (event) => {
        let create = await fetch(window.location.origin+"/api/projects",{
            method:"POST",
            body:JSON.stringify(editedProject),
        });
    }
    if(loading) {
        return (<div className={"text-white"}>
            loading
        </div>)
    }
    if(project != undefined) {
        if(project.dataurls != null) {
            for (let i = 0; i < project.dataurls.length; i++) {
                dataUrls.push(project.dataurls[i]);
            }
        }
        if(project.term != null) {
            term = project.term;
        } else {
            term = "A"
        }
        dataElements = dataUrls.map((dataurl,index) => {
            return(
                <a href={dataurl.url}    key={dataurl.id + "link"} className={"text-white rounded border-4 text-base"}>
                    {dataurl.text}
                </a>)
        });
        dataElements.push(AddDataUrl())
        console.log(dataElements.length)
        return (
            <div className={"flex flex-col"}>
                <div className={"flex-row flex h-64 bg-blend-multiply bg-black bg-opacity-40"} style={{backgroundImage: `url(${project.img})`}}>
                    <div className={"text-white text-2xl font-bold basis-1/2 justify-self-center flex flex-row"}>
                        <h1 className={"ml-16 flex items-center"} id={"title"} onBlur={leftFocus}  contentEditable suppressContentEditableWarning={true}>
                            {project.title}
                        </h1>
                    </div>
                    <div className={"text-white font-bold basis-1/2 place-content-end flex flex-row"}>
                        <h1 className={"text-white flex items-center"}>YEAR: </h1>
                        <h1 className={"text-white mx-3 flex items-center"} id={"year"} onBlur={leftFocus} contentEditable suppressContentEditableWarning={true}>{project.year}</h1>
                        <h1 className={"text-white flex items-center"}>| TERM: </h1>
                        <h1 className={"text-white ml-3 mr-20 flex items-center w-3"} id={"term"} contentEditable suppressContentEditableWarning={true} onBlur={leftFocus}>{term}</h1>
                    </div>
                </div>
                <div className={"flex flex-row"}>
                    <div className={"basis-1/2 flex flex-col ml-9"}>
                        <IqpTeamComp title={"Team"} team={project.iqp_team?.team}></IqpTeamComp>
                        <IqpTeamComp title={"Sponsors"} team={project.iqp_team?.sponsors}></IqpTeamComp>
                        <IqpTeamComp title={"Advisors"} team={project.iqp_team?.advisors}></IqpTeamComp>
                    </div>
                    <div className={"basis-1/2 "}>
                        <p className={"text-white my-10"}  id={"description"} onBlur={leftFocus} contentEditable suppressContentEditableWarning={true}>{project.description}</p>
                        <div className={"flex flex-row"}>
                            {dataElements.map((element,index)=> {
                                return(<div key={"dataButton" + index}>
                                    {element}
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div>
                    <button className={"text-white w-full border-white border-2 text-4xl my-10"} onClick={commit}>commit</button>
                </div>
            </div>

        );
    }
    return (<div>
        no project
    </div>)

    function AddDataUrl() {
        const closeModal = () => setOpen(false);
        const openModal = () => setOpen(true);
        return (
            <div>
                <button className={""} onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                    </svg>
                </button>
                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className={"text-white bg-gray-600 flex flex-row w-56 h-56 relative"}>
                        <div className={"basis-10/12"}>
                            pop up element
                        </div>
                        <div className={"basis-1/12"}>
                            <button className={"justify-self-end top-0 absolute"} onClick={closeModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>
        )
    }
}

async function getProject(id:string):Promise<ProjectRequestResponse> {
    let domain = (new URL(window.location.href));
    let projectsResponse = await fetch(domain.origin+"/api/projects/?id="+id,{
        method: "GET"
    });
    return await projectsResponse.json();
}

