import React, { Component } from 'react'
import { Axios } from '../services/Axios'

class HomePage extends Component {
    componentDidMount() {
        Axios.getHello()
    }

    render() {
        return (
            <div>
                <h1>TCArgent HomePage</h1>
            </div>
        )
    }
}

export { HomePage }