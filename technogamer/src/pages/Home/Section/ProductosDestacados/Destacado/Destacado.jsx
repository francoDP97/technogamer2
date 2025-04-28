import React from 'react';
import './Destacado.css'
import { Link } from 'react-router-dom';

function Destacado({ direccion, height, img, nombre }) {
    return (
        <Link to={direccion}>
            <div className='producto' style={{ height: `${height}px` }}>
                <div className='imgProducto' style={{ objectFit: 'cover', objectPosition: 'top' }}>
                    <img src={img} alt="Destacado" />
                </div>
                <div className='textoDeComprea destacado'>
                    <h3>{nombre}</h3>
                    <p>Ver ahora</p>
                </div>
            </div >
        </Link >
    );
}

export default Destacado;
