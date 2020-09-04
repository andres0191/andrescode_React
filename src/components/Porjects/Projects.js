import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaHandPointRight } from "react-icons/fa";
import { BsMusicPlayer } from 'react-icons/bs';
import { IconContext } from "react-icons";
import holamundo from '../../images/holamundo.png';
import NikolaTesla from '../../images/nikolaTesla.png';
import Hbnb from '../../images/hbnb.png';
import SimpleShell from '../../images/simpleShell.jpeg';
import Apadrinapp from '../../images/apadrinapp.png';
import Psicoempatias from '../../images/psicoempatias2.png';
import andrescode from '../../images/andrescode.png';

export default function Projects(){
    return(
        <div >
            <Header />
                    <div>
                        <div class='contenedor'>
                                <img src={NikolaTesla} />
                                    <p>"I don't think there is any more intense emotion for an inventor than to see one of his creations working. That emotion makes one forget to eat, sleep, everything"</p> 
                                    <p>"I'm not really worried that they want to steal my ideas, I'm worried that they don't have them".</p><br />
                        </div>
                        <div class='contenedorPrintf'>
                                <img src={holamundo} />
                                <h2 class='sub-tituloPrintf'>
                                    Print F
                                </h2>
                                <p>As a first medium-sized project, together with Crhistian Suarez, a colleague from Holberton School, teamwork for the development of the creation of the "PrintF" function creating our own functions such as write, malloc, free, va_start, va_end, va_copy, va_arg. The project was developed 100% in C language.</p><br />
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/Thorlak2202/printf" style={{margin: 10}}><FaHandPointRight /> Github repository</a></p>
                                </div>
                            </IconContext.Provider>
                            </div> 
                                
                        </div>
                        <div class='contenedorSimpleShell'>
                                <img src={SimpleShell} />
                                <h2 class='sub-tituloSimpleShell'>
                                    Simple Shell
                                </h2>
                                    <p>The Simple Shell project was developed with Giovani Perez, a partner at HOlberton School. For 15 days we were developing a "Simple Shell" command interpreter in which apart from doing our own functions, we were able to create the executable and be able to open it from any computer like any other attempt..</p><br />
                                    <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="float-right"> <a href="https://github.com/Bard-Budist/simple_shell" style={{margin: 10}}><FaHandPointRight /> Github repository</a></p>
                                            </div>
                                        </IconContext.Provider>
                                    </div> 
                        </div>
                        <div class='contenedorAirBnB'>
                                <img src={Hbnb} />
                                <h2 class='sub-tituloAirBnB'>
                                    AirBnB Clone
                                </h2>
                                <p>Write a command interpreter to manage your AirBnB objects. This is the first step towards building your first full web application: the AirBnB clone. This first step is very important because you will use what you build during this project with all other following projects: HTML/CSS templating, database storage, API, front-end integration.</p>
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/andres0191/AirBnB_clone" ><FaHandPointRight /> Github repository</a></p>
                                </div>
                            </IconContext.Provider>
                            </div>   
                        </div><div class='contenedorApadrinapp'>
                                <img src={Apadrinapp} />
                                <h2 class='sub-tituloApadrinapp'>
                                    Apadrinapp
                                </h2>
                                <p>Project presented to RAPPi as a final project for Holberton School. Crowdlending application designed as a solution for people who want to work as shoppers but lack the resources to take that first step. The application was developed in React Native, NodeJS, Redux and Firebase as a database.</p>
                                <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="float-right"> <a href="https://github.com/andres0191/ApadrinappV2" style={{margin: 10}}><FaHandPointRight /> Github repository</a></p>
                                            </div>
                                        </IconContext.Provider>
                                    </div> 
                        </div>
                        <div class='contenedorAirBnB'>
                                <img src={Psicoempatias} />
                                <h2 class='sub-tituloAirBnB'>
                                    Psicoempatias
                                </h2>
                                <p>As a freelance job, I developed together with Tomas Mejia and Pablo Sanchez a platform for mental health care.<br />"Nos caracterizamos por educar a nuestra comunidad en temas relevantes y usamos herramientas digitales para compartir constantemente información valiosa sobre la Salud Mental; además, somos conscientes de que la empatía es la mejor manera de generar un impacto en el otro".</p>
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/andres0191/AirBnB_clone" ><FaHandPointRight /> Psicoempatias.com</a></p>
                                </div>
                            </IconContext.Provider>
                            </div>
                            </div> 
                            <div class='contenedorAcode'>
                                <img src={andrescode} />
                                <h2 class='sub-tituloAcodeB'>
                                    Andres Code
                                </h2>
                                <p>Personal web site created in React</p>
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/andres0191/andrescode_React" style={{margin: '10%', display: 'flex', width: '100%', padding: '20%',}}><FaHandPointRight /> Github repository</a></p>
                                </div>
                            </IconContext.Provider>
                            </div>
                            </div>
                    </div>
            <Footer />
        </div>
    )
}