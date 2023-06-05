import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Unauthorized } from "../../views/errors/Unauthorized";

export function LoginRequired({ children }) {
    const { keycloak } = useKeycloak()
    return keycloak.authenticated ? children : <Unauthorized />
}