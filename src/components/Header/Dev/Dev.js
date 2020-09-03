import React from 'react';
import '../../Header/style.scss';
import { SiDevDotTo } from "react-icons/si";
import { IconContext } from "react-icons";

export default function Dev(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right"><a href="https://dev.to/andres0191" style={{margin: 10}}><SiDevDotTo /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}



