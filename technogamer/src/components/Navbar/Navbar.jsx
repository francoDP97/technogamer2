import React, { useState } from "react";
import carrito from "../../assets/img/iconos/carrito.png";
import isotipo from "../../assets/img/isotipo_technogamer.svg";
import lupa from "../../assets/img/iconos/buscador.png";
import Buscador from "../Buscardor/Buscardor";
import Register from "../Register/Register";
import Login from "../Login/Login";
import './Navbar.css';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import CustomModal from "../Modal/CustomModal";

function Navbar() {
    const [modalType, setModalType] = useState(null);

    const handleClose = () => setModalType(null);

    return (
        <>
            <nav className="login_register">
                <div>
                    <button className=" iconos forlogin_forregister" onClick={() => setModalType('login')}>
                        <p>Iniciar sesión</p>
                    </button>
                </div>
                <div>
                    <button className=" iconos forlogin_forregister" onClick={() => setModalType('register')}>
                        <p>Registro</p>
                    </button>
                </div>
            </nav>

            <BootstrapNavbar collapseOnSelect expand="lg" className="navabar">
                <BootstrapNavbar.Brand>
                    <Nav.Link href="/" className="logo">
                        <img src={isotipo} alt="isotipo" />
                        <p>Technogamer</p>
                    </Nav.Link>
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BootstrapNavbar.Collapse className="navbar_enalace_iconos" id="responsive-navbar-nav">
                    <Nav className="enlaces">
                        <Nav.Link className="enlace" href="/productos">Productos</Nav.Link>
                        <Nav.Link className="enlace" href="/Soporte">Soporte</Nav.Link>
                        <Nav.Link className="enlace" href="#nosotros">Nosotros</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center">
                        <div className="iconos">
                            <button className="border-0 iconos" onClick={() => setModalType('buscador')}>
                                <img src={lupa} alt="lupa_buscador" />
                            </button>
                        </div>
                        <Nav.Link className="iconos" href="#redes">
                            <img src={carrito} alt="carrito" />
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </BootstrapNavbar>

            {/* Modales */}
            <CustomModal
                visible={modalType === 'register'}
                onHide={handleClose}
                contenido={<Register abrirModalLogin={() => setModalType('login')} />}
                cruz={true}
            />

            <CustomModal
                visible={modalType === 'login'}
                onHide={handleClose}
                contenido={<Login abrirModalRegister={() => setModalType('register')} />}
                cruz={true}
            />
            <CustomModal
                visible={modalType === 'buscador'}
                onHide={handleClose}
                contenido={<Buscador />}
                cruz={false}
            />
        </>
    );
}

export default Navbar;
