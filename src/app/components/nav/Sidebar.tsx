"use client"
import React from "react";

const CloseOnClick = () => {
    const sideBar = document.querySelector(".sidebar");
    sideBar.classList.toggle("opensidebar");
    console.log(sideBar);
}

export function Sidebar() {

    return (
        <nav className={"sidebar"}>
            <button onClick={CloseOnClick} className={"closeMenu"}>Close</button>
            <div className={"sidebar-content"}>
                <ul className={"lists"}>
                    <li className={"list"}>
                        <a href={"#"} className={"nav-link"}>
                            <span className={"link"}>Home</span>
                        </a>
                    </li>
                    <li className={"list"}>
                        <a href={"#"} className={"nav-link"}>
                            <span className={"link"}>Applications & Tools</span>
                        </a>
                    </li>
                    <li className={"list"}>
                        <a href={"#"} className={"nav-link"}>
                            <span className={"link"}>Impacts</span>
                        </a>
                    </li>
                    <li className={"list"}>
                        <a href={"#"} className={"nav-link"}>
                            <span className={"link"}>Open Data</span>
                        </a>
                    </li>
                    <li className={"list"}>
                        <a href={"#"} className={"nav-link"}>
                            <span className={"link"}>Publications</span>
                        </a>
                    </li>
                    <li className={"list"}>
                        <a href={"#"} className={"nav-link"}>
                            <span className={"link"}>Student Projects</span>
                        </a>
                    </li>
                </ul>
                <div className={"bottom-content"}>
                </div>
            </div>
        </nav>
    );
}
