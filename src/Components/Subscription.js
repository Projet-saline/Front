// React Component for Subscription

import React from "react";

const Subscription = () => {
    return (
        <>
            <div className="Subscription">
                <h2>Choisissez votre abonnement</h2>
                <div className="Subscription-Container">
                    <div className="Subscription-Item">
                        <h3>Abonnement Freemium</h3>
                        <ul>
                        <li>✓ Accès aux premiers cours</li>
                        <li>✓ Accès aux forum</li>
                        </ul>
                        <p>Prix : 0€/mois</p>
                        <p>Choisir Freemium</p>
                    </div>
                    <div className="Subscription-Item">
                        <h3>Abonnement Premium</h3>
                        <ul>
                        <li>✓ Accès de 1h avec un professeur par mois</li>
                        <li>✓ Accès à tous les cours en ligne</li>
                        <li>✓ Support par e-mail</li>
                        <li>✓ Accès aux concours</li>
                        </ul>
                        <p>Prix : 19.99€/mois</p>
                        <p>Choisir Premium</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscription;