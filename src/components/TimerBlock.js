import React from 'react';
import Timer from './Timer';
import Button from './Button';
import Counter from './Counter';
import WorkStatus from './WorkStatus';
import '../styles/TimerBlock.css';

function TimerBlock(props) {

    let status = props.timerState ? 'STOP' : 'START'
    let workStatus;

    if (props.workStatus === 'work') {
        workStatus = 'Time to work!'
    } else {
        workStatus = props.pomodoroCounter < 4 ? 'Take a quick breather' : 'Take a long break'
    }

    return(
        <div className='timer-block'>
            <WorkStatus 
                workStatus={workStatus}
            />
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