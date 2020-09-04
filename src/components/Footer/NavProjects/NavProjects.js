import React from 'react';
import '../../Header/style.scss';
import { FaRegFileCode } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Linkedin(){
    return(
        <div className='d-flex align-items-center'>
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                <div>
                    <p className="float-right iconcenter"><a href="/Projects" style={{margin: 10}}><FaRegFileCode /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}