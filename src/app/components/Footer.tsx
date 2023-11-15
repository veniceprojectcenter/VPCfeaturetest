
import Link from "next/link";
import React from "react";


export function Footer() {

    return (
        <div className={"grid mx-5 grid-cols-2 md:grid-cols-4 xl:justify-items-center mb-20"}>
            <div className = {"text-white flex-col my-5"}>
                <h1 className={"font-bold mb-5 text-xl"}>Where we are</h1>
                <p className = {""}>
                    <Link href={"https://www.google.com/maps/place/H3+(Ex+Herion)+%E2%80%93+Ex+Chiesa+Santi+Cosma+e+Damiano/@45.4257633,12.320547,17z/data=!3m1!4b1!4m6!3m5!1s0x477eb03320023f75:0x6fa0b96420b7a8fc!8m2!3d45.4257633!4d12.3231219!16s%2Fg%2F11c52pv__5?entry=ttu"} target={"_blank"}>
                        H3 (Ex-Herion)<br className={""}/>
                        Campo SS. Cosma e Damiano, 624<br className={""}/>
                        Giudecca
                        30133 – Venice - Italy
                    </Link>
                </p>
                <p className = {"my-2"}>
                    <Link href={"https://www.google.com/maps/@45.4258642,12.3230009,3a,75y,162.93h,107.92t/data=!3m6!1e1!3m4!1sOG5MXfW9hy4CXFRg67kgYA!2e0!7i13312!8i6656?entry=ttu"} target={"_blank"}>
                        Street View
                    </Link>
                </p>
            </div>
            <div className={"text-white flex-col flex my-5"}>
                <h1 className={"font-bold mb-5 text-xl"}>What We Do</h1>
                <Link href={"/opendata"}>Open Data</Link>
                <Link href={"/projects"}>Student Projects</Link>
                <Link href={"/publications"}>Publications</Link>
                <Link href={"/applications"}>Applications & tools</Link>
            </div>
            <div className = {"text-white my-5"}>
                <h1 className = {"font-bold mb-5 text-xl"}>Students</h1>
                <p className = {""}><Link href={"/program"} >Program</Link></p>
                <p className = {""}><Link href={"/team"} >Team</Link></p>
            </div>
            <div className = {"text-white my-5"}>
                <h1 className = {"font-bold mb-5 text-xl"}>WPI</h1>
                <p className = {"wpi"}><Link href={"https://www.wpi.edu/"} target={"_blank"}>WPI</Link></p>
                <p className = {"wpiGlobal"}><Link href={"https://www.wpi.edu/project-based-learning/project-based-education/global-project-program"} target={"_blank"}>WPI Global</Link></p>
            </div>
        </div>
    )
}
