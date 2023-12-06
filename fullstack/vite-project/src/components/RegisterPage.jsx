// RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8081/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nom_utilisateur: username, mot_de_passe: password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                navigate('/login');
            } else if (response.status === 409) {
                alert('Ce nom d\'utilisateur existe déjà.');
            } else {
                const errorData = await response.json();
                alert(errorData.message || 'Une erreur s\'est produite lors de l\'enregistrement.');
            }
        } catch (error) {
            console.log(error);
            alert('Une erreur s\'est produite lors de la connexion au serveur.');
        }
    };

    return (
        <div className="register-form">
            <form onSubmit={handleRegister}>
                <div className='register-title'>
                    <h2>Register</h2>
                </div>
                <div className='register-inputs'>
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit" className="create-account-btn">Create my account</button>
            </form>
            <div className="register-form-footer">
                <p>Already have an account? Click <Link to="/login">here</Link></p>
            </div>
        </div>
    );
};

export default RegisterForm;

