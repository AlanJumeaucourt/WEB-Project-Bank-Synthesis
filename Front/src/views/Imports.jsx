import React, { useState } from "react";
import { ButtonPrimary } from "../components/ui_components/Buttons";
import { InputFile } from "../components/ui_components/Inputs"

export function Imports() {
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);

    const fileReader = new FileReader();

    const handleOnChange = (data) => {
        setFile(data)
    }

    const csvFileToArray = string => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

        const array = csvRows.map(i => {
            const values = i.split(",");
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
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };

    const headerKeys = Object.keys(Object.assign({}, ...array));

    return (
        <div style={{ textAlign: "center" }}>
            <h1>REACTJS CSV IMPORT EXAMPLE </h1>
            <form>
                <InputFile id="csvInput" onInputChange={handleOnChange}></InputFile>

                <ButtonPrimary
                    onClick={handleOnSubmit}
                >
                    IMPORT CSV
                </ButtonPrimary>
            </form>

            <br />

            <table>
                <thead>
                    <tr key={"header"}>
                        {headerKeys.map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {array.map((item) => (
                        <tr key={item.id}>
                            {Object.values(item).map((val) => (
                                <td>{val}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}