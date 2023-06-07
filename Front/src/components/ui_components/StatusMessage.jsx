import React, { Component } from "react";

class StatusMessage extends Component {
    render() {
        const { color, title, icon, footer, children } = this.props
        return (
            <div className={"alert alert-dismissible fade show alert-" + color} role="alert">
                <h4 className="alert-heading"><i className={icon}></i> {title}</h4>
                <p>{children}</p>
                <hr />
                <p className="mb-0">{footer}</p>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    }
}

export function SuccessMessage({ title, footer, children }) {
    return (
        <StatusMessage color="success" icon="fa fa-check" title={title} footer={footer} children={children} />
    )
}

export function ErrorMessage({ title, footer, children }) {
    return (
        <StatusMessage color="danger" icon="fa fa-exclamation-circle" title={title} footer={footer} children={children} />
    )
}

export function WarningMessage({ title, footer, children }) {
    return (
        <StatusMessage color="warning" icon="fa fa-exclamation-triangle" title={title} footer={footer} children={children} />
    )
}