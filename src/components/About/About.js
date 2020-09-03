import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { GiNewspaper } from "react-icons/gi";
import { IconContext } from "react-icons";

export default function About(){
    return(
        <div >
            <Header />
                <div >
                    <div className='firsttext'>
                        <h2>Hobbies</h2>
                        <p>"Mira profundamente en la naturaleza y entonces comprenderas todo mejor." Albert Einistein" <br /> 
                        <p>"Si no lo puedes explicar de forma simple, no lo entiendes suficientemente bien". Albert Einstein</p><br />
                        <p>Me considero </p>
                        Soy una persona amante de la naturaleza, la fotografia y la buena comida. Pienso que cafe sin codigo es como mazamorra sin bocadillo.<br />
                        </p>
                    </div>
                    <div className='text' >
                        <h2>Tecnologias</h2>
                        <p>Durante los 9 meses que estuve en Holberton, adquiri conocimientos en Tecnologias como Python, C, JavaScript y MySQL. Tambien poseo conocimiento en Wordpress y en el ultimo proyecto que trabaje aprendi sobre React, React Native, Redux, NodeJS y Firebase</p><br />
                    </div>
                    <div className='text' >
                        <h2>Publicaciones</h2>
                        <p>Con el fin de aportar a la comunidad, he realizado algunas publicaciones en Medium y Linkedin</p><br />
                        <p>
                            <h2>Te recomiendo la siguiente:</h2>
                            <b></b>"What is artificial intelligence?
                        Artificial Inteligenics is the ability of a computer to learn by its own means to solve a specific problem. For example, whenever you pick up the phone at 7 in the morning, you open the FM radio application. Imagine that the cell phone was able to turn on the radio by itself every day at the same time without the need for you to do it?"
                        </p>
                        <div className='downloadcv' >
                                    <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                        <div >
                                            <p className="float-right"> <a href="https://medium.com/@felipe.garcia0191" style={{margin: 10}}><GiNewspaper />Ver Mis Publicaciones</a></p>
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

