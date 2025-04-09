import React from "react";
import isoTipo from '../../assets/img/isotipo_technogamer.svg';
import buscador from '../../assets/img/iconos/buscador.png';
import carrito from '../../assets/img/iconos/carrito.png';
function Navbar() {
    return (
        <nav>
            <div>
                <img src={isoTipo} alt="Logo Technogamer" />
                <p>TECHNOGAMER</p>
            </div>
            <div>
                <ul>
                    <li>Productos</li>
                    <li>Soporte</li>
                    <li>Nosotros</li>
                </ul>
            </div>
            <div>
                <img src={buscador} alt="Logo Technogamer" />
                <img src={carrito} alt="Logo Technogamer" />
            </div>

        </nav>
    )
}
export default Navbar