import React, { Component } from "react";

class Card extends Component {
    render() {
        const { style, title, header, footer, children } = this.props
        return (
            <div className="card text-center" style={style}>
                <div className="card-header">
                    {header}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    {children}
                </div>
                <div className="card-footer text-muted">
                    {footer}
                </div>
            </div>
        )
    }
}

export { Card }