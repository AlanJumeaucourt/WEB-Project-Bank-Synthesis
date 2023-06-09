import React, { Component } from "react";

class ButtonDefault extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        if (this.props.onClick) {
            this.props.onClick(e)
        }
    }

    render() {
        const { color, icon, circular, rounded, style, dataToggle, dataTarget, ariaControls, children } = this.props

        let btnClasses = "btn btn-plain btn-" + color
        btnClasses += circular ? " rounded-circle" : ""
        btnClasses += rounded ? " rounded" : ""

        return (
            <button className={btnClasses} onClick={this.handleClick} style={style} data-bs-toggle={dataToggle} data-bs-target={dataTarget} aria-controls={ariaControls}>
                <i className={icon}></i>
                {children}
            </button>
        )
    }
}

export function ButtonPrimary({ icon, style, onClick, children }) {
    return (
        <ButtonDefault color="primary" icon={icon} style={style} onClick={onClick} children={children} />
    )
}

export function CircularButton({ color, icon, onClick, style, children }) {
    return (
        <ButtonDefault color={color} icon={icon} circular={true} style={style} onClick={onClick} children={children} />
    )
}

export function RoundedButton({ color, icon, onClick, style, dataToggle, dataTarget, ariaControls, children }) {
    return (
        <ButtonDefault color={color} icon={icon} rounded={true} style={style} onClick={onClick} children={children} dataToggle={dataToggle} dataTarget={dataTarget} ariaControls={ariaControls} />
    )
}