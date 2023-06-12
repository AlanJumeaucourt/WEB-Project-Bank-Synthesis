import React from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { ButtonPrimary } from '../ui_components/Buttons'
import { Drawer } from '../ui_components/Drawer'

export function HomeNavBar({bg}) {
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
        <div id="navbar">
            <div class="drawer">
                <Drawer id="drawer">
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-user-circle-o"
                            style={{ width: "inherit" }}
                            onClick={login}> Log In </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-sign-in"
                            style={{ width: "inherit" }}
                            onClick={register}> Register </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-sign-out"
                            style={{ width: "inherit" }}
                            onClick={logout}> Log Out</ButtonPrimary>
                    </div>
                </Drawer>
            </div>

            <li><a href=""><img
                src="TCArgent_Logo.png"
                class="logo"
                alt="Responsive image"
                title="Amazing TCArgent logo"></img></a>
            </li>

            <li>
                <a href="/design-system">Design Syteme</a>
            </li>

            <li>
                <a href="/imports">Imports</a>
            </li>

            <li>
                <a onClick={login}>Log In</a>
            </li>

            <li>
                <a onClick={register}>Sign In</a>
            </li>

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
        <div id="navbar" >
            <div class="drawer">
                <Drawer id="drawer">
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-user-circle-o"
                            style={{ width: "inherit" }}
                            onClick={login}> Log In </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-sign-in"
                            style={{ width: "inherit" }}
                            onClick={register}> Register </ButtonPrimary>
                    </div>
                    <div className='mt-2 w-100'>
                        <ButtonPrimary
                            icon="fa fa-sign-out"
                            style={{ width: "inherit" }}
                            onClick={logout}> Log Out</ButtonPrimary>
                    </div>
                </Drawer>
            </div>
            <li><a href=""><img
                src="TCArgent_Logo.png"
                class="logo"
                alt="Responsive image"
                title="Amazing TCArgent logo"></img></a>
            </li>

            <li>
                <a href="/Patrimoine">Patrimoine</a>
            </li>
            <li>
                <a onClick={logout}>Log Out</a>
            </li>
        </div>
    )
}
