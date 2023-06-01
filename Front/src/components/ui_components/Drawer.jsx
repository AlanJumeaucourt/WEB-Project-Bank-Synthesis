import React from "react";
import { RoundedButton } from "./Buttons";

export function Drawer({ id, title, children }) {
    return (
        <div>
            <RoundedButton dataToggle="offcanvas" dataTarget={"#" + id} ariaControls={id} icon="fa fa-bars" />
            <div className="offcanvas offcanvas-start" tabIndex="-1" id={id} aria-labelledby={id + "Label"}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id={id + "Label"}>{title}</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {children}
                </div>
            </div>
        </div>
    )
}