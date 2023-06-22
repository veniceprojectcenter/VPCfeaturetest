import {Dataurl} from "@prisma/client";

export interface DataUrlArray {
    data: Dataurl[]
}

export function isDataUrlArray(item: any): item is DataUrlArray {
    return(item as DataUrlArray).data != undefined;
}