import React from 'react';
import { Link } from 'react-router-dom';

function Producto({ imagen, altText, title, link }) {
    return (
        <Link to={link}>
            <div className='producto'>
                <div className='imgProducto'>
                    <img src={imagen} alt={altText} />
                </div>
                <div className='textoDeComprea'>
                    <h3>{title}</h3>
                    <p>Compra Ahora</p>
                </div>
            </div>
        </Link>
    );
}

export default Producto;