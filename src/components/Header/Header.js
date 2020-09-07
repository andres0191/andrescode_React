import React from 'react';
import './style.scss';
import Dev from './Dev/Dev';
import Github from './Github/Github';
import Linkedin from './Linkedin/Linkedin';
import Medium from './Medium/Medium';
import Torre from './Torre/Torre';
import Twitter from './Twitter/Twitter';


export default function Header(){
    return(
        <div>
            <div className='header dv '>
                <a href='https://github.com/andres0191'><li className='space'><Github /></li></a>
                <a href="https://dev.to/andres0191"><li className='space'><Dev /></li></a>
                <a href="https://linkedin.com/in/anfegar/"><li className='space'><Linkedin /></li></a>
                <a href="https://medium.com/@felipe.garcia0191"><li className='space'><Medium /></li></a>
                <a href="https://bio.torre.co/andresfelipegarciarendon"><li className='space'><Torre /></li></a>
                <a href="https://twitter.com/andres0191"><li className='space'><Twitter /></li></a>
            </div>
        </div>
    )
}
