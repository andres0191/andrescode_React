import React from 'react';
import '../../Header/style.scss';
import { ImWhatsapp } from "react-icons/im";
import { IconContext } from "react-icons";

export default function Whatsapp(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right"><a href="https://wa.me/573054214488" style={{margin: 10}}><ImWhatsapp /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}
