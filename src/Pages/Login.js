import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import React, { useState } from 'react';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const lockoutTime = 10 * 60 * 1000;
    const lastAttemptTime = localStorage.getItem('time');
    const attempts = localStorage.getItem('attempts') || 0;

    if (lastAttemptTime && Date.now() - lastAttemptTime < lockoutTime) {
        setMessage('Veuillez réessayer dans quelques minutes.');
        return;
    }

    if (attempts >= 3) {
        setMessage('Vous avez atteint le nombre maximum de tentatives. Veuillez réessayer dans 10 minutes.');
        localStorage.setItem('time', Date.now());
        localStorage.setItem('attempts', 0); 
        return;
    }

    const apiUrl = 'https://votre-api-url.com/login';

    const requestData = {
        email: email,
        password: password
    };
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    };
    
    fetch(apiUrl, requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('La requête a échoué');
            }
        })
        .then(data => {
            if (data.success) {
                setMessage('Connexion réussie!');
                localStorage.removeItem('attempts');
            } else {
                setMessage('Email ou mot de passe incorrect!');
                localStorage.setItem('attempts', Number(attempts) + 1);
            }
        })
        .catch(error => {
            console.error('Il y a eu une erreur lors de la connexion:', error);
            setMessage('Erreur de connexion. Veuillez réessayer.');
        });
 
};



return (
    <div className="Login">
        <Navbar Style={true} />
            <div className="login-container">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email :</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password :</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <p type="submit" className="Action Transparent-Button">Connect</p>
                    <p className="Action">Lost password ?</p>
                </form>
                <div className="separator">
                    <p className="Action">Pas encore inscrit ?</p>
                    <p className="Action">Rejoignez-nous dès maintenant !</p>
                </div>
                
                {message && <p>{message}</p>}
            </div>
            <div className="register-call">
                
            </div>

        <Footer />
    </div>
  );
}

export default Login;
