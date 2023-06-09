import React, { Children, Component } from 'react'
import { useKeycloak } from "@react-keycloak/web";
import { ButtonPrimary } from '../components/ui_components/Buttons'
import { Drawer } from '../components/ui_components/Drawer'

export function HomePage() {
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light" data-bs-theme="dark">
                <img
                    src="TCArgent_Logo.png"
                    alt=""
                    title="Amazing TCArgent logo"
                    width="100"
                    height="100"></img>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
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
            </nav>
            <tr>
                <td className='p-2'>
                    <Drawer id="drawer">
                        <div className='w-100'>
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
                        </div>
                    </Drawer>
                </td>
                <td>
                    <h1>TCArgent</h1>
                </td>
            </tr>

            <div>
                <h2>Bienvenue sur TCArgent</h2>
            </div>
            <div>
                <body>
                    Nous sommes heureux de
                </body>
            </div>


                <footer class="py-4 bg-dark flex-shrink-0 bottom-0">
                    <div class="position-absolute start-0 p-3">
                        <img
                            src="INSA_Logo.png"
                            alt=""
                            title="Amazing TCArgent logo"
                            width="443" //*4,43
                            height="100"></img>
                    </div>
                    <div class="container text-center">
                        <a href='https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis/issues'>Contact US</a>
                        <a href='https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis'>GitHub</a>
                    </div>
                    <div class="position-absolute end-0 p-3">
                        <img
                            src="TCA_Logo.png"
                            alt=""
                            title="Amazing TCArgent logo"
                            width="100"
                            height="100"></img>
                    </div>
                    <div class="container text-center">
                        <p class="text-light">© 2023 Copyright:</p>
                        <a href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis" class="text-muted"> 3TCA TCArgent Teams</a>
                    </div>
                </footer>

        </div >
    )
}