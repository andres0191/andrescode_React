import React from 'react';
import '../../Header/style.scss';
import { GiStoneTower } from "react-icons/gi";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Link} from "react-router-dom";

export default function Torre(){
    return(
        <div className='d-flex align-items-center' >
            <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                <div >
                    <p className="float-right iconcenter"><a href="https://bio.torre.co/andresfelipegarciarendon" style={{margin: 10}} target='_blank' ><GiStoneTower /></a></p>
                </div>
            </IconContext.Provider>
        </div>
    )
}