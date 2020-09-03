import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Fondo from '../../images/Apple-lapton-nigthAndresCode2.png';
import Me from '../../images/foto.png'

export default function Home(){
    return(
        <div>
            <Header style={{position:'fixed'}}/>
                <div>
                    <div >
                        <img class="fondo" src={Fondo} alt="First slide"/>
                        <div style={{textAlign:'justify', padding:'15px', paddingBottom: '5rem' }}>
                            <img class="me" src={Me} alt="First slide"/>
                            <h1>Andres  Garcia </h1>
                            <p >Web Developer egresado de Holberton School. Con un año de experiencia en desarrollo de software logré dominar la complejidad del lenguaje de programación C, Python, Javascript y pude mejorar mis softskills para el trabajo en equipos multidiciplinarios.
                                <br/><br/>
                            Desde el perfil de desarrollador de Back-end y con el apoyo del equipo de partners, persistencia, continuidad y perseverancia, aprendí claramente los Fundamentos de la programación y desarrolle proyectos como la creación de la función Printf, un interprete de comandos Simple Shell, un interpretar de comandos  Monty Shell, Web Scraping con Python y un clon de la plataforma AirBnB. 
                            </p><br/>
                            <p><a className="donwload spacecv" href="https://drive.google.com/file/d/1j7z_Tw5_Wy0Sv0FD8OXqiSuDqWt5L6PE/view?usp=sharing"  >CV</a></p> 
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}