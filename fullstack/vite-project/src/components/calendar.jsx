import { useState, useRef } from 'react';
import './calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const calendarRef = useRef();

    const days = [];

    // Logic to generate array of days for the month

    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    const handlePrevMonth = () => {
        const prevMonth = new Date(currentDate);
        prevMonth.setMonth(prevMonth.getMonth() - 1);
        setCurrentDate(prevMonth);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentDate);
        nextMonth.setMonth(nextMonth.getMonth() + 1);
        setCurrentDate(nextMonth);
    };

    const toggleCalendar = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleBlur = (e) => {
        if (!calendarRef.current.contains(e.relatedTarget)) {
            setIsCalendarOpen(false);
        }
    };

    return (
        <div className="App">
            <button onClick={toggleCalendar}>Open Calendar</button>
            <div ref={calendarRef} className={`calendar ${isCalendarOpen ? 'open' : ''}`} onBlur={handleBlur}>
                <div className="header">
                    <button onClick={handlePrevMonth}>Prev</button>
                    <h2>{currentMonth}</h2>
                    <button onClick={handleNextMonth}>Next</button>
                </div>

                <div className="days">
                    {days.map((day) => (
                        <div
                            className="day"
                            key={day.date}
                        >
                            {/* display day */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;