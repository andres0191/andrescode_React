import React from 'react';
import '../../Header/style.scss';
import { SiAboutDotMe } from "react-icons/si";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Link} from "react-router-dom";

export default function NavAbout(){
    return(
        <Router>
            <div className='d-flex align-items-center'>
                <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name", size:'1em', size:'1.5em'}} >
                    <div>
                        <p className="float-right iconcenter" style={{margin: 10}}>
                            <Link to="/About"></Link><SiAboutDotMe /></p>
                    </div>
                </IconContext.Provider>
            </div>
        </Router>
    )
}

