import Popup from "reactjs-popup";
import React, {useState} from "react";

export default function PopupWithClose(props:{open:boolean, setOpenCallback:(value:boolean)=> void,children?:React.ReactNode}) {
    return (
        <div>
            <Popup modal open={props.open} onClose={() => props.setOpenCallback(false)} closeOnEscape closeOnDocumentClick >
                <div className={"text-white bg-gray-600 flex flex-row relative"}>
                    <div className={"basis-10/12"}>
                        {props.children}
                    </div>
                    <div className={"basis-1/12"}>
                        <button onClick={() => props.setOpenCallback(false)} className={"justify-self-end top-0 absolute"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export function PopUpButton(props:{customButton?:React.ReactNode,children?:React.ReactNode,className?:string}) {
    let [open,setOpen] = useState(false);
    let button = plusSign(); // this sets the default button
    function closeCallback() {
        setOpen(false);
    }
    let childrenWithProps = props.children;
    //this allows children to call a
    if(props.children != undefined) {
        if (React.isValidElement(props.children)) {
            React.Children.map(props.children,function (child) {
                if(child.props.closeCallback) {
                    return React.cloneElement(child as JSX.Element, {closeCallback})
                }
                return child
            })
        }
    }
    if(props.customButton != undefined) {
        button = props.customButton as React.JSX.Element;
    }
    return (
        <div>
            <PopupWithClose open={open} setOpenCallback={(value) => setOpen(value)}>{childrenWithProps}</PopupWithClose>
            <button className={props.className} onClick={() => setOpen(true)}>
                {button}
            </button>
        </div>
    )
}

export function plusSign() {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="white" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>)
}