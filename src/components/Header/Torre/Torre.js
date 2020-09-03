import React from 'react';
import '../../Header/style.scss';
import { GiStoneTower } from "react-icons/gi";
import { IconContext } from "react-icons";

export default function Torre(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right"><a href="https://bio.torre.co/andresfelipegarciarendon" style={{margin: 10}}><GiStoneTower /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}