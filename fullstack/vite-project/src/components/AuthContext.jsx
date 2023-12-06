import React, { createContext, useContext, useState, useEffect } from 'react';

// Créez un contexte d'authentification
export const AuthContext = createContext(null);

// Utilisez ce hook pour accéder au contexte d'authentification
export function useAuth() {
  return useContext(AuthContext);
}

// Fournisseur de contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Charger l'état de l'utilisateur au démarrage de l'application
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const username = localStorage.getItem('username');
    // Supposons que vous stockez l'id et le nom d'utilisateur dans le stockage local
    if (userId && username) {
      setUser({ id: userId, nomUtilisateur: username });
    }
  }, []);

  // Fonction pour connecter l'utilisateur
  const login = (userId, username) => {
    localStorage.setItem('userId', userId);
    localStorage.setItem('username', username);
    setUser({ id: userId, nomUtilisateur: username });
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setUser(null);
  };

  // La valeur passée au fournisseur de contexte
  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

