import React, {useState} from 'react';
import {FormattedMessage} from 'react-intl';
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
import {AUTH_ROUTES} from 'src/app/modules/auth/urls';
import {companiesUrls} from 'src/app/modules/companies/paths';
import {USER_ROUTES} from 'src/app/modules/users/urls';
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
                        <NavLink tag={Link} to={companiesUrls(company).index}>
                            <AvatarImg src={company.avatar} size={2} id="TooltipExample"/>
                        </NavLink>
                    </NavItem>
                    }
                    {company && cart &&
                    <NavItem>
                        <NavLink tag={Link} to={companiesUrls(company).cart}>
                            <i className="fa fa-shopping-cart"/>
                        </NavLink>
                    </NavItem>
                    }
                    {!user &&
                    <>
                        <NavItem>
                            <NavLink tag={Link} to={AUTH_ROUTES.LOGIN}><FormattedMessage id={'AUTH.LOGIN'}/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={AUTH_ROUTES.REGISTER}><FormattedMessage id={'AUTH.REGISTER'}/></NavLink>
                        </NavItem>
                    </>
                    }
                    {user &&
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Menu
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <NavLink tag={Link} to={USER_ROUTES.BOOKING()}>
                                    <FormattedMessage id={'USER.BOOKINGS'}/>
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem>
                                <NavLink tag={Link} to={AUTH_ROUTES.LOGOUT}>
                                    <FormattedMessage id={'AUTH.LOGOUT'}/>
                                </NavLink>
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
