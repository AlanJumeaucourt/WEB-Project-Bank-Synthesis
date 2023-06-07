import React, { Component } from "react";
import { InputCheckbox, InputPassword, InputSelect, InputText } from "./Inputs";
import { ButtonPrimary } from "./Buttons";


export function SignUpForm({ action }) {
    return (
        <div className="d-flex flex-row justify-content-center">
            <form action={action} method="post">
                <div className="mt-2">
                    <InputText icon="fa fa-user">Nom Complet: </InputText>
                </div>
                <div className="mt-2">
                    <InputText icon="fa fa-envelope">Email: </InputText>
                </div>
                <div className="mt-2">
                    <InputSelect icon="fa fa-building" options={["Boursorama", "BRED", "CA"]}>Banque: </InputSelect>
                </div>
                <div className="mt-2">
                    <InputPassword>Mot de passe: </InputPassword>
                </div>
                <div className="mt-2">
                    <InputPassword>Repetez </InputPassword>
                </div>
                <div className="mt-2">
                    <InputCheckbox>CGU</InputCheckbox>
                </div>
                <div className="mt-3">
                    <ButtonPrimary style={{ width: "100%" }}>S'inscrire</ButtonPrimary>
                </div>
            </form>
        </div>
    )
}

export class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onInputChange(value, id) {
        if (id === "username") {
            this.setState({ username: value })
        }
        else {
            this.setState({ password: value })
        }
    }

    handleSubmit(e) {
        this.props.onSubmit(e, this.state.username, this.state.password)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mt-2">
                    <InputText id="username" icon="fa fa-user" onInputChange={this.onInputChange}>Username: </InputText>
                </div>
                <div className="mt-2">
                    <InputPassword id="password" onInputChange={this.onInputChange}>Mot de passe: </InputPassword>
                </div>
                <div className="mt-3">
                    <ButtonPrimary style={{ width: "100%" }}>Connexion</ButtonPrimary>
                </div>
            </form>
        )
    }
}