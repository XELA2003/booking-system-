import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './homepage.css'




const movieImages = [
    'https://cdn.europosters.eu/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg',
    'https://m.media-amazon.com/images/I/61xzvfJiNkL._AC_UF894,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    'https://m.media-amazon.com/images/I/61uspTokDBL._AC_UF894,1000_QL80_.jpg',
    'https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg',
    'https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_FMjpg_UX1000_.jpg'
];


const movieDetails = [
    {
        id: 0,
        title: 'Avengers',
        description: 'A new adventure awaits the Avenger, the titans of the Marvel Cinematic Universe.',
    },
    {
        id: 1,
        title: 'Inception',
        decription: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    },
    {
        id: 2,
        title: 'The Dark Knight',
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
    },
    {
        id: 5,
        title: 'Hunger games',
        description: 'From the Louvre to Buckingham Palace, from the depths of Paris to the siege of La Rochelle... In a Kingdom divided by religious wars and threatened with invasion by England, a handful of men and women will cross their swords and intertwine their destinies with that of France.'
    }
    //...
];

const MovieList = () => {
    const movieTitles = movieDetails.map(movie => movie.title);

    return (
        <div className="movie-list">
            <h2>Now showing:</h2>
            <div className="movies">
                {movieImages.map((image, index) => (
                    <Link to={`/movies/${index}`} key={index}>
                        <div className="movie" style={{ backgroundImage: `url(${image})` }}>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};


const FeaturedMovie = () => (
    <div className="featured-movie">
        <div className='featured-movie-title'>
        </div>
        <button className="book-now-btn">Book now</button>
    </div>
);


// HomePage component
const HomePage = () => (
    <div className="main" style={{ height: '100vh', overflowY: 'auto' }}>
        <FeaturedMovie />
        <footer className="footer">
            <MovieList />
            {/* Footer content goes here */}
        </footer>
    </div>
);

export default HomePage