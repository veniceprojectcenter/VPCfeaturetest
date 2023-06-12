import {element} from "prop-types";

export function reduceTextSection(textSection:string, limit:number):string[] {
    let wordlist = textSection.split(" ");
    let reducedList:string[] = [];
    for (let i = 0; i < wordlist.length; i++) {
        if(i<limit) {
            reducedList.push(wordlist[i]);
        }
    }
    return reducedList;
}

export function wordListToString(wordList:string[]):string {
    return  wordList.reduce((prevVal:string,currentValue:string) => {
        return prevVal + " " + currentValue;
    })

}