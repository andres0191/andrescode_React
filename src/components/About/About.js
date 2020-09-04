import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { FaHandPointRight } from "react-icons/fa";
import { BsMusicPlayer } from 'react-icons/bs';
import { IconContext } from "react-icons";
import AndresCammera from '../../images/andrescammera.jpg';
import AlbertE from '../../images/albert-einstein-4.jpg';
import Blogs from '../../images/startup_office_desk-wallpaper-1920x1080.jpg';
import Tecnologias from '../../images/medium4.jpeg';

export default function About(){
    return(
        <div >
            <Header />
                    <div>
                        <div class='contenedor'>
                                <img src={AlbertE} />
                                    <p>"Mira profundamente en la naturaleza y entonces comprenderas todo mejor"</p> 
                                    <p>"Si no lo puedes explicar de forma simple, no lo entiendes suficientemente bien".</p><br />
                        </div>
                        <div class='contenedorHobbies'>
                                <img src={AndresCammera} />
                                <h2 class='sub-tituloHobbies'>
                                    Hobbies
                                </h2>
                                <p>Me considero un afisionado del arte. Disftuto de escuchar cualquier genero musical a ecepcion de la champeta y uno que otro subgenero del reggaeton. Amante del Techno House, Classic Music (toco violin cuando necesito relajarme), Reggae y Glam Rock.</p><br />
                                <p>Les comparto algunos de los canales que mas escucho:</p><br />

                                <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="playlist"><a href="https://www.youtube.com/watch?v=3VnhqGLBwDo" style={{margin: 10}}><BsMusicPlayer />    Techno HOuse</a></p>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="playlist"><a href="https://www.youtube.com/watch?v=2gO1v2GPMFk" style={{margin: 10}}><BsMusicPlayer />    Classic Music</a></p>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                    <div className='downloadcv' >
                                        <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                            <div >
                                                <p className="playlist"><a href="https://www.youtube.com/watch?v=tb0B3auGbtA" style={{margin: 10}}><BsMusicPlayer />    Vintage Radio Rock</a></p>
                                            </div>
                                        </IconContext.Provider>
                                    </div> 
                                 <p>
                                    Andres es un afisionado por las artes. Le gusta la gran mayoria de generos musicales, desde la salsa, cumbia y porro hasta el glam rock, pasando por Techno House y musica clasica. Le gusta cultivar plantas medicionales en su balcon y aunque no le gusta lavar los platos, le disfruta de jugar en la cocina preparando platos desde el mas sencillo hasta los mas elaborados.<br/>
                                    Disfuta desde comer crispetas en un anden hasta una buena cena en un lujoso restaurante siempre en compania de la princesa de su corazon. 
                                    Como metodos de relajacion disfruta tocar el violin y mirar fijalmente el nado de los peces que tiene en su pecera tratando de tener la mente en blanco.</p>
                        </div>
                        <div class='contenedorTec'>
                                <img src={Tecnologias} />
                                <h2 class='sub-tituloTec'>
                                    Tecnologias
                                </h2>
                                    <p>Durante los 9 meses que estuve en Holberton, adquiri conocimientos en Tecnologias como Python, C, JavaScript y MySQL. Tambien poseo conocimiento en Wordpress y en el ultimo proyecto que trabaje aprendi sobre React, React Native, Redux, NodeJS y Firebase.<br />Este sitio web fue desarrollado en React.</p><br />
                                    <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/andres0191" style={{margin: 10}}><FaHandPointRight /> Github</a></p>
                                </div>
                            </IconContext.Provider>
                            </div> 
                        </div>
                        <div class='contenedorPub'>
                                <img src={Blogs} />
                                <h2 class='sub-tituloTPub'>
                                    Publicaciones
                                </h2>
                                <p>Con el fin de aportar a la comunidad, he realizado algunas publicaciones en Medium y Linkedin.</p><br />
                                <h2>Te recomiendo la siguiente:</h2>
                                    <b>"Artificial Intelligence, Machine Learning, and Deep Learning.</b>
                                <p>Artificial Inteligenics is the ability of a computer to learn by its own means to solve a specific problem. For example, whenever you pick up the phone at 7 in the morning, you open the FM radio application. Imagine that the cell phone was able to turn on the radio by itself every day at the same time without the need for you to do it?"</p>
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://medium.com/@felipe.garcia0191" style={{margin: 100, padding: 100}}><FaHandPointRight />    Ver Mis Publicaciones</a></p>
                                </div>
                            </IconContext.Provider>
                            </div>   
                        </div>
                    </div>
            <Footer />
        </div>
    )
}

