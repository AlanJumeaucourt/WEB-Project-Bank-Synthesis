import React from 'react'

export function Footer() {
    return (
        <div>
            <footer>
                <div class="row">
                    <div class="col-6">
                        <a href="https://www.insa-lyon.fr">
                            <img
                                src="INSA_Logo.png"
                                alt=""
                                title="Amazing INSA logo"></img>
                        </a>
                    </div>
                    <div class="col-6">
                        <a href="https://www.insa-lyon.fr/fr/content/télécommunications-services-usages">
                            <img
                                src="TCA_Logo.png"
                                alt=""
                                title="Amazing TCA logo"></img>
                        </a>
                    </div>
                </div>
                <p>© 2023 Copyright:&nbsp; <a href="https://github.com/Zouzzou21/WEB-Project-Bank-Synthesis" style={{ color: 'black' }} > 3TCA TCArgent Teams</a></p>
            </footer>
        </div>
    )
}