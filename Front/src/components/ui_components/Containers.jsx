import React, { Children } from "react";

function ContainerDefault({ direction, style, children }) {
    return (
        <div className={'d-flex justify-content-around container border rounded flex-' + direction} style={style}>
            {Children.map(children, (child) => {
                return <div className="my-auto bg-light border rounded">{child}</div>
            })}
        </div>
    )
}


export function Stack({ style, children }) {
    return (
        <ContainerDefault direction="column" style={style} children={children} />
    )
}

export function Queue({ style, children }) {
    return (
        <ContainerDefault direction="row" style={style} children={children} />
    )
}

export function Card({ style, title, header, footer, children }) {
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