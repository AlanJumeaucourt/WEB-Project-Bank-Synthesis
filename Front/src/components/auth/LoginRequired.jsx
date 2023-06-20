import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Unauthorized } from "../../views/errors/Unauthorized";
import { NavBar } from "../bars/NavBar";

export function LoginRequired({ children }) {
    const { keycloak } = useKeycloak()
    return keycloak.authenticated ? (<>
    <NavBar/>
    {children}
    </>) 
    : <Unauthorized keycloak={keycloak} />
}