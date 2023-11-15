import './team.css';
import {TeamMember} from "@/app/components/random/TeamMember";
import fabio from "@/app/team/fabio.jpg"
import nick from "@/app/team/Nick.jpg"
import alireza from "@/app/team/alireza.jpg"



export default function Page() {

    let teamMembers = [
        "Prof. Fabio Carrera",
        "Nick Leslie",
        "Alireza Dehghan"
    ];
    let teamMemberPics = [
        fabio,
        nick,
        alireza
    ];
    let teamMemberRoles = ["Founder & Director",
        "2023 rewrite Head",
        "Developer"
    ];

    return (
        <div className = {"teamPage flex flex-col xl:flex-row"}>
            <div className = {"contact"}>
                <h1>TEAM</h1>
                <h2>Contacts</h2>
                <p>carrera@wpi.edu</p>
                <a href="https://app.daaab.it/location-h3">
                    <p>
                        H3 (Ex-Herion)
                        Campo SS. Cosma e Damiano, 624
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


