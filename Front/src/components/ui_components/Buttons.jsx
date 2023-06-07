import React, { Component } from "react";

class ButtonDefault extends Component {
    constructor(props) {
        super(props)
        this.handleClick.bind(this)
    }

    handleClick(e) {
        console.log("click")
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

export function ButtonPrimary({ icon, style, children }) {
    return (
        <ButtonDefault color="primary" icon={icon} style={style} children={children} />
    )
}

export function CircularButton({ color, icon, style, children }) {
    return (
        <ButtonDefault color={color} icon={icon} circular={true} style={style} children={children} />
    )
}

export function RoundedButton({ color, icon, style, dataToggle, dataTarget, ariaControls, children }) {
    return (
        <ButtonDefault color={color} icon={icon} rounded={true} style={style} children={children} dataToggle={dataToggle} dataTarget={dataTarget} ariaControls={ariaControls} />
    )
}