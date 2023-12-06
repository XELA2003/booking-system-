
import { BrowserRouter as Router, Routes, Route, Link, Form } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './movie.css'
import avengersPoster from './images/avengers-poster.jpg';
import inceptionPoster from './images/inception-poster.jpg';
import DarkKnightPoster from './images/dark-knight-poster.jpg'
import Avatarposter from './images/avatar-poster.jpg'
import TheAvengersPoster from './images/the-avengers-poster.jpg'
import HungerGamesPoster from './images/hunger-games-poster.jpg'
import Endgametrailer from './videos/Endgame-trailer.mp4'
import InceptionTrailer from './videos/Inception-trailer.mp4'
import DarkKnightTrailer from './videos/Dark-Knight-trailer.mp4'



const getMovieSessions = (movieId) => {
    const sessionsMap = [
        ["10:00", "12:00"], // movieId 0
        ["11:00", "13:00"], // movieId 1
        ["11:00", "13:00"], // movieId 2
        ["11:30", "13:00"], // movieId 3
        ["11:00", "13:00"], // movieId 4
        ["11:00", "13:00"], // movieId 5
    ];

    const id = parseInt(movieId, 10); // Convert movieId to a number
    if (id >= 0 && id < sessionsMap.length) {
        return sessionsMap[id];
    }

    return []; // Return an empty array if movieId doesn't match
};

const Moviesessions = ({ sessions }) => (
    <div className="movie-sessions">
        {sessions.map((time, index) => (
            <div key={index} className="session-rectangle">
                {time}
            </div>
        ))}
    </div>
);


const movieDetails = [
    {
        id: 0,
        title: 'Avengers',
        heroColor: 'rgb(28, 4, 68)',
        description: 'A new adventure awaits the Avengers, the titans of the Marvel Cinematic Universe.',

    },
    {
        id: 1,
        title: 'Inception',
        heroColor: 'rgba(71,89,113,255)',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    },
    {
        id: 2,
        title: 'The Dark Knight',
        heroColor: 'rgba(24,85,114,255)',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.',
    },
    {
        id: 3,
        title: 'Avatar',
        description: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
    },
    {
        id: 4,
        title: 'The Avengers',
        description: 'A new adventure awaits the Avengers, the titans of the Marvel Cinematic Universe.',
    }
    //...
];

const moviePosters = {
    0: avengersPoster,
    1: inceptionPoster,
    2: DarkKnightPoster,
    3: Avatarposter,
    4: TheAvengersPoster,
    5: HungerGamesPoster,
    // Add posters for other movies using their respective IDs
};

const movieTrailers = {
    0: Endgametrailer,
    1: InceptionTrailer,
    2: DarkKnightTrailer,
}

const movieImageTrailer = {
    0: 'https://www.radiofrance.fr/s3/cruiser-production/2019/04/6d3b604a-86ce-4cab-8c13-57752df26022/870x489_c6d70da8f19bb009792922e5c751631d-avengers-end-game-le-film-de-tous-les-records.jpg',
    1: 'https://cdn-mds.pickx.be/NewsFolder/w-1200_h-630_smart-1/inception_20210701031637.jpeg',
    2: 'https://img.filmsactu.net/datas/films/t/h/the-dark-knight/xl/481759cdc9032.jpg'
}


const SelectedMovie = ({ movieId }) => {
    const id = parseInt(movieId); // Convert movieId to a number
    const movie = movieDetails.find(movie => movie.id === id);
    const poster = moviePosters[movieId];
    const trailerVideo = movieTrailers[movieId]; // Remplacez ceci par l'URL de votre vidéo de trailer
    const posterImage = movieImageTrailer[movieId];


    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const heroBackgroundStyle = {
        background: `radial-gradient(80% 170% at 70% 25%, transparent 60%, ${movie.heroColor || 'rgb(28, 4, 68)'} 80%)`
    };

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
        videoRef.current.play();
    };

    const handleVideoClick = () => {
        if (!isPlaying) {
            setIsPlaying(true);
            videoRef.current.play();
        } else {
            setIsPlaying(false);
            videoRef.current.pause();
        }
    };

    return (
        <div className="selected-movie">
            <div className="video-container">
                <div class="hero-film-bg" style={heroBackgroundStyle}>
                    <p className='Movie-description'>{movie ? movie.description : 'Description not available'}</p>
                </div>
                <video className="trailer-video" controls poster={posterImage}
                    ref={videoRef}
                    onClick={handleVideoClick}>
                    <source src={trailerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                    <button className="play-button" onClick={handlePlayButtonClick}>
                        Play
                    </button>
                )}
                <img className="poster-overlay" src={poster} alt={`Poster for Movie ${movieId}`} />
            </div>
        </div>
    );
};

const Moviepage = () => {
    const { movieId } = useParams();
    const id = parseInt(movieId); // Convert movieId to a number
    const sessions = getMovieSessions(movieId);
    const [comment, setComment] = useState(''); // État pour stocker le commentaire
    const [submittedComment, setSubmittedComment] = useState(''); // État pour le commentaire soumis
    const [selectedUser, setSelectedUser] = useState(''); // État pour stocker l'utilisateur sélectionné

    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Alice' },
        // Ajoutez d'autres utilisateurs ici
    ];

    const handleCommentSubmit = () => {
        // Vérifie si un utilisateur est sélectionné et qu'un commentaire est saisi
        if (selectedUser && comment) {
            // Crée un nouveau commentaire avec le nom de l'utilisateur et le commentaire saisi
            const newComment = `${selectedUser.name}: ${comment}`;
            // Ajoute le nouveau commentaire à la liste des commentaires soumis
            setSubmittedComment([...submittedComment, newComment]);
            // Réinitialise le champ de commentaire après avoir soumis le commentaire
            setComment('');
        }
    }

    return (
        <div className='movie-page'>
            <div className="movie-info-container">
                <SelectedMovie movieId={id} />
            </div>
            <div className="movie-sessions-container">
                <h2>Sessions today : </h2>
                <Moviesessions sessions={sessions} />
            </div>
            <div className="comments-section">
                <h2>Comments</h2>
                {/* Sélection de l'utilisateur */}
                <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                    <option value="">Select User</option>
                    {users.map((user) => (
                        <option key={user.id} value={user}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <textarea className='comment-input'
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Type your comment here..."
                />
                <br></br>
                <button className='add-comment-button' onClick={handleCommentSubmit}>Add Comment</button>
                {submittedComment.length > 0 && (
                    <div className="submitted-comments">
                        <h3 className='Submitted-comment'>Submitted Comments:</h3>
                        {submittedComment.map((comment, index) => (
                            <p key={index}>{comment}</p>
                        ))}
                    </div>
                )}
            </div>
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Moviepage

