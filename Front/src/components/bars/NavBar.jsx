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
    const logout = () => {
        keycloak.logout()
    }
    const register = () => {
        keycloak.register()
    }
    return (
        <div>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='' activeStyle>
                        <img src="TCArgent_Logo.png" height="50hv" alt="Logo" loading="lazy" />
                    </NavLink>

                    <NavLink to='' activeStyle>
                        Home
                    </NavLink>
                </NavMenu>
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

    const login = () => {
        keycloak.login()
    }
    const logout = () => {
        keycloak.logout()
    }
    const register = () => {
        keycloak.register()
    }
    return (
        <div>
            <Nav>
                <Bars />
                {/* <img src="TCArgent_Logo.png"/> */}
                <NavMenu>
                    <NavLink to='/Dashboard' activeStyle>
                        Dashboard
                    </NavLink>
                    <NavLink to='/Patrimoin' activeStyle>
                        Patrimoine
                    </NavLink>
                </NavMenu>
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/account'>Account</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink onClick={logout}>Logout</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </div>
    )
}
