import './team.css';
import {TeamMember} from "@/app/components/random/TeamMember";
import fabio from "@/app/team/fabio.jpg"
import emailPNG from "@/app/resources/email.png"
import phonePNG from "@/app/resources/phone.png"
import nick from "@/app/team/Nick.jpg"
import alireza from "@/app/team/alireza.jpg"
import Image from "next/image";
import CPV from "@/app/resources/CPVLOGO.png"
import WPI from "@/app/resources/WPILOGO.png"
import SPT from "@/app/resources/SerenDPTLOGO.png"


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
        "2023 reWrite Head",
        "Developer"
    ];

    return (
        <div className={"w-full flex flex-col text-2xl font-bold text-white mt-10"}>
            <div className={"flex flex-row"}>
                <h1 className={"mb-36 text-4xl"}>Who We Are</h1>
            </div>
            <div className={"flex flex-row mb-10 mt-10"}>
                <h2 className={"flex flex-auto mr-60"}>Team</h2>
                <div className={"flex flex-auto"}>
                    <div className={"grid lg:grid-cols-3 font-light text-xl mt-10 members grid-cols-2"}>
                        {teamMembers.map((teamMember, index) => (
                            <TeamMember sourceImage={teamMemberPics[index]} memberName={teamMember}
                                        memberRole={teamMemberRoles[index]} key={index}></TeamMember>
                        ))}
                    </div>
                </div>
            </div>
            <div className={"flex flex-row mb-10 mt-10"}>
                <h2 className={"flex flex-auto mr-60"}>Contacts</h2>
                <div className={"flex flex-auto"}>
                    <div className={"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"}>
                        <div className={"mr-10 ml-10"}>
                            <Image className={"text-xl font-light max-w-min mb-3 flex"} alt={"Email"} src={emailPNG}></Image>
                            <a className={"text-xl font-medium flex"} href={"mailto:carrera@wpi.edu"}>carrera@wpi.edu</a>
                            <a className={"text-xl font-medium flex"} href={"mailto:veniceprojectcenter@gmail.com"}>veniceprojectcenter@gmail.com</a>
                        </div>
                        <div className={"mr-10 ml-10"}>
                            <Image className={"text-xl font-light max-w-min mb-3 flex"} alt={"Phone"} src={phonePNG}></Image>
                            <a className={"text-xl font-medium flex"} href={"callto:+390415232899"}>+39 041 523 2899</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex flex-row mb-10 mt-10"}>
                <h2 className={"flex flex-auto mr-60"}>Partners</h2>
                <div className={"flex flex-auto"}>
                    <div className={"grid grid-cols-2 lg:grid-cols-3"}>
                        <div className={"place-content-center flex-col flex-1 flex object-cover mr-10 ml-10"}>
                            <a href={"https://wpi.edu"}><Image className={"w-auto text-xl font-light mb-3 flex"} alt={"Worcester Polytechnic Institute"} src={WPI}></Image></a>
                        </div>
                        <div className={"place-content-center flex-col flex-1 flex  object-cover mr-10 ml-10"}>
                            <Image className={"w-auto text-xl font-light  mb-3 flex"} alt={"Centro Progetti Venezia"} src={CPV}></Image>
                         </div>
                        <div className={"place-content-center flex-col flex-1 flex object-cover mr-10 ml-10"}>
                            <a href={"https://serendpt.net"}><Image className={"w-auto text-xl font-light mb-3 flex"}  alt={"SerenDPT"} src={SPT}></Image></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


