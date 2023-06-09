import React, { Component } from "react";

class InputDefault extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: '',
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        if (this.props.type === "checkbox") {
            this.setState({ checked: e.target.checked })
            console.log(this.props.onInputChange)
            if (this.props.onInputChange) {
                this.props.onInputChange(e.target.checked, e.target.id)
            }
        }
        else {
            this.setState({ input: e.target.value })
            if (this.props.onInputChange) {
                this.props.onInputChange(e.target.value, e.target.id)
            }
        }
    }

    render() {
        const { type, id, icon, placeholder, options, children } = this.props
        return (
            <div className="form-group">
                <label htmlFor={id}>{children}</label>
                <div className="input-group">
                    {icon ? <span className="input-group-prepend input-group-text"> <i className={icon}></i> </span> : <></>}
                    {
                        !options ?
                            type !== "checkbox" ?
                                <input value={this.state.text} id={id} name={id} className="form-control" placeholder={placeholder} type={type} onChange={this.handleChange} />
                                : <input value={this.state.checked} id={id} name={id} className="form-check-input" type="checkbox" onChange={this.handleChange} />
                            : <select onChange={this.handleChange}>
                                {options.map((el) => {
                                    return (
                                        <option key={el}>{el}</option>
                                    )
                                })}
                            </select>
                    }
                </div>
            </div>
        )
    }
}

export function InputText({ id, placeholder, icon, children, onInputChange }) {
    return (
        <InputDefault id={id} type="text" placeholder={placeholder} icon={icon} children={children} onInputChange={onInputChange} />
    )
}

export function InputPassword({ id, placeholder, children, onInputChange }) {
    return (
        <InputDefault id={id} type="password" icon="fa fa-lock" placeholder={placeholder} children={children} onInputChange={onInputChange} />
    )
}

export function InputCheckbox({ id, children, onInputChange }) {
    return (
        <InputDefault id={id} type="checkbox" children={children} onInputChange={onInputChange} />
    )
}

export function InputSelect({ id, icon, options, children, onInputChange }) {
    return (
        <InputDefault id={id} icon={icon} options={options} children={children} onInputChange={onInputChange} />
    )
}