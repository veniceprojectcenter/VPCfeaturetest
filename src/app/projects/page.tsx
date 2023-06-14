import {Navlist} from "@/app/components/nav/Navlist";

export default function Page() {

    let iMax = 10;
    let randGen:number[] = [];

    for(let i = 0;i < iMax;i++) {
        let die1: number = Math.random();
        let die: number = Math.floor(die1 * 6) + 1;
        randGen.push(die);
    }

    return(
        <div className = {"projectPage"}>
            {randGen.map((dieNum) => {
                let randText = "Hello World! " + dieNum;
                return <div key = {dieNum}>{randText}</div>
            })}
            <Navlist/>
        </div>
    );
}