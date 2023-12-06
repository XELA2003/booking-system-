const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projetweb'
});

db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données: ' + err.stack);
        return;
    }
    console.log('Connecté à la base de données avec succès.');
});


app.get('/commentaires', (req, res) => {
    const sqlSelect = "SELECT * FROM commentaires";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//route pour la recuperation des commentaires d'un certain user avec l'id de l'utilisateur
app.get('/commentaires/:id', (req, res) => {
    const id = req.params.id;
    const sqlSelect = "SELECT * FROM commentaires WHERE utilisateur_id = ?";
    db.query(sqlSelect, [id], (err, result) => {
        res.send(result);
    });
});

// ... le reste de votre code serveur ...

// Route pour rechercher des films par titre
app.get('/search', (req, res) => {
    const searchTerm = req.query.term;
    const sqlSearch = "SELECT * FROM films WHERE titre LIKE ?";
    db.query(sqlSearch, [`%${searchTerm}%`], (err, results) => {
      if (err) {
        res.status(500).send('Erreur lors de la recherche des films');
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  // ... le reste de votre code serveur ...
  


// Route pour l'enregistrement des utilisateurs
app.post('/register', (req, res) => {
    const { email, mot_de_passe, nom, prenom } = req.body;
    const sqlInsert = "INSERT INTO utilisateurs (email, mot_de_passe, nom, prenom) VALUES (?, ?, ?, ?)";
    db.query(sqlInsert, [email, mot_de_passe, nom, prenom], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de l\'enregistrement de l\'utilisateur');
        } else {
            res.status(201).send('Utilisateur enregistré avec succès');
        }
    });
});

// Route pour la connexion des utilisateurs
app.post('/login', (req, res) => {
    const { nom_utilisateur, mot_de_passe } = req.body;
    console.log(req.body);
    const sqlSelect = "SELECT * FROM utilisateurs WHERE nom_utilisateur = ?";

    db.query(sqlSelect, [nom_utilisateur], (err, users) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
        }
        if (users.length === 0) {
            return res.status(401).send('Utilisateur non trouvé');
        } else {
            // Comparaison des mots de passe
            if (users[0].mot_de_passe === mot_de_passe) {
                res.status(200).send({ message: "Connexion réussie", user: users[0] });
            } else {
                return res.status(401).send('Mot de passe incorrect');
            }
        }
    });
});

app.listen(8081, () => {
    console.log("Server is running on port 8081");
});



