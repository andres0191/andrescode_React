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
            <div className='header dv'>
                <li className='space'><Github /></li>
                <li className='space'><Dev /></li>
                <li className='space'><Linkedin /></li>
                <li className='space'><Medium /></li>
                <li className='space'><Torre /></li>
                <li className='space'><Twitter /></li>
                <li className='space'><Whatsapp /></li>
            </div>
        </div>
    )
}
