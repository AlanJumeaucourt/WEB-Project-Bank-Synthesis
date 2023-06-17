import React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { ButtonPrimary } from '../ui_components/Buttons'
import { Drawer } from '../ui_components/Drawer'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

export function HomeNavBar() {
    const { keycloak } = useKeycloak()

    const login = () => {
        keycloak.login()
    }

    const register = () => {
        keycloak.register()
    }

    return (
        <div class="position-sticky fixed-top">
            <Nav>
                
                <Bars />
                <NavMenu>
                    <NavLink to='' activeStyle>
                        <img src="TCArgent_Logo.png" height="50hv" alt="Logo" loading="lazy" />
                    </NavLink>
                </NavMenu>

                <Drawer id="drawer">
                <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-home"
                            style={{ width: "inherit" }}
                            href="/"> Home </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-user-circle-o"
                            style={{ width: "inherit" }}
                            onClick={login}> Login </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-sign-out"
                            style={{ width: "inherit" }}
                            onClick={register}> Register </ButtonPrimary>
                    </div>
                </Drawer>
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={login}>Login</NavBtnLink>
                    </NavBtn>
                    <NavBtn class="fixed-end">
                        <NavBtnLink onClick={register}>Register</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </div>
    )
}

export function NavBar() {
    const { keycloak } = useKeycloak()

    const logout = () => {
        keycloak.logout()
    }

    const account = () => {
        keycloak.accountManagement()
    }

    return (
        <div  class="position-sticky fixed-top">
            <Nav>
                
                <Bars />
                
                <NavMenu>
                    <img src="TCArgent_Logo.png" height="50hv" alt="Logo" loading="lazy"/>
                    <NavLink to='/dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to='/patrimoine' activeStyle>
                        Patrimoine
                    </NavLink>
                </NavMenu>
                <Drawer id="drawer">
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-address-card"
                            style={{ width: "inherit" }}
                            href="/dashboard"> DashBoard </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-university"
                            style={{ width: "inherit" }}
                            href="/patrimoine"> Patrimoine </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-user-circle-o"
                            style={{ width: "inherit" }}
                            onClick={account}> Account </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-sign-out"
                            style={{ width: "inherit" }}
                            onClick={logout}> LogOut </ButtonPrimary>
                    </div>
                </Drawer>
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={account}>Account</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink onClick={logout}>Logout</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </div>
    )
}
