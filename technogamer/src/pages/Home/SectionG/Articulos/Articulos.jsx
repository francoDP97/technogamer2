import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Articulos.css';
function Articulos({ noticia }) {
    return (
        <>
            <div className="conteiner_articulo">
                <Row>
                    {noticia.map((noticia, index) => (
                        <Col key={index} lg="4">
                            <div className="car">
                                <div className="card_img">
                                    <img src={noticia.img} alt={noticia.img} />
                                </div>
                                <div className="card_text">
                                    <p>blog</p>
                                    <h3>{noticia.titulo}</h3>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </div>
        </>
    )
}
export default Articulos