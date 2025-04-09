import React from "react";

import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar'; // Renombrado para evitar conflicto
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return (
        <BootstrapNavbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <img
                        src="/logo.png" // Asegurate de que esta ruta sea correcta o poné tu logo
                        alt="Technogamer Logo"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Technogamer
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BootstrapNavbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#productos">Productos</Nav.Link>
                        <Nav.Link href="#soporte">Soporte</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <NavDropdown title="Más" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#opcion1">Opción 1</NavDropdown.Item>
                            <NavDropdown.Item href="#opcion2">Opción 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#separado">Opción Separada</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <Nav.Link eventKey={2} href="#redes">
                            Redes Sociales
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;
