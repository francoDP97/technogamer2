import React from "react";
import isoTipo from '../../assets/img/isotipo_technogamer.svg';
import buscador from '../../assets/img/iconos/buscador.png';
import carrito from '../../assets/img/iconos/carrito.png';
import './Navbar.css';
function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={isoTipo} alt="Logo Technogamer" />
                <p>TECHNOGAMER</p>
            </div>
            <div className="enlaces">
                <ul >
                    <li>Productos</li>
                    <li>Soporte</li>
                    <li>Nosotros</li>
                </ul>
            </div>
            <div className="icons">
                <img src={buscador} alt="Logo Technogamer" />
                <img src={carrito} alt="Logo Technogamer" />
            </div>

        </nav>
    )
}
export default Navbar