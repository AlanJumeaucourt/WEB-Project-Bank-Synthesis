import React from "react"

export const PageNotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <p className="fs-3">
                    Mais... comment t'as fait pour te perdre ?
                </p>
                <p className="lead">
                    Il semble que cette page n'existe pas
                </p>
                <a href="/" className="btn btn-primary">Retourner à l'accueil</a>
            </div>
        </div>
    )
}