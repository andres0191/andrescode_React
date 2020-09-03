import React from 'react';
import '../../Header/style.scss';
import { AiOutlineHome } from "react-icons/ai";
import { IconContext } from "react-icons";

export default function NavHolme(){
    return(
        <div className='d-flex align-items-center'>
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                <div>
                    <p className="float-right iconcenter"><a href="/" style={{margin: 10}}><AiOutlineHome /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}
