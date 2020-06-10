import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import TimerBlock from './components/TimerBlock';
import TimeSelectors from './components/TimeSelectors';
import soundfile from './audio/ding.wav'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 25,
      },
      timerIsRunning: false,
      timeRemaining: 1500,
      pomodoroCounter: 0,
      workStatus: 'work'
    };
    this.tick = this.tick.bind(this);
    document.body.style.backgroundColor = "#ff2727"
  }

  tick() {
    let timeRemaining = this.state.timeRemaining;

    timeRemaining > 0 ? this.setState({timeRemaining: timeRemaining - 1}) : this.changeWorkStatus();
  }

  playAudio() {
    const ding = document.getElementsByClassName("ding")[0];
    ding.play();
  }

  changeWorkStatus() {

    this.playAudio();
    clearInterval(this.intervalHandle);

    if (this.state.workStatus === 'work') {
      
      this.setState({
        workStatus: 'break',
        pomodoroCounter: this.state.pomodoroCounter + 1
      });

      if (this.state.pomodoroCounter < 4) {
        this.setState({
          timeRemaining: this.state.timers.shortBreakTime * 60,
        });
        document.body.style.backgroundColor = "#0080f5"
      } else {
        this.setState({
          timeRemaining: this.state.timers.longBreakTime * 60,
        });
        document.body.style.backgroundColor = "#00599e"
      }
    } else {
      let count = this.state.pomodoroCounter === 4 ? 0 : this.state.pomodoroCounter;

      this.setState({
        workStatus: 'work',
        timeRemaining: this.state.timers.workTime * 60,
        pomodoroCounter: count
      });
      document.body.style.backgroundColor = "#ff2727"
    }
    this.startTimer();
  }

  workTimeChange(value) {
    this.stopTimer();

    const resetValues = {
      timers: {
        workTime: parseInt(value),
        shortBreakTime: this.state.timers.shortBreakTime,
        longBreakTime: this.state.timers.longBreakTime
      },
      timerIsRunning: false,
      pomodoroCounter: 0,
      timeRemaining: value * 60,
      workStatus: 'work'
    };
    this.setState(resetValues);
    document.body.style.backgroundColor = "#ff2727"
  }

  shortBreakChange(value) {
    this.stopTimer();

    const resetValues = {
      timers: {
        workTime: this.state.timers.workTime,
        shortBreakTime: parseInt(value),
        longBreakTime: this.state.timers.longBreakTime
      },
      timerIsRunning: false,
      pomodoroCounter: 0,
      timeRemaining: this.state.timers.workTime * 60,
      workStatus: 'work'
    };
    this.setState(resetValues);
    document.body.style.backgroundColor = "#ff2727"
  }

  longBreakChange(value) {
    this.stopTimer();

    const resetValues = {
      timers: {
        workTime: this.state.timers.workTime,
        shortBreakTime: this.state.timers.shortBreakTime,
        longBreakTime: parseInt(value),
      },
      timerIsRunning: false,
      pomodoroCounter: 0,
      timeRemaining: this.state.timers.workTime * 60,
      workStatus: 'work'
    };
    this.setState(resetValues);
    document.body.style.backgroundColor = "#ff2727"
  }

  changeStatus() {
    if (this.state.timerIsRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
    this.setState({ timerIsRunning: !(this.state.timerIsRunning)});
  }

  startTimer() {
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  stopTimer () {
    clearInterval(this.intervalHandle);
  }

  resetTimer() {
    const resetValues = {
      timers: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 25,
      },
      timerIsRunning: false,
      timeRemaining: 1500,
      pomodoroCounter: 0
    };
    clearInterval(this.intervalHandle);
    this.setState(resetValues);
    document.body.style.backgroundColor = "#ff2727"
  }

  render() {
    return (
      <>
      <div className="App">
        <Header />
        <TimerBlock 
          timeRemaining={this.state.timeRemaining}
          timerState={this.state.timerIsRunning}
          onStatusClick={this.changeStatus.bind(this)}
          onResetClick={this.resetTimer.bind(this)}
          pomodoroCounter={this.state.pomodoroCounter}
        />
        <TimeSelectors
          onWorkTimeChange={this.workTimeChange.bind(this)}
          onShortBreakChange={this.shortBreakChange.bind(this)}
          onLongBreakChange={this.longBreakChange.bind(this)}
          timers={this.state.timers}
        />
      </div>
      <audio className='ding'>
        <source src={soundfile}></source>
      </audio>
      </>
    );
  }
  
  
}

export default App;
