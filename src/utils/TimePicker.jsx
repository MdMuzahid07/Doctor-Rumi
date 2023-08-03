import React, { useState } from 'react';

const TimePicker = () => {
    const [hours, setHours] = useState('12');
    const [minutes, setMinutes] = useState('00');
    const [isAM, setIsAM] = useState(true);

    const handleHourChange = (e) => {
        setHours(e.target.value);
    };

    const handleMinuteChange = (e) => {
        setMinutes(e.target.value);
    };

    const toggleAMPM = () => {
        setIsAM((prevIsAM) => !prevIsAM);
    };

    return (
        <div className="flex items-center justify-center p-5 rounded-lg bg-white mt-10">
            <select
                value={hours}
                onChange={handleHourChange}
                className="w-20 px-2 py-2 bg-white"
            >
                {Array.from({ length: 12 }, (_, index) => index + 1).map((hour) => (
                    <option key={`hour-${hour}`} value={hour}>
                        {hour}
                    </option>
                ))}
            </select>
            <span className="px-2">:</span>
            <select
                value={minutes}
                onChange={handleMinuteChange}
                className="w-20 px-2 py-2  bg-white "
            >
                {Array.from({ length: 60 }, (_, index) => index).map((minute) => (
                    <option key={`minute-${minute}`} value={minute.toString().padStart(2, '0')}>
                        {minute.toString().padStart(2, '0')}
                    </option>
                ))}
            </select>
            <button onClick={toggleAMPM} className="px-7 py-2 ml-2">
                {isAM ? 'AM' : 'PM'}
            </button>
        </div>
    );
};

export default TimePicker;
