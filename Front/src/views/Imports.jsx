import React, { useState } from "react";
import { ButtonPrimary } from "../components/ui_components/Buttons";
import { InputFile, InputSelect } from "../components/ui_components/Inputs"
import { WarningMessage } from "../components/ui_components/StatusMessage";
import { Axios } from "../services/Axios";

export function Imports() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [warning, setWarning] = useState()
    const [csvDivider, setDivider] = useState(";")
    //accounts type, tag, establishments, acceptation des CGU, new account

    const fileReader = new FileReader();

    const dividerChanges = (divider) => {
        setDivider(divider)
    }

    const handleOnChange = (data) => {
        setWarning(false)
        setFile(data)
    }

    const csvFileToArray = (string, csvDivider) => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(csvDivider);
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows.map(i => {
            const values = i.split(csvDivider);
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setArray(array);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text, csvDivider);
            };

            fileReader.readAsText(file);
        } else {
            setWarning(true);
        }
    };

    return (
        <div className="d-flex justify-content-center text-center">
            <div style={{ height: "500px", width: "500px" }}>
                <h3>Bienvenue sur la page d'import, importez vos transactions pour pouvoir les visualiser sur l'application.</h3><br />
                {warning ? <WarningMessage notDismissible={true} footer={""}>Veillez selectionner un fichier</WarningMessage> : <></>}
                <form>
                    <InputSelect id="csvdivider" icon="fa fa-file" onInputChange={dividerChanges} options={[";", ",", "|"]} />
                    <InputFile id="csvInput" onInputChange={handleOnChange} /> <br />
                    <ButtonPrimary onClick={handleOnSubmit} icon="fa fa-download"> Importer </ButtonPrimary>
                </form>
            </div>
        </div>
    );
}