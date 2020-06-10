import React from 'react';
import '../styles/Timer.css'

class Timer extends React.Component {

    render() {
        let minutes = Math.floor(this.props.timeRemaining / 60).toString();
        let seconds = (this.props.timeRemaining % 60).toString();

        if (minutes.length === 1) {
            minutes = "0" + minutes;
        }

        if (seconds.length === 1) {
            seconds = "0" + seconds;
        }

        return (
            <h1 className='timer'>{minutes}:{seconds}</h1>
        )


    }
}

export default Timer;