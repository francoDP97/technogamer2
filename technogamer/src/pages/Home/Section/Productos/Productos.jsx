import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Producto from './Producto/Producto'; // Asumiendo que Producto.js está en el mismo nivel
import Teclado from './../../../../assets/img/Teclado.jpg'
import Sdd from './../../../../assets/img/Sdd.jpg'
import Memoria from './../../../../assets/img/Memoria.jpg'
import Auriculares from './../../../../assets/img/Auriculares.jpg'
import Fuente from './../../../../assets/img/Fuente.jpg'
import Mueble from './../../../../assets/img/Mueble.jpg'
import Gabinete from './../../../../assets/img/Gabinete.jpg'
import Grafica from './../../../../assets/img/Grafica.jpg'
import Refrigadores from './../../../../assets/img/Refrigadores.jpg'
import './Productos.css'
// Y el resto de las importaciones...

function Productos() {
    return (
        <Row>
            <Col xs={12} lg={6}>
                <Producto imagen={Teclado} altText="Teclado" title="Teclados" link="/productos/Teclado" />
                <Row>
                    <Col xs={12} lg={6} className='ps-0'>
                        <Producto imagen={Auriculares} altText="Auriculares" title="Auriculares" link="/productos/Auriculares" />
                    </Col>
                    <Col xs={12} lg={6} className='pe-0'>
                        <Producto imagen={Fuente} altText="Fuente" title="Fuente" link="/productos/Fuente" />
                    </Col>
                </Row>
                <Producto imagen={Gabinete} altText="Gabinete" title="Gabinetes Gamer" link="/productos/Gabinetes" />
            </Col>
            <Col xs={12} lg={6}>
                <Row>
                    <Col xs={12} lg={6} className='ps-0'>
                        <Producto imagen={Sdd} altText="Sdd" title="Almacenamiento" link="/productos/Almacenamiento" />
                    </Col>
                    <Col xs={12} lg={6} className='pe-0'>
                        <Producto imagen={Memoria} altText="Memoria" title="Memorias" link="/productos/Memorias" />
                    </Col>
                </Row>
                <Producto imagen={Mueble} altText="Mueble" title="Sillas" link="/productos/Sillas" />
                <Row>
                    <Col xs={12} lg={6} className='ps-0'>
                        <Producto imagen={Grafica} altText="Grafica" title="Tarjeta Gráfica" link="/productos/Grafica" />
                    </Col>
                    <Col xs={12} lg={6} className='pe-0'>
                        <Producto imagen={Refrigadores} altText="Refrigadores" title="Refrigeración" link="/productos/Refrigeración" />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Productos;
