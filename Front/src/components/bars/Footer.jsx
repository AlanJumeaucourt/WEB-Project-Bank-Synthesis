import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterElements";

export function Footer() {
    return (
        <Box>
            <h1 style={{
                color: "white",
                textAlign: "center",
                marginTop: "-50px"
            }}>
                TCArgent toujours là pour votre argent
            </h1>
            <br />
            <Container>
                <Row>
                    <a href="https://www.insa-lyon.fr">
                        <img src="TCA_Logo.png" height="50hv" alt="Logo" loading="lazy" />
                    </a>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis/">GitHub</FooterLink>
                        <FooterLink href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis/issues">Contact Us</FooterLink>
                    </Column>
                    <a href="https://www.insa-lyon.fr/fr/content/télécommunications-services-usages">
                        <img src="INSA_Logo.png" height="50hv" alt="Logo" loading="lazy" />
                    </a>
                </Row>
            </Container>
        </Box>
    );
};