import React from "react";
import carrito from "../../assets/img/iconos/carrito.png"
import isotipo from "../../assets/img/isotipo_technogamer.svg";
import lupa from "../../assets/img/iconos/buscador.png"
import Buscador from "../../components/Buscardor/Buscardor";
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renombrado para evitar conflicto
import CustomModal from "../../components/Modal/CustomModal"

function Navbar() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <BootstrapNavbar collapseOnSelect expand="lg" className="navabar">
            <BootstrapNavbar.Brand >
                <Nav.Link href="/" className="logo">
                    <img src={isotipo} alt="isotipo" />
                    <p>Technogamer</p>
                </Nav.Link>
            </BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
            <BootstrapNavbar.Collapse className="navbar_enalace_iconos" id="responsive-navbar-nav">
                <Nav className="enlaces ">
                    <Nav.Link className="enlace" href="/productos">Productos</Nav.Link>
                    <Nav.Link className="enlace" href="/login">Login</Nav.Link>
                    <Nav.Link className="enlace" href="/register">Registrarse</Nav.Link>
                    <Nav.Link className="enlace" href="#soporte">Soporte</Nav.Link>
                    <Nav.Link className="enlace" href="/about">Nosotros</Nav.Link>
                </Nav>
                <Nav className="align-items-center">
                    <div className="iconos">
                        <button className=" border-0 iconos " onClick={() => setModalShow(true)} >
                            <img src={lupa} alt="lupa_buscador" />
                        </button>
                        <CustomModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            contenido={<Buscador />} />

                    </div>
                    <Nav.Link className="iconos" href="#redes">
                        <img src={carrito} alt="carrito" />
                    </Nav.Link>
                </Nav>
            </BootstrapNavbar.Collapse>

        </BootstrapNavbar>
    );
}

export default Navbar;
