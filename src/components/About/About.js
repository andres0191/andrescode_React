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
                    <div className='firsttext'>
                    <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem' }}>
                        <img class="imgAlbertE" src={AlbertE} alt="First slide"/>
                            <div className='text'>
                                <h1>Albert Einstein </h1>
                                <p>"Mira profundamente en la naturaleza y entonces comprenderas todo mejor"</p> 
                                <p>"Si no lo puedes explicar de forma simple, no lo entiendes suficientemente bien".</p><br />
                            </div>
                    </div>
                    <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem' }}>
                        <img class="imgAndresCammera" src={AndresCammera} alt="First slide"/>
                            <div className='textTecnologies'>
                                <h2>Hobbies</h2>
                                <p>Me considero un afisionado del arte. Disftuto de escuchar cualquier genero musical a ecepcion de la champeta y uno que otro subgenero del reggaeton. Amante del Techno House, Classic Music (toco violin cuando necesito relajarme), Reggae y Glam Rock. Tomo fotografias de paisajes inimaginables y bellamente tranquilos. como mascotas tengo 2 kilos de lombrices, una gata angora, y al rededor de 10 peces de diferentes especies.</p><br />
                                <div>
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
                                </div><br /><br />
                            </div>
                                <p>En mi casa soy la tia loca que cultiva plantas aromaticas, plantas medicinales, habla con la naturaleza y tiene compostaje con lombrices en una matera en el balcon.<br/>Como el juego "Quien fue el culpable?" soy "El Cheff Lechuga". Experimento con especies y sabores cada que preparo desde un arroz con huevo hasta unas pastas a la carbonara o un salmon salteado en finas hierbas al vino.</p><br />
                    </div>
                    <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem' }}>
                        <img class="imgAndresCammera" src={Tecnologias} alt="First slide"/>
                            <div className='textTecnologies'>
                        <h2>Tecnologias</h2>
                        <p>Durante los 9 meses que estuve en Holberton, adquiri conocimientos en Tecnologias como Python, C, JavaScript y MySQL. Tambien poseo conocimiento en Wordpress y en el ultimo proyecto que trabaje aprendi sobre React, React Native, Redux, NodeJS y Firebase.<br />Este sitio web fue desarrollado en React.</p><br />
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

