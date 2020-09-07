import React from 'react';
import './style.scss';
import NavAbout from './NavAbout/NavAbout';
import NavHome from './NavHome/NavHome';
import NavProjects from './NavProjects/NavProjects';
export default function Footer(){
    return(
        <div>
            <div className='foot dvfooter'>
                <a href='/'>
                    <li className='space'><NavHome /></li>
                </a>
                <a href='/About'>
                  <li className='space'><NavAbout /></li>
                </a>
                <a href='/Projects'>
                    <li className='space'><NavProjects /></li>
                </a>                
            </div>
        </div>
    )
}