import React from "react";
import { RoundedButton } from "./Buttons";
import './css/Drawer.css';

export function Drawer({ id, title, children }) {
    return (
        <div class="drawer">
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
            <img src="TCArgent_Logo.png" height="50hv" alt="Logo" loading="lazy" />
        </div>
    )
}