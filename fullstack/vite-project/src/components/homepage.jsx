import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./homepage.css";


const movieImages = [
    '/images/calendar.png',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
];


// MovieList component
const MovieList = () => (
    <div className="movie-list">
        <h2>Now showing :</h2>
        <div className="movies">
            {movieImages.map((image, index) => (
                <Link to='/movies' key={index}>
                    <div className="movie">
                        <img src={image} alt={`Movie ${index + 1}`} />
                    </div>
                </Link>
            ))}
        </div>
    </div>
);


// FeaturedMovie component
// FeaturedMovie component
// FeaturedMovie component
const FeaturedMovie = () => (
    <div className="featured-movie">
        <div className="movie-info-overlay">
            <h1 className="movie-title">Napoleon</h1>
            <p className="movie-subtitle">The Newest Saga</p>
            <button className="book-now-btn">Book now</button>
        </div>
    </div>
);




// HomePage component
const HomePage = () => (
    <div className="main" style={{ height: '100vh'}}>
        <FeaturedMovie />
        <footer className="footer">
            <MovieList />
            <MovieList />
            <MovieList />

            {/* Footer content goes here */}
        </footer>
    </div>
);

export default HomePage