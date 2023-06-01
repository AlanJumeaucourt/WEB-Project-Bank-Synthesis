import React, { Component } from "react";

class Card extends Component {
    render() {
        const { style, title, header, footer, children } = this.props
        return (
            <div class="card text-center" style={style}>
                <div class="card-header">
                    {header}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    {children}
                </div>
                <div class="card-footer text-muted">
                    {footer}
                </div>
            </div>
        )
    }
}

export { Card }