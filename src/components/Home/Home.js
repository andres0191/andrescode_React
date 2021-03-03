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
                                <p >Web Developer graduated from Holberton School. With a year of experience in software development working in  projects with programming languages such as C, Python, JavaScript with React Native working in multidisciplinary teams.
                                <br/><br/>
                               Developed technical projects such as the creation of the Printf function, a simple Shell command interpreter, Web Scraping with Python and a clone of the platform Airbnb with a Holberton recognition as one of the best projects made in Medellin's cohort. His last project included Frontend responsibilities for Web components with React and mobile application development with React Native, Redux, Firebase and NodeJS.
                                </p><br/>
                                <div className='downloadcv' >
                                    <IconContext.Provider value={{ color:"#bcbcbc", className: "global-class-name",  size:'1.5em'}} >
                                        <div className=' d-flex justify-content-center mt-3' >
                                            <p className="float-right">Download CV<a href="https://drive.google.com/file/d/14S_xS5Fy1MZDoSx37CgRMrXIwdFZlz3P/view?usp=sharing" style={{margin: 10}} target="_blank"><GrDocumentPdf /></a></p>
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
