import React, { Component } from 'react'
import { ButtonPrimary } from '../components/ui_components/Buttons'

class HomePage extends Component {
    render() {
        return (
            <div>
                <div className='mt-2'>
                    <h1>TCArgent HomePage</h1>
                </div>
                <a href="https://localhost:3000/Sigin" target="_blanck">
                    <ButtonPrimary name = "Sign In" color="primary" icon="fa fa-sign-in" />
                </a>
                <a href="https://localhost:3000/Login" target="_blanck">
                    <ButtonPrimary color="primary" icon="fa fa-address-book" />
                </a>
            </div>
        )
    }
}

export { HomePage }