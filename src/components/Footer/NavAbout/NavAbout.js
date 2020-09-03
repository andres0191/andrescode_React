import React from 'react';
import '../../Header/style.scss';
import { SiAboutDotMe } from "react-icons/si";
import { IconContext } from "react-icons";

export default function NavAbout(){
    return(
        <div className='d-flex align-items-center'>
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                <div>
                    <p className="float-right iconcenter"><a href="/About" style={{margin: 10}}><SiAboutDotMe /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}

