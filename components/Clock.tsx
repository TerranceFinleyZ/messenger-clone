import './Clock.css';
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formatTime = () => { // Make formatTime a const
        let hours = time.getHours();
        const minutes = time.getMinutes();
        hours = hours % 12 || 12;

        return `${hours}:${padZero(minutes)}`;
    };

    const padZero = (number: number) => { // Type the number parameter
        return (number < 10 ? "0" : "") + number;
    };

    return (
        <div className='clock-container'>
            <div className='clocks'>
                <span>{formatTime()}</span>
            </div>
        </div>
    );
};

export default Clock;