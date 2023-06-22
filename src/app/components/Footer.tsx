
import Link from "next/link";
import React from "react";


export function Footer() {

    return (
        <div className={"footer"}>
            <div className = {"addressSection"}>
                <h1 className = {"sectionTitle"}>Where we are</h1>
                <p className = {"address"}>
                    <Link href={"https://www.google.com/maps/place/H3+(Ex+Herion)+%E2%80%93+Ex+Chiesa+Santi+Cosma+e+Damiano/@45.4257633,12.320547,17z/data=!3m1!4b1!4m6!3m5!1s0x477eb03320023f75:0x6fa0b96420b7a8fc!8m2!3d45.4257633!4d12.3231219!16s%2Fg%2F11c52pv__5?entry=ttu"} target={"_blank"}>
                        H3 (Ex-Herion)
                        Campo SS. Cosma e Damiano, 624-625
                        Giudecca
                        30133 – Venice - Italy
                    </Link></p>
            </div>
            <div className = {"studentSection"}>
                <h1 className = {"sectionTitle"}>Students</h1>
                <p className = {"program"}><Link href={"/"} >Program</Link></p>
                <p className = {"team"}><Link href={"/"} >Team</Link></p>
            </div>
            <div className = {"wpiSection"}>
                <h1 className = {"sectionTitle"}>WPI</h1>
                <p className = {"wpi"}><Link href={"https://www.wpi.edu/"} target={"_blank"}>WPI</Link></p>
                <p className = {"wpiGlobal"}><Link href={"https://www.wpi.edu/project-based-learning/project-based-education/global-project-program"} target={"_blank"}>WPI Global</Link></p>
            </div>
        </div>
    )
}