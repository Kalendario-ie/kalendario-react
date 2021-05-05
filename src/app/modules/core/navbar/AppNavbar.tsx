import {Nav, Navbar} from 'react-bootstrap';

function AppNavbar() {
    return (
        <Navbar className="company-shadow-1" expand="lg">
            <Navbar.Brand className="nav-logo" href="#home">Kalendario</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#home">Login</Nav.Link>
                    <Nav.Link href="#link">Register</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar;
