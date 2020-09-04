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
                                    <p>"No creo que haya alguna emoción más intensa para un inventor que ver alguna de sus creaciones funcionando. Esa emoción hace que uno se olvide de comer, de dormir, de todo"</p> 
                                    <p>"En realidad no me preocupa que quieran robar mis ideas, me preocupa que ellos no las tengan".</p><br />
                        </div>
                        <div class='contenedorPrintf'>
                                <img src={holamundo} />
                                <h2 class='sub-tituloPrintf'>
                                    Print F
                                </h2>
                                <p>Como primero proyecto de mediana embergadura, junto a Crhistian Suarez companero de Holberton School, trabajos en equipo para el desarrollo de la creacion de la funcion "PrintF" creando nuestras propias funciones como write, malloc, free, va_start, va_end, va_copy, va_arg. El proyecto fue desarrollado 100% en lenguaje C.</p><br />
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/Thorlak2202/printf" style={{margin: 10}}><FaHandPointRight /> Repositorio Github</a></p>
                                </div>
                            </IconContext.Provider>
                            </div> 
                                
                        </div>
                        <div class='contenedorSimpleShell'>
                                <img src={SimpleShell} />
                                <h2 class='sub-tituloSimpleShell'>
                                    Simple Shell
                                </h2>
                                    <p>El proyecto Simple Shell fue desarrollado con Giovani Perez, companero de HOlberton School. Durante 15 dias estuvimos realizando el desarrollo de un interprete de comandos "Simple Shell" en el cual aparte de hacer nuestras propias funciones, logramos crear el ejecutable y poder abrirlo desde cualquier equipo como cualquier otro bash.</p><br />
                                    <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="float-right"> <a href="https://github.com/Bard-Budist/simple_shell" style={{margin: 10}}><FaHandPointRight /> Repositorio Github</a></p>
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
                                    <p className="float-right"> <a href="https://github.com/andres0191/AirBnB_clone" ><FaHandPointRight /> Repositorio Github</a></p>
                                </div>
                            </IconContext.Provider>
                            </div>   
                        </div><div class='contenedorApadrinapp'>
                                <img src={Apadrinapp} />
                                <h2 class='sub-tituloApadrinapp'>
                                    Apadrinapp
                                </h2>
                                <p>Proyecto presentado a RAPPi como proyecto final para Holberton School. Aplicacion de Crowdlending pensada como solucion a las personas que desean trabajar como shoppers pero carecen de los recursos para dar ese primer paso. La aplicacion fue desarrollada en React Native, NodeJS, Redux y Firebase como base de datos.</p>
                                <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="float-right"> <a href="https://github.com/andres0191/ApadrinappV2" style={{margin: 10}}><FaHandPointRight /> Repositorio Github</a></p>
                                            </div>
                                        </IconContext.Provider>
                                    </div> 
                        </div>
                        <div class='contenedorAirBnB'>
                                <img src={Psicoempatias} />
                                <h2 class='sub-tituloAirBnB'>
                                    Psicoempatias
                                </h2>
                                <p>Write a command interpreter to manage your AirBnB objects. This is the first step towards building your first full web application: the AirBnB clone. This first step is very important because you will use what you build during this project with all other following projects: HTML/CSS templating, database storage, API, front-end integration.</p>
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/andres0191/AirBnB_clone" ><FaHandPointRight /> Repositorio Github</a></p>
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
                                    <p className="float-right"> <a href="https://github.com/andres0191/andrescode_React" style={{margin: '10%', display: 'flex', width: '100%', padding: '20%',}}><FaHandPointRight /> Repositorio Github</a></p>
                                </div>
                            </IconContext.Provider>
                            </div>
                            </div>
                    </div>
            <Footer />
        </div>
    )
}