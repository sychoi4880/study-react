import React, { Component } from 'react';
import moment from 'moment';
import LectureGoalList from './components/LectureGoalList';
import Timer from './components/Timer';
import logo from './logo.svg';
import './App.css';

const goals = [
  'React 개발에 필요한 환경을 구축한다. ',
  '새로운 자바스크립트 문법을 익힌다. ',
  '개발 편의를 위한 VSCode IDE를 익힌다. ',
];

class App extends Component {
  state = {
    isExpired: false,
  };

  handleComplete = () => {
    // 자식이 종료되고 1초 후에
    this.setState({ isExpired: true });
    console.log('timer 종료되고 1초 경과');
  };

  render() {
    //const isExpired = moment('2018-07-04T17:00:00+09:00') < moment();
    const { isExpired } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.handleClick} />
          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <LectureGoalList items={goals} title={'강의 목표'} />
        {!isExpired && <Timer expireDate={'2018-07-04T16:10:00+09:00'} onComplete={this.handleComplete} />}
      </div>
    );
  }
}

export default App;
