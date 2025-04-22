import React from 'react'
import isotipo from "../../assets/img/isotipo_technogamer.svg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebook from '../../assets/img/redes/facebook.svg'
import instagram from '../../assets/img/redes/instagram.svg'
import twitch from '../../assets/img/redes/twitch.svg'
import youtube from '../../assets/img/redes/youtube.svg'
import twitterx from '../../assets/img/redes/twitterx.svg'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <Row className='align-items- center '>
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
                                <a href='#'>
                                    Productos
                                </a>
                                <ul className='sub_enlaces'>
                                    <li>Nuevos Productos</li>
                                    <li>Más Vendidos</li>
                                    <li>Combos</li>
                                    <li>Cerficado</li>
                                </ul>
                            </li>
                            <li>
                                <a href='#'>Soporte</a>
                                <ul className='sub_enlaces'>
                                    <li>Descargas</li>
                                    <li>Garantias</li>
                                    <li>Asistencia al cliente</li>
                                    <li>Envios/Devoluciones</li>
                                </ul>
                            </li>
                            <li><a href='#'>Nosotros</a>
                                <ul className='sub_enlaces'>
                                    <li>Ubicacion</li>
                                    <li>Historia</li>
                                    <li>Contatos</li>
                                </ul>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </footer>
        </>
    )
}

export default Footer
