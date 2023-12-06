
import { useState } from 'react';
import Calendar from './calendar';


// MovieList component
const Moviesessions = () => {

    const sessionTimes = ["12:30", "14:30", "16:30", "18:30"];

    return (
        <div className="movie-list">
            <h2>Today's sessions:</h2>

            <div className="movies-sessions">
                {sessionTimes.map((time, index) => (
                    <div key={index} className={`session-rectangle-${index}`}>
                        {time}
                    </div>
                ))}
            </div>
        </div>
    );
}

// FeaturedMovie component
const SelectedMovie = () => (
    <div className="selected-movie">
        <h1>Movie name</h1>

        <div className='movie-little-infos'>
            <h2>1h30/Action</h2>
        </div>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla elit,
            ullamcorper nec consequat non, sodales at lectus. Fusce sagittis nisl non velit porta ornare.
        </p>

        <p id="release">Release date : 12/12/12</p>


    </div>
);



// Moviepage component
const Moviepage = () => {

    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <div className="main">

            <SelectedMovie />

            <footer className="footer">

                <div
                    className="calendar-btn"
                    onClick={() => setShowCalendar(true)}
                >
                    Calendar
                </div>

                {showCalendar && (
                    <div className="calendar-popup">
                        <Calendar />
                    </div>
                )}

                <Moviesessions />

                {/* Rest of footer */}

            </footer>

        </div>
    );
}

export default Moviepage