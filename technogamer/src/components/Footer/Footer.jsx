import React from 'react'
import isotipo from "../../assets/img/isotipo_technogamer.svg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebook from '../../assets/img/redes/facebook.svg'
import instagram from '../../assets/img/redes/instagram.svg'
import twitch from '../../assets/img/redes/twitch.svg'
import youtube from '../../assets/img/redes/youtube.svg'
import twitterx from '../../assets/img/redes/twitterx.svg'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <Row className='align-items-center '>
                    <Col xs={12} md={4} >
                        <div className='logo'>
                            <img src={isotipo} alt="isotipo" />
                            <p>Technogamer</p>
                        </div>
                        <div className='redes'>
                            <a href="#"><img src={facebook} alt="facebook" /></a>
                            <a href="#"><img src={instagram} alt="instagram" /></a>
                            <a href="#"><img src={twitch} alt="twitch" /></a>
                            <a href="#"><img src={twitterx} alt="twitterx" /></a>
                            <a href="#"><img src={youtube} alt="youtube" /></a>
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <ul className='enlaces'>
                            <li>
                                <Nav.Link className="enlace" href="/productos">Productos</Nav.Link>
                                <ul className='sub_enlaces'>
                                    <li>
                                        <Link to="/productos" >Nuevos Productos</Link>
                                    </li>
                                    <li>
                                        <Link to="/productos/Teclado" >Teclados</Link>
                                    </li>
                                    <li>
                                        <Link to="/productos/Fuentes" >Fuentes</Link>
                                    </li>
                                    <li>
                                        <Link to="/productos/Auriculares" >Auriculares</Link>
                                    </li>
                                    <li>
                                        <Link to="/productos/Almacenamiento" >Almacenamiento</Link>
                                    </li>
                                    <li>
                                        <Link to="productos/Gabinetes" >Gabinetes</Link>
                                    </li>
                                    <li>
                                        <Link to="/productos/Memorias" >Memorias</Link>
                                    </li>
                                    <li>
                                        <Link to="productos/Sillas" >Sillas</Link>
                                    </li>
                                    <li>
                                        <Link to="/productos/Grafica" >Graficas</Link>
                                    </li>
                                    <li>
                                        <Link to="/productos/Refrigeración" >Refrigeración</Link>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <Nav.Link className="enlace" href="/Error">Soporte</Nav.Link>
                                <ul className='sub_enlaces'>
                                    <li>Descargas</li>
                                    <li>Garantias</li>
                                    <li>Asistencia al cliente</li>
                                    <li>Envios/Devoluciones</li>
                                </ul>
                            </li>
                            <li>
                                <Nav.Link className="enlace" href="/about">Soporte</Nav.Link>
                                <ul className='sub_enlaces'>
                                    <li>Ubicacion</li>
                                    <li>Historia</li>
                                    <li>Contatos</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row >
            </footer >
        </>
    )
}

export default Footer
