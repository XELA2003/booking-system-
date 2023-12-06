import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import './Profile.css'; // Assurez-vous que le fichier CSS est correctement lié

const Profile = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);

  // Dans Profile.jsx, utilisez l'ID stocké dans votre contexte d'authentification
  useEffect(() => {
  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:8081/commentaires/${user.id}`);
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Erreur lors du chargement des commentaires:', error);
    }
  };

  if (user && user.id) {
    fetchComments();
  }
}, [user]);


  return (
    <div className="profile-container">
      <div className="comments-container">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.commentaire_id} className="comment">
              <p className="comment-text">Vous avez commenté: "{comment.commentaire}"</p>
              <p className="comment-date">Le: {new Date(comment.date_commentaire).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>Vous n'avez pas encore commenté de films.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

