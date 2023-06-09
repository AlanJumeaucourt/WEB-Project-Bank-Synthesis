import React, { Children, Component } from 'react'
import { useKeycloak } from "@react-keycloak/web";
import { ButtonPrimary} from '../components/ui_components/Buttons'
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
                <tr>
                    <td>
                        <Drawer id="drawer">
                            <div className='w-100'>
                                <div className='mt-2 w-100'>
                                    <ButtonPrimary icon="fa fa-user-circle-o" style={{width: "inherit"}} onClick={login}> Log In</ButtonPrimary>
                                </div>
                                <div className='mt-2 w-100'>
                                    <ButtonPrimary icon="fa fa-sign-in" style={{width: "inherit"}} onClick={register}> Register </ButtonPrimary>
                                </div>
                                <div className='mt-2 w-100'>
                                    <ButtonPrimary icon="fa fa-sign-out" style={{width: "inherit"}} onClick={logout}> Log Out</ButtonPrimary>
                                </div>
                            </div>
                        </Drawer>

                    </td>
                    <td>
                        <img
                            src="TCArgent_Logo.png"
                            alt=""
                            title="Amazing TCArgent logo"
                            width="100"
                            height="100"></img>
                    </td>
                    <td>
                        <h1>TCArgent</h1>
                    </td>
                </tr>
                <tr>

                </tr>
                <div>
                    <h2>Bienvenue sur TCArgent</h2>
                </div>
                <div>
                    <body>
                        Nous sommes heureux de 
                    </body>
                </div>
                <div>
                    <tr>
                        <td><a href='https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis/issues'>Contact US</a></td>
                        <td><a href='https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis'>GitHub</a></td>
                        
                    </tr>

                    

                </div>
            </div>
        )
}