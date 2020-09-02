import React from 'react';
import './style.scss';
import Dev from './Dev/Dev';
import Github from './Github/Github';
import Linkedin from './Linkedin/Linkedin';
import Medium from './Medium/Medium';
import Torre from './Torre/Torre';
import Twitter from './Twitter/Twitter';
import Whatsapp from './Whatsapp/Whatsapp';


export default function Header(){
    return(
        <div>
            <ul className='header ul '>
                <li><Github /></li>
                <li><Dev /></li>
                <li><Linkedin /></li>
                <li><Medium /></li>
                <li><Torre /></li>
                <li><Twitter /></li>
                <li><Whatsapp /></li>
            </ul>
        </div>
    )
}
