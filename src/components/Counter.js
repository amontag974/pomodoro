import React from 'react';

function Counter(props) {
    return (
        <p className='counter'>{props.pomodoroCounter.toString()}/4</p>
    );
}

export default Counter;