import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';

function AppNavbar() {
    return (
        <Navbar  className="company-shadow-1" light expand="md">
            <NavbarBrand tag={Link} to="/" className="nav-logo">Kalendario</NavbarBrand>
            <NavbarToggler />
            <Collapse className="justify-content-end" navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/auth/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/auth/register">Register</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default AppNavbar;
