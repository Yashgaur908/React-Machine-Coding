import React, { useState } from 'react';

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    let filledStyle = {
        backgroundColor: 'green',
        height: '100%',
        width: `${progress}%`,
        transition: 'width 0.5s ease-in-out',
    };

    let barStyle = {
        height: '20px',
        width: '1000px',
        border: '1px solid black',
        overflow: 'hidden',
        margin: 'auto',
        marginTop: '10px', 
    };

    const handleInput = (event) => {
        setInputValue(event.target.value)
    }

    const handleClick = () => {
        setProgress(1 * inputValue);
    };

    return (
        <>
            <input type='text' onChange={handleInput}/>
            <button onClick={handleClick}>Submit</button>
            <div style={barStyle}>
                <div style={filledStyle}></div>
            </div>
        </>
    );
};

export default ProgressBar;
