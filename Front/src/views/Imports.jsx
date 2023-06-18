import React, { useState } from "react";
import { ButtonPrimary } from "../components/ui_components/Buttons";
import { InputFile, InputSelect } from "../components/ui_components/Inputs";
import { InfoMessage, WarningMessage } from "../components/ui_components/StatusMessage";
import { Tabs } from "../components/ui_components/Tabs";

const tabs = [
    {
        id: 1,
        tabTitle: 'Imports CSV',
        title: "Remplissez le formulaire suivant pour un import CSV",
        content: <CsvImports />
    },
    {
        id: 2,
        tabTitle: 'Imports API',
        title: "Votre banque dispose d'une API? connectez directement votre compte à TCArgent",
        content: <ApiImports />
    }
]

export function Imports() {
    return (
        <div className="mt-3 d-flex flex-column align-items-center text-center">
            <div className="my-2 w-75">
                <InfoMessage title="Comment visualiser ses transactions ?">{tuto}</InfoMessage>
            </div>
            <div className="my-2 w-75">
                <Tabs tabs={tabs}></Tabs>
            </div>
        </div>
    )
}

function ApiImports() {
    return (
        <div>
            <h1>soon ...</h1>
        </div>
    )
}

function CsvImports() {
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

const tuto = "TCArgent est une plateforme conviviale qui vous permet d'importer et de visualiser facilement vos transactions financières. Avec TCArgent, vous avez deux options pratiques pour importer vos données. Tout d'abord, vous pouvez importer vos transactions au grace aux ecports de votre banque au format CSV. Cette méthode vous offre une flexibilité maximale pour travailler avec vos données financières. Deuxièmement, TCArgent prend également en charge la connexion via API. Vous pouvez connecter votre compte TCArgent directement à votre banque si elle est compatible pour accéder en temps réel à vos transactions sur le site. Cette fonctionnalité vous permet de synchroniser automatiquement vos données et d'avoir une vue d'ensemble précise de vos finances. Que vous préfériez importer vos données ou vous connecter via API, TCArgent est là pour vous offrir une expérience personnalisée et pratique pour gérer vos transactions financières."