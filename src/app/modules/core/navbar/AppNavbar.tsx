import React from 'react';
import {UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectUser} from '../../../store/auth';

function AppNavbar() {
    const user = useSelector(selectUser);

    return (
        <Navbar className="company-shadow-1" light expand="md">
            <NavbarBrand tag={Link} to="/" className="nav-logo">Kalendario</NavbarBrand>
            <NavbarToggler/>
            <Collapse className="justify-content-end" navbar>
                {!user && <Nav navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/auth/login">Login</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/auth/register">Register</NavLink>
                    </NavItem>
                </Nav>}
                {user &&
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            Option 1
                        </DropdownItem>
                        <DropdownItem>
                            Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                }
            </Collapse>
        </Navbar>
    )
}

export default AppNavbar;
