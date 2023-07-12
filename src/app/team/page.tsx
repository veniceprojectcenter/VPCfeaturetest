"use client"

import Image from 'next/image'
import {Navlist} from "@/app/components/nav/Navlist";
import VeniceMapThing from "@/app/resources/VeniceMapThing.png";
import fabioPic from "@/app/resources/IMG-1346.png";
import fabio1 from "@/app/resources/Fabio1.jpg";
import fabio2 from "@/app/resources/Fabio2.jpg";
import fabio3 from "@/app/resources/Fabio3.webp";
import fabio4 from "@/app/resources/Fabio4.jpg";
import fabio5 from "@/app/resources/Fabio5.png";


import Link from "next/link";

import React, {useEffect, useState} from 'react';
import './team.css';
import {AutoSlideshow} from "@/app/components/random/AutoSlideshow";
import {TeamMember} from "@/app/components/random/TeamMember";

export default function Page() {

    let teamMembers = ["Prof. Fabio Carrera",
        "Tomaso Minelli",
        "Sarah Puccio",
        "Ane Pina",
        "Nicola Musolino",
        "Andrea Scarpa",
        "Michele Montanari",
        "Giacomo Giugie",
        "Nick Leslie"
    ];
    let teamMemberPics = ["https://www.veniceprojectcenter.org/assets/fabio_carrera-de3b507fdac0b870902c90d97147c38f6b64134425c82ceedd4781606be248fa.jpg",
        "https://www.veniceprojectcenter.org/assets/tomaso_minelli-fbd576f39a5f435d20ba1b99438c34ecc2344ec7d9d5745abfb9e9d4dfd257e4.jpg",
        "https://www.veniceprojectcenter.org/assets/sarah_puccio-8e9f0a117beee1108a8692b612b4095dd19a1984adf576c5df982b7c46ef1d5c.png",
        "https://www.veniceprojectcenter.org/assets/ane_pina-9d62d9dd3489b39c52089040a7a3836bcaf14fcf0446253e90d9fc8ac00ca268.jpg",
        "https://www.veniceprojectcenter.org/assets/nicola_musolino-acaf647092fd0b2b226bcd3a3b1afc2b562c0e2373ecd6c78583a53418379077.jpg",
        "https://www.veniceprojectcenter.org/assets/ascarpa-29c7f775dd0cb6e5a76a01726bb30e64171a2c4618a92107163453f4d0e8345c.jpg",
        "https://www.veniceprojectcenter.org/assets/mmontanari-de6e11902afb1f8320d5b6591aff686ea56487a760f784b0dde83a43417f4212.jpg",
        "https://www.veniceprojectcenter.org/assets/ggiugie-cf2ad76c313682018cbfbaca49ed466783025e3075369f5c326cb7d573ac0650.jpg",
        "/NickPNG.png"
    ];
    let teamMemberRoles = ["Founder & Director",
        "CTO",
        "Administration & Facilities",
        "Director Assistant",
        "Full Stack Developer",
        "Full Stack Developer",
        "Backend Developer",
        "Intern",
        "MVP of current site"
    ];

    return (
        <div className = {"teamPage flex flex-row"}>
            <div className = {"contact"}>
                <h1>TEAM</h1>
                <h2>Contacts</h2>
                <p>carrera@wpi.edu</p>
                <a href="https://app.daaab.it/location-h3">
                    <p>
                        H3 (Ex-Herion)
                        Campo SS. Cosma e Damiano, 624-625
                        Giudecca
                        30133 – Venice - Italy
                    </p>
                </a>
            </div>
            <div className = {"members"}>
                {teamMembers.map((teamMember,index) => (
                    <TeamMember sourceImage={teamMemberPics[index]} memberName={teamMember} memberRole={teamMemberRoles[index]} key = {index}></TeamMember>
                ))}
            </div>
        </div>
    );
}


