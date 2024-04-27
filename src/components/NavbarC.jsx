import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css'

const NavbarC = () => {
    return (
        <>
            <Navbar expand="lg" className="color">
                <Container>
                    <NavLink to="/"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rI6ldZDZuxwJkLG-pcVgQlMb_Y2cPjWSeA&usqp=CAU' width="100" height="60"></img></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Productos" id="basic-nav-dropdown">
                                <NavLink to="/createProduct" className={'nav-link'}>Nuevo</NavLink>
                                <NavLink to="/product" className={'nav-link'}>Acciones</NavLink>
                            </NavDropdown>
                            <NavDropdown title="Clientes">
                            <NavLink to="/createCustomer" className={'nav-link'}>Nuevo</NavLink>
                                <NavLink to="/customer" className={'nav-link'}>Acciones</NavLink>
                                
                            </NavDropdown>
                            <NavDropdown title="Reportes" id="basic-nav-dropdown">
                                <NavDropdown.Item to="#action/3.1">Reportes</NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item to="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className='ms-auto'>
                            <NavLink to="/login" className={'nav-link'}>Iniciar Sesion</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default NavbarC
