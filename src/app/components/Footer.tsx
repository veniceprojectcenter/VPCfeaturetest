
import Link from "next/link";
import React from "react";


export function Footer() {

    return (
        <div className={"footer"}>
            <div className = {"addressSection"}>
                <h1 className = {"sectionTitle"}>Where we are</h1>
                <p className = {"address"}>H3 (Ex-Herion)
                    Campo SS. Cosma e Damiano, 624-625
                    Giudecca
                    30133 – Venice - Italy</p>
            </div>
            <div className = {"studentSection"}>
                <h1 className = {"sectionTitle"}>Students</h1>
                <p className = {"program"}>Program</p>
                <p className = {"team"}>Team</p>
            </div>
            <div className = {"wpiSection"}>
                <h1 className = {"sectionTitle"}>WPI</h1>
                <p className = {"wpi"}><Link href={"https://www.wpi.edu/"} target={"_blank"}>WPI</Link></p>
                <p className = {"wpiGlobal"}>WPI Global</p>
            </div>
        </div>
    )
}