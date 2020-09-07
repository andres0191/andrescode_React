import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Fondo from '../../images/Apple-lapton-nigthAndresCode2.png';
import Me from '../../images/foto.png'
import { GrDocumentPdf } from "react-icons/gr";
import { IconContext } from "react-icons";

export default function Home(){
    return(
        <div>
            <Header style={{position:'fixed'}}/>
                <div>
                    <div >
                        <img class="fondo" src={Fondo} alt="First slide"/>
                        <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem', margin: '7%' }}>
                        <img class="me" src={Me} alt="First slide"/>
                            <div className='text'>
                                <h1>Andres  Garcia </h1>
                                <p >Web Developer graduated from Holberton School. With a year of experience in software development developing projects in programming languages ​​such as C, Python, Javascript and I was able to improve my softskills to work in multidisciplinary teams.
                                <br/><br/>
                                From the back-end developer profile and with the support of the partner team, persistence, continuity and perseverance, I clearly learned the Fundamentals of programming and developed projects such as the creation of the Printf function, a simple Shell command interpreter, a Monty Shell interpretation command, Web Scraping with Python and a clone of the AirBnB platform. In my last project I learned the development of mobile applications with React Native, Redux, Firebase and NodeJs.
                                </p><br/>
                                <div className='downloadcv' >
                                    <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                                        <div className=' d-flex justify-content-center mt-3' >
                                            <p className="float-right">Download CV<a href="https://drive.google.com/file/d/1j7z_Tw5_Wy0Sv0FD8OXqiSuDqWt5L6PE/view?usp=sharing" style={{margin: 10}}><GrDocumentPdf /></a></p>
                                        </div>
                                    </IconContext.Provider>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}