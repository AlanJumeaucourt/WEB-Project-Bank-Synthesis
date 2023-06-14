import React, { Children } from "react";

export function Stack({ style, children }) {
    return (
        <div className='d-flex justify-content-around container border rounded flex-column' style={style}>
            {Children.map(children, (child) => {
                return <div className="mt-2 bg-light border rounded">{child}</div>
            })}
        </div>
    )
}

export function Queue({ style, children }) {
    return (
        <div className='d-flex justify-content-around container border rounded flex-row' style={style}>
            {Children.map(children, (child) => {
                return <div className="my-auto bg-light border rounded">{child}</div>
            })}
        </div>
    )
}

export function Card({ style, title, header, footer, children }) {
    return (
        <div className="card text-center" style={style}>
            {
                header ?
                    <div className="card-header">
                        {header}
                    </div> : <></>
            }
            {title ? <div className="card-title">
                <h5 className="card-title">{title}</h5>
            </div> : <></>}
            <div className="card-body">
                {children}
            </div>
            {
                footer ?
                    <div className="card-footer text-muted">
                        {footer}
                    </div> : <></>
            }
        </div>
    )
}