import React from 'react';
import './style.scss';
import Dev from './Dev/Dev';
import Github from './Github/Github';
import Linkedin from './Linkedin/Linkedin';
import Medium from './Medium/Medium';
import Torre from './Torre/Torre';
import Twitter from './Twitter/Twitter';
import Email from './Mail/Email';
import { BrowserRouter as Router, Link} from "react-router-dom";


export default function Header(){
    return(
        <Router>
            <div>
                <div className='header dv '>
                    <Link to='https://github.com/andres0191'></Link><li className='space'><Github /></li>
                    <Link to="https://dev.to/andres0191"></Link>
                    <li className='space'><Dev /></li>
                    <Link to="https://linkedin.com/in/anfegar/"></Link>
                    <li className='space'><Linkedin /></li>
                    <Link to="https://medium.com/@felipe.garcia0191"></Link><li className='space'><Medium /></li>
                    <Link to="https://bio.torre.co/andresfelipegarciarendon"></Link><li className='space'><Torre /></li>
                    <Link to="https://twitter.com/andres0191"></Link><li className='space'><Twitter /></li>
                    <Link to='mailto:felipe.garcia0191@gmail.com'></Link><li className='space'><Email /></li>
                </div>
            </div>
        </Router>
    )
}
