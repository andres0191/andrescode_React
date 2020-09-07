import React from 'react';
import '../../Header/style.scss';
import { FiMail } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Email(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right iconcenter"><a href="mailto:felipe.garcia0191@gmail.com" style={{margin: 10}}><FiMail /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}