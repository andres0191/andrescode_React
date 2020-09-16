import React from 'react';
import '../../Header/style.scss';
import { FiTwitter } from "react-icons/fi";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Link} from "react-router-dom";

export default function Twitter(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right iconcenter"><a href="https://twitter.com/andres0191" style={{margin: 10}} target='_blank' ><FiTwitter /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}