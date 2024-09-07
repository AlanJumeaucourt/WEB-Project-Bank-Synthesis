import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Unauthorized } from '../../views/errors/Unauthorized';
import { NavBar } from '../bars/NavBar';

export const LoginRequired = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (initialized) {
            setIsLoading(false);
        }
    }, [initialized]);

    if (isLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#f5f5f5'
            }}>
                <div style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#333'
                }}>
                    Chargement...
                </div>
            </div>
        );
    }

    if (!keycloak.authenticated) {
        return <Unauthorized keycloak={keycloak} />;
    }

    return (
        <>
            <NavBar />
            {children}
        </>
    );
};