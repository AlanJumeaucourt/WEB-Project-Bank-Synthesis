import React, { Component } from "react";

class StatusMessage extends Component {
    render() {
        const { color, title, icon, footer, notDismissible, children } = this.props
        return (
            <div className={"alert fade show alert-" + color + " alert-" + (!notDismissible ? "dismissible" : "")} role="alert">
                <h4 className="alert-heading"><i className={icon}></i> {title}</h4>
                <p>{children}</p>
                <hr />
                <p className="mb-0">{footer}</p>
                {!notDismissible ? <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> : <></>}
            </div>
        )
    }
}

export function SuccessMessage({ title, footer, notDismissible, children }) {
    return (
        <StatusMessage color="success" icon="fa fa-check" title={title} notDismissible={notDismissible} footer={footer} children={children} />
    )
}

export function ErrorMessage({ title, footer, notDismissible, children }) {
    return (
        <StatusMessage color="danger" icon="fa fa-exclamation-circle" title={title} notDismissible={notDismissible} footer={footer} children={children} />
    )
}

export function WarningMessage({ title, footer, notDismissible, children }) {
    return (
        <StatusMessage color="warning" icon="fa fa-exclamation-triangle" title={title} notDismissible={notDismissible} footer={footer} children={children} />
    )
}

export function InfoMessage({ title, footer, notDismissible, children }) {
    return (
        <StatusMessage color="info" icon="fa fa-info-circle" title={title} notDismissible={notDismissible} footer={footer} children={children} />
    )
}