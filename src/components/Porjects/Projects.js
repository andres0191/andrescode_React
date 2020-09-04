import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaHandPointRight } from "react-icons/fa";
import { BsMusicPlayer } from 'react-icons/bs';
import { IconContext } from "react-icons";
import holamundo from '../../images/holamundo.png';
import DenzelW from '../../images/Denzel_Washington.jpg';
import Blogs from '../../images/startup_office_desk-wallpaper-1920x1080.jpg';
import SimpleShell from '../../images/simpleShell.jpeg';

export default function Projects(){
    return(
        <div >
            <Header />
                    <div>
                    <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem' }}>
                        <img class="imgAlbertE  firsttext" src={DenzelW} alt="First slide"/>
                            <div className='text'>
                                <h1>Denzel Washington</h1>
                                <p>"Los sueños sin metas, son sólo sueños; y te llevarán a desilusiones. Las metas, son el camino hacia tus sueños; pero no se pueden lograr sin disciplina y consistencia"</p>
                            </div>
                    </div>
                    <div style={{textAlign:'justify', padding:'20px', paddingBottom: '5rem' }} className='textHobbies'>
                        <img class="imgAndresCammera" src={holamundo} alt="First slide"/>
                            <div className='textHobbies'>
                                <h2>Print F</h2>
                                <p>Creacion de la funcion print f en lenguaje de programacion C. Junto a Crhistian Suarez, utilizamos y creamos nuestras propias funciones como write, malloc, free, va_start, va_end, va_copy y va-_arg durante paroximadamente 7 dias.</p><br />
                                <div>
                                    <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="playlist"><a href="https://github.com/Thorlak2202/printf" style={{margin: 10}}><FaHandPointRight />    Github Repository</a></p>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                </div><br /><br />
                            </div>
                    </div>
                    <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem' }}>
                        <img class="imgAndresCammera" src={SimpleShell} alt="First slide"/>
                            <div className='textTecnologies'>
                        <h2>Simple Shell</h2>
                        <p>Junto a Giovani Perez, tuvimos al rededor de dos semanas para crear una simple shell que permitirea la interpretacion de comandos y ejecutara diveresas funciones dependiendo de la funcion que se ingresara.</p><br />
                        </div>
                    </div>
                    <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem' }}>
                        <img class="imgBlog" src={Blogs} alt="First slide"/>
                            <div className='textPublications'>
                                <h2>Publicaciones</h2>
                                <p>Con el fin de aportar a la comunidad, he realizado algunas publicaciones en Medium y Linkedin.<br />Este sitio web fue desarrollado en React.</p><br />
                                <h2>Te recomiendo la siguiente:</h2>
                                    <b>"Artificial Intelligence, Machine Learning, and Deep Learning.</b>
                                <p>Artificial Inteligenics is the ability of a computer to learn by its own means to solve a specific problem. For example, whenever you pick up the phone at 7 in the morning, you open the FM radio application. Imagine that the cell phone was able to turn on the radio by itself every day at the same time without the need for you to do it?"</p>
                            </div>
                            <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://medium.com/@felipe.garcia0191" style={{margin: 10}}><FaHandPointRight />    Ver Mis Publicaciones</a></p>
                                </div>
                            </IconContext.Provider>
                            </div> 
                    </div>
                    </div>
                <hr/>
            <Footer />
        </div>
    )
}