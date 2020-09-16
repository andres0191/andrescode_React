import React from 'react';
import '../../Header/style.scss';
import { AiOutlineHome } from "react-icons/ai";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Link} from "react-router-dom";

export default function NavHolme(){
    return(
        <Router>
            <div className='d-flex align-items-center'>
                <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                    <div>
                        <p className="float-right iconcenter" style={{margin: 10}}>
                            <Link to="/"></Link><AiOutlineHome /></p>
                    </div>
                </IconContext.Provider>
            </div>
        </Router>
    )
}
