import React from 'react';

function Details() {
    const isMobileOrTablet = window.innerWidth <= 768;

    return (
        <div style={{
            padding: isMobileOrTablet ? '20px' : '40px',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            textAlign: isMobileOrTablet ? 'center' : 'left',
        }}>
            <h1 style={{
                fontSize: isMobileOrTablet ? '24px' : '32px',
                fontWeight: 'bold',
                marginBottom: '5px',
                color: '#333',
            }}>
                IMPRESSUM.
            </h1>
            <p style={{
                fontSize: isMobileOrTablet ? '12px' : '14px',
                marginBottom: '40px',
                color: '#666',
            }}>
                ANGABEN ZUM BETREIBER DER WEBSITE.
            </p>

            <h2 style={{
                fontSize: isMobileOrTablet ? '18px' : '20px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '10px',
            }}>
               Medusa Sportwagen GmbH
            </h2>
            <p style={{ marginBottom: '20px' }}>
                Geschäftsführer: Herrn Alex Medusa<br />
                Registergericht: Amtsgericht München<br />
                Handelsregister: HRB 123456<br />
                Umsatzsteuer-ID: DE987654321<br />
                Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV:<br />
                Alex Medusa (Anschrift wie oben)<br />
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '14px' : '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px',
            }}>
                Kontakt
            </h3>

            <p style={{ marginBottom: '20px' }}>
                Medusa Sportwagen GmbH<br />
                Südliche Münchner Straße 15<br />
                82031 Grünwald<br />
                E-Mail: <a href="mailto:info@sportwagen-medusa.de" style={{ color: '#007BFF', textDecoration: 'none' }}>info@sportwagen-medusa.de</a>
            </p>

            <h3 style={{
                fontSize: isMobileOrTablet ? '14px' : '16px',
                fontWeight: 'bold',
                color: '#333',
                marginBottom: '5px',
            }}>
                Haftungsausschluss
            </h3>
            <p style={{ marginBottom: '20px' }}>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
        </div>
    );
}

export default Details;
