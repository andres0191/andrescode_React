import React from 'react';
import '../../Header/style.scss';
import { FiLinkedin } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Linkedin(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right"><a href="https://linkedin.com/in/anfegar/" style={{margin: 10}}><FiLinkedin /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}