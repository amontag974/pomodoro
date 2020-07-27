import React from 'react';
import Selector from './Selector';

function TimeSelectors(props) {
    return(
        <div className="selector-container">
            <Selector
                minTime='25'
                maxTime='30'
                description='Work-Time'
                onChange={props.onWorkTimeChange}
                value={props.timers.workTime}
            />
            <Selector
                minTime='5'
                maxTime='10'
                description='Short-Break'
                onChange={props.onShortBreakChange}
                value={props.timers.shortBreakTime}
            />
            <Selector
                minTime='20'
                maxTime='30'
                description='Long-Break'
                onChange={props.onLongBreakChange}
                value={props.timers.longBreakTime}
            />
        </div>
        
    );
}

export default TimeSelectors;