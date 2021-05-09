import React from 'react';
import {Button, Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
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
                {user && <Nav navbar>
                    {/*<NavItem *ngIf="canCreateCompany()" mat-menu-item routerLink="/create-company" class="fix-size">*/}
                    {/*Create Company*/}
                    {/*</button>*/}
                    <NavItem>
                        Profile
                    </NavItem>
                    {/*<NavItem>*/}
                    {/*    <NavLink tag={Link} to="/my/requests">Your Requests</NavLink>*/}
                    {/*</NavItem>*/}
                    {/*<NavItem>*/}
                    {/*    <NavLink *ngIf="canManageCompany()" routerLink="/admin/home" class="fix-size">*/}
                    {/*    Company dashboard*/}
                    {/*    </NavLink>*/}
                    {/*</NavItem>*/}
                    {/*<NavLink *ngIf="canViewEmpDashboard()"  routerLink="/emp/" class="fix-size">*/}
                    {/*Employee dashboard*/}
                    {/*</NavLink>*/}
                    {/*<NavLink mat-menu-item (click)="logout.emit()" class="fix-size">Logout</NavLink>*/}
                </Nav>}
            </Collapse>
        </Navbar>
    )
}

export default AppNavbar;
