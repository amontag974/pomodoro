import React from 'react';
import Timer from './Timer';
import Button from './Button';
import Counter from './Counter'
import '../styles/TimerBlock.css'

function TimerBlock(props) {

    let status = props.timerState ? 'STOP' : 'START'

    return(
        <div className='timer-block'>
            <Timer 
                timeRemaining={props.timeRemaining}
            />
            <Button 
                text={status}
                onClick={props.onStatusClick}
            />
            <Button 
                text='RESET'
                onClick={props.onResetClick}
            />
            <Counter 
                pomodoroCounter={props.pomodoroCounter}
            />
        </div>
    );
}

export default TimerBlock;