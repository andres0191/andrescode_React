import React from 'react';
import './style.scss';
import NavAbout from './NavAbout/NavAbout';
import NavHome from './NavHome/NavHome';
import NavProjects from './NavProjects/NavProjects';
import NavPublications from './NavPublications/NavPublications';

export default function Footer(){
    return(
        <div>
            <div className='foot dvfooter'>
                <li className='space'><NavHome /></li>
                <li className='space'><NavAbout /></li>
                <li className='space'><NavProjects /></li>
                <li className='space'><NavPublications /></li>
            </div>
        </div>
    )
}