import React, { Component } from "react"
import { Navigate } from "react-router-dom"

export class Unauthorized extends Component {

    constructor(props) {
        super(props)
        this.state = { timerVal: 10 } //redirection after 10 seconds
        this.timer = null
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.timer = window.setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState((state) => ({ timerVal: state.timerVal - 1 }), () => {
            if (this.state.timerVal <= 0) {
                window.clearInterval(this.timer);
            }
        });
    }

    render() {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold text-danger">401</h1>
                    <p className="fs-3">
                        Mais... tu veux pas te connecter d'abord?
                    </p>
                    <p className="lead">
                        Redirection à la page de <a href="/login" className="link-primary">login</a> dans {this.state.timerVal} seconde{this.state.timerVal > 1 && "s"}
                    </p>
                    {this.state.timerVal <= 0 ? <Navigate to="/login" /> : <></>}
                </div>
            </div>
        )
    }
}