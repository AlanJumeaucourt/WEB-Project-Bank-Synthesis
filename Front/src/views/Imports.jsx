import React, { useState } from "react";
import { ButtonPrimary } from "../components/ui_components/Buttons";
import { InputCheckbox, InputFile, InputSelect, InputText } from "../components/ui_components/Inputs";
import { InfoMessage, WarningMessage } from "../components/ui_components/StatusMessage";
import { Tabs } from "../components/ui_components/Tabs";
import { Axios } from "../services/Axios";

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
        <div className="d-flex flex-column align-items-center text-center bg-light">
            <div className="my-3 w-75 text-justify">
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

    const [warning, setWarning] = useState()

    //transactions
    const [file, setFile] = useState()
    const [cgu, setCgu] = useState(false)
    const [array, setArray] = useState([])
    const [csvDivider, setDivider] = useState(";")

    //accounts type, tag, establishments, acceptation des CGU, new account
    const [newAccount, setIsNewAccount] = useState(false)
    const [accountType, setAccountType] = useState()
    const [accountTag, setAccountTag] = useState()
    const [establishment, setEstablishment] = useState()

    const fileReader = new FileReader();

    const handleOnFileChange = (data) => {
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

    const AccountForm = ({ bool }) => {
        return bool ? (
            <div>
                <div>
                    <InputSelect id="accountType" icon="fa fa-eur" onInputChange={setAccountType} options={["Compte courant", "Compte titre", "PEA"]}>Type de compte</InputSelect>
                </div>
                <div className="mt-2">
                    <InputText id="accountTag" onInputChange={setAccountTag} icon="fa fa-tag">Tag du compte</InputText>
                </div>
                <div className="mt-2">
                    <InputText id="establishment" onInputChange={setEstablishment} icon="fa fa-building">Banque hebergeant le compte</InputText>
                </div>
            </div>
        ) : (<div>
            <InputText id="accountTag" onInputChange={setAccountTag} icon="fa fa-tag">Tag du compte</InputText>
        </div>)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (file && cgu) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text, csvDivider);
            };

            const account = {
                newAccount: newAccount,
                accountType: accountType,
                accountTag: accountTag,
                establishment: establishment
            }

            const payload = {
                account: account,
                transactions: array
            }

            Axios.importsCsv(payload)
        } else {
            setWarning(true);
            //TODO colorize bad input in red
        }
    };

    return (
        <div className="mb-5">
            <div className="w-100">
                <div className="w-100">
                    {warning ? <WarningMessage title="Attention" notDismissible={true} footer="">Veuillez selectionner un fichier et completer tous les champs nécéssaires</WarningMessage> : <></>}
                </div>
                <form className="w-100">
                    <div className="mt-2">
                        <InputCheckbox id="newAccount" onInputChange={setIsNewAccount}>Nouveau Compte ?</InputCheckbox>
                    </div>
                    <div className="mt-2">
                        <AccountForm bool={newAccount} />
                    </div>
                    <div className="mt-2">
                        <InputSelect id="csvdivider" icon="fa fa-minus" onInputChange={setDivider} options={[";", ",", "|"]}>Séparateur CSV</InputSelect>
                    </div>
                    <div className="mt-2">
                        <InputFile id="csvInput" onInputChange={handleOnFileChange} /> <br />
                    </div>
                    <div className="mt-2">
                        <InputCheckbox id="CGU" onInputChange={setCgu}>J'accepte l'import de mes données</InputCheckbox>
                    </div>
                    <div className="mt-2">
                        <ButtonPrimary onClick={handleOnSubmit} icon="fa fa-download"> Importer </ButtonPrimary>
                    </div>
                </form>
            </div>
        </div>
    );
}

const tuto = "TCArgent est une plateforme conviviale qui vous permet d'importer et de visualiser facilement vos transactions financières. Avec TCArgent, vous avez deux options pratiques pour importer vos données. Tout d'abord, vous pouvez importer vos transactions au grace aux ecports de votre banque au format CSV. Cette méthode vous offre une flexibilité maximale pour travailler avec vos données financières. Deuxièmement, TCArgent prend également en charge la connexion via API. Vous pouvez connecter votre compte TCArgent directement à votre banque si elle est compatible pour accéder en temps réel à vos transactions sur le site. Cette fonctionnalité vous permet de synchroniser automatiquement vos données et d'avoir une vue d'ensemble précise de vos finances. Que vous préfériez importer vos données ou vous connecter via API, TCArgent est là pour vous offrir une expérience personnalisée et pratique pour gérer vos transactions financières."