import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Producto.css'
import Teclado from './../../../../assets/img/Teclado.jpg'
import Sdd from './../../../../assets/img/Sdd.jpg'
import Memoria from './../../../../assets/img/Memoria.jpg'
import Auriculares from './../../../../assets/img/Auriculares.jpg'
import Fuente from './../../../../assets/img/Fuente.jpg'
import Mueble from './../../../../assets/img/Mueble.jpg'
import Gabinete from './../../../../assets/img/Gabinete.jpg'
import Grafica from './../../../../assets/img/Grafica.jpg'
import Refrigadores from './../../../../assets/img/Refrigadores.jpg'
function Productos() {
    return (
        <>
            <Row>
                <Col xs={6} md={6}>
                    {/*poner el link */}
                    <div className='producto'>
                        <div className='imgProducto'>
                            <img src={Teclado} alt="Teclado" />
                        </div>
                        <div className='textoDeComprea'>
                            <h3>Teclados</h3>
                            <p>Compra Ahora</p>
                        </div>
                    </div>
                    <Row >
                        <Col xs={6} md={6} className='ps-0'>
                            {/*poner el link */}
                            <div className='producto_col2'>
                                <div className='imgProducto'>
                                    <img src={Auriculares} alt="Auriculares" />
                                </div>
                                <div className='textoDeComprea'>
                                    <h3>Auriculares</h3>
                                    <p>Compra Ahora</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={6} className='pe-0'>
                            {/*poner el link */}
                            <div className='producto_col2'>
                                <div className='imgProducto'>
                                    <img src={Fuente} alt="Fuente" />
                                </div>
                                <div className='textoDeComprea'>
                                    <h3>Fuente</h3>
                                    <p>Compra Ahora</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/*poner el link */}
                    <div className='producto_col2'>
                        <div className='imgProducto'>
                            <img src={Gabinete} alt="Gabinete" />
                        </div>
                        <div className='textoDeComprea'>
                            <h3>Gabinete Gamer</h3>
                            <p>Compra Ahora</p>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={6}>
                    <Row >
                        <Col xs={6} md={6} className='ps-0'>
                            {/*poner el link */}
                            <div className='producto_col2'>
                                <div className='imgProducto'>
                                    <img src={Sdd} alt="Sdd" />
                                </div>
                                <div className='textoDeComprea'>
                                    <h3>Almacenamiento</h3>
                                    <p>Compra Ahora</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={6} className='pe-0'>
                            {/*poner el link */}
                            <div className='producto_col2'>
                                <div className='imgProducto'>
                                    <img src={Memoria} alt="Memoria" />
                                </div>
                                <div className='textoDeComprea'>
                                    <h3>Memoria</h3>
                                    <p>Compra Ahora</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/*poner el link */}
                    <div className='producto'>
                        <div className='imgProducto'>
                            <img src={Mueble} alt="Mueble" />
                        </div>
                        <div className='textoDeComprea'>
                            <h3>ESCRITORIO GAMER</h3>
                            <p>Compra Ahora</p>
                        </div>
                    </div>
                    <Row >
                        <Col xs={6} md={6} className='ps-0'>
                            {/*poner el link */}
                            <div className='producto_col2'>
                                <div className='imgProducto'>
                                    <img src={Grafica} alt="Grafica" />
                                </div>
                                <div className='textoDeComprea'>
                                    <h3>TARJETA GRAFICA</h3>
                                    <p>Compra Ahora</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={6} md={6} className='pe-0'>
                            {/*poner el link */}
                            <div className='producto_col2'>
                                <div className='imgProducto'>
                                    <img src={Refrigadores} alt="Refrigadores" />
                                </div>
                                <div className='textoDeComprea'>
                                    <h3>REFRIGERADORES</h3>
                                    <p>Compra Ahora</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Productos;