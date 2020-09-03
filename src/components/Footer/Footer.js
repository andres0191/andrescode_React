import React from 'react';
import './style.scss';
import NavAbout from './NavAbout/NavAbout';
import Github from './NavHome/Github';
import Linkedin from './NavPRojects/Linkedin';

export default function Footer(){
    return(
        <div>
            <div className='foot dvfooter'>
                <li className='space'><NavAbout /></li>
                <li className='space'><Github /></li>
                <li className='space'><Linkedin /></li>
            </div>
        </div>
    )
}