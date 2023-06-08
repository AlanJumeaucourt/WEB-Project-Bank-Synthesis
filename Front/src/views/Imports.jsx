import React from "react";
import { InputFile } from "../components/ui_components/Inputs";
import { ButtonPrimary } from "../components/ui_components/Buttons";

export function Imports() {
    let data = null

    const handleChange = (file) => {
        data = file
    }

    const fr = new FileReader()

    const processCsv = (e) => {
        e.preventDefault()
        if (data) {
            fr.onload = (e) => {
                const csvOutput = e.target.result;
            }
            fr.readAsText(data)
        }
    }

    return (
        <div>
            <form>
                <InputFile id="file" onInputChange={handleChange} />
                <ButtonPrimary icon="fa fa-download" onClick={processCsv}> Importer</ButtonPrimary>
            </form>
        </div>
    )
}