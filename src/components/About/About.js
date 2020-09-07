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
                        {/* <div class='contenedor'>
                                <img src={AlbertE} />
                                    <p>"Look deeply into nature and then you will understand everything better"</p> 
                                    <p>"If you can't explain it simply, you don't understand it well enough".</p><br />
                        </div> */}
                        <div class='contenedorHobbies'>
                                <img src={AndresCammera} style={{borderRadius: '5%'}} />
                                <h2 class='sub-tituloHobbies'>
                                    Hobbies
                                </h2>
                                <p>I consider myself an art lover. I enjoy listening to any musical genre except champeta and the occasional subgenre of reggaeton. Lover of Techno House, Classic Music (I play violin when I need to relax), Reggae and Glam Rock.</p><br />
                                <p>LSome of the channels I listen to the most are:</p><br />

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
                                 Andres is a fan of the arts. He likes the vast majority of musical genres, from salsa, cumbia and porro to glam rock, through Techno House and classical music. He likes to grow medicinal plants on his balcony and although he does not like washing dishes, he enjoys playing in the kitchen preparing dishes from the simplest to the most elaborate.<br/>
                                 Enjoy from eating popcorn on a platform to a good dinner in a luxurious restaurant always in the company of the princess of your heart. 
                                 As relaxation methods, he enjoys playing the violin and watching the fish swim in his tank, trying to keep his mind blank.</p>
                        </div>
                        <div class='contenedorTec'>
                                <img src={Tecnologias} style={{borderRadius: '5%'}} />
                                <h2 class='sub-tituloTec'>
                                Technology
                                </h2>
                                    <p>During the 9 months that I was at Holberton, I acquired knowledge in technologies such as Python, C, JavaScript and MySQL. I also have knowledge of Wordpress and in the last project I worked I learned about React, React Native, Redux, NodeJS and Firebase.<br />This website was developed in React.</p><br />
                                    <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://github.com/andres0191" style={{margin: 10}}><FaHandPointRight /> Github</a></p>
                                </div>
                            </IconContext.Provider>
                            </div> 
                        </div>
                        <div class='contenedorPub'>
                                <img src={Blogs} style={{borderRadius: '5%'}} />
                                <h2 class='sub-tituloTPub'>
                                Publications
                                </h2>
                                <p>In order to contribute to the community, I have made some publications on Medium and Linkedin.</p><br />
                                <h2>TI recommend the following:</h2>
                                    <b>"Artificial Intelligence, Machine Learning, and Deep Learning.</b>
                                <p>Artificial Inteligenics is the ability of a computer to learn by its own means to solve a specific problem. For example, whenever you pick up the phone at 7 in the morning, you open the FM radio application. Imagine that the cell phone was able to turn on the radio by itself every day at the same time without the need for you to do it?"</p>
                                <div className='downloadcv' >
                            <IconContext.Provider value={{ color:"#595959", className: "global-class-name",  size:'1.5em'}} >
                                <div >
                                    <p className="float-right"> <a href="https://medium.com/@felipe.garcia0191" style={{margin: 100, padding: 100}}><FaHandPointRight />    View My Posts</a></p>
                                </div>
                            </IconContext.Provider>
                            </div>   
                        </div>
                    </div>
            <Footer />
        </div>
    )
}

