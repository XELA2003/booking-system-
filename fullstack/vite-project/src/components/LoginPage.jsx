// LoginForm component
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useAuth } from './AuthContext';

const LoginForm = () => {
    const { login } = useAuth(); // On utilise login() de notre AuthContext
    const [nomUtilisateur, setNomUtilisateur] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); // Pour empêcher le rechargement de la page

        try {
            const response = await fetch('http://localhost:8081/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nom_utilisateur: nomUtilisateur, mot_de_passe: motDePasse })
            });

            const data = await response.json();
            if (response.ok) {
                login(data.user); // Utilisez les données utilisateur renvoyées par le serveur après la connexion réussie
                navigate('/home'); // Redirection vers la page d'accueil
                alert('Connexion réussie.'); // Affichage d'une alerte de succès
                console.log('Connexion réussie', data);
                localStorage.setItem('userId', data.user.utilisateur_id);
                console.log('userId', data.user.utilisateur_id);
            } else {
                alert(data.message || 'Une erreur est survenue lors de la connexion.'); // Affichage d'une alerte d'erreur
                console.error('Erreur de connexion', data);
            }
        } catch (error) {
            console.error('Erreur lors de la connexion', error);
            alert('Une erreur est survenue lors de la connexion.'); // Affichage d'une alerte d'erreur
        }
    };

    return (
        <div className='login-body'>
        <div className="login-form">
            <form onSubmit={handleLogin}>
                <div className='login-title'>
                    <h2>Log in</h2>
                </div>
                <div className='login-inputs'>
                    <input type="text" placeholder="Nom d'utilisateur" value={nomUtilisateur} onChange={e => setNomUtilisateur(e.target.value)} />
                    <input type="password" placeholder="Mot de passe" value={motDePasse} onChange={e => setMotDePasse(e.target.value)} />
                </div>
                <button type="submit" className="login-btn">Login</button>
                <div className="login-form-footer">
                    <p>Vous n'avez pas de compte ? Inscrivez-vous <Link to="/register">ici</Link></p>
                </div>
                <div className="login-form-footer">
                    <p>Mot de passe oublié ? cliquez <Link to="/forgot">ici</Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default LoginForm;








