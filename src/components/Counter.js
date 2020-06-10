import React from 'react';

function Counter(props) {
    return (
        <p>{props.pomodoroCounter.toString()}/4</p>
    );
}

export default Counter;