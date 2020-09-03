import React from 'react';
import '../../Header/style.scss';
import { TiNews } from "react-icons/ti";
import { IconContext } from "react-icons";

export default function NavPublications(){
    return(
        <div className='d-flex align-items-center'>
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                <div>
                    <p className="float-right iconcenter"><a href="/Publications" style={{margin: 10}}><TiNews /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}
