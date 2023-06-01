import React from "react";
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