import React from 'react';
import './style.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Fondo from '../../images/macbook_pro_laptop_purple_light-wallpaper-1920x1080.jpg'

export default function Home(){
    return(
        <div className='space'>
            <Header />
                <div>
                    <div >
                        <img class="d-block mx-auto" src={Fondo} alt="First slide"/>
                            <h1>Andres  Garcia </h1>
                            <p>Soy Fullstack Developer en Holberton Medellín, con un año de    experiencia en desarrollo de software logré dominar la complejidad del lenguaje de programación C.
                                <br/>
                            Desde el perfil de desarrollador de Back-end y con el apoyo del equipo de partners, persistencia, continuidad y perseverancia, aprendí claramente los Fundamentos de la programación y desarrolle proyectos como la creación de la función Printf, un interprete de comandos Simple Shell, un interpretar de comandos  Monty Shell, Web Scraping con Python y un clon de la plataforma AirBnB. 
                            </p>
                            {/* <p><a className="btn btn-primary btn-lg" href="https://drive.google.com/file/d/1j7z_Tw5_Wy0Sv0FD8OXqiSuDqWt5L6PE/view?usp=sharing" rel="noopener noreferrer" target="_blank" role="button" padding='10px'>CV</a></p> */}
                    </div>
                </div>
            <Footer />
        </div>
    )
}