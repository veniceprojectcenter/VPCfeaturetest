import {Dataurl, IqpTeam, Project} from "@prisma/client";
export interface OnUpdateStateCallback {
    (project:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}):void
}


export function UpdateProject(id:string,content:string
    ,editedProject:Project & {iqp_team: IqpTeam | null, dataurls: Dataurl[] | null}
    ,OnUpdatedState: OnUpdateStateCallback ) {
    let idWithoutNum = id.replace(/[0-9]/g, '').replace(/ /g,"").toLowerCase();
    let index = -1;
    console.log(idWithoutNum)
    switch (idWithoutNum) {
        case 'description':
            editedProject.description = content
            break;
        case 'title':
            editedProject.title = content
            break;
        case 'year':
            editedProject.year = parseInt(content);
            break;
        case 'term':
            //TODO add checks to make sure its a valid term
            editedProject.term = content[0];
            break;
        case 'team':
            index = parseInt(id.replace(/\D/g,''));
            if(editedProject.iqp_team?.team[index]!==undefined) {
                editedProject.iqp_team.team[index] = content
            }
            break;
        case 'sponsors':
            index = parseInt(id.replace(/\D/g,''));
            if(editedProject.iqp_team?.sponsors[index]!==undefined) {
                editedProject.iqp_team.sponsors[index] = content
            }
            break;
        case 'advisors':
            index = parseInt(id.replace(/\D/g,''));
            if(editedProject.iqp_team?.advisors[index]!==undefined) {
                editedProject.iqp_team.advisors[index] = content
            }
            break;
    }
    OnUpdatedState(editedProject);
}