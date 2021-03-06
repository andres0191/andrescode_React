import React from 'react';
import '../../Header/style.scss';
import { FaMediumM } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Link} from "react-router-dom";

export default function Medium(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right iconcenter"><a href="https://medium.com/@felipe.garcia0191" style={{margin: 10}} target='_blank' ><FaMediumM /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}