import {Nav, Navbar} from 'react-bootstrap';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';

function AppNavbar() {
    return (
        <Navbar className="company-shadow-1" expand="lg">
            <Navbar.Brand className="nav-logo" href="#home">Kalendario</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <LinkContainer to="/auth/login">
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/auth/register">
                        <Nav.Link>Register</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar;
