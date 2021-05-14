import React, {useState} from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import AvatarImg from 'src/app/shared/molecules/avatar-img';
import {selectUser} from 'src/app/store/auth';
import {selectCompany, selectCurrentRequest} from 'src/app/store/companies';

function AppNavbar() {
    const user = useSelector(selectUser);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const company = useSelector(selectCompany);
    const cart = useSelector(selectCurrentRequest);
    return (
        <Navbar className="company-shadow-1" light expand="md">
            <NavbarBrand tag={Link} to="/" className="nav-logo">Kalendario</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse className="justify-content-end" isOpen={isOpen} navbar>
                <Nav navbar>
                    {company &&
                    <NavItem>
                        <NavLink tag={Link} to={`/c/${company.name}`}>
                            <AvatarImg src={company.avatar} size={2} id="TooltipExample"/>
                        </NavLink>
                    </NavItem>
                    }
                    {company && cart &&
                    <NavItem>
                        <NavLink tag={Link} to={`/c/${company.name}/cart`}>
                            <i className="fa fa-shopping-cart"/>
                        </NavLink>
                    </NavItem>
                    }
                    {!user &&
                    <>
                        <NavItem>
                            <NavLink tag={Link} to="/auth/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/auth/register">Register</NavLink>
                        </NavItem>
                    </>
                    }
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
                            <DropdownItem divider/>
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default AppNavbar;
