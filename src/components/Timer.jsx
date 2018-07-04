import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
    };

    this.nTimer = setInterval(this.tick, 1000);
  }

  tick = () => {
    if (moment() > moment(this.props.expireDate)) {
      alert('종료되었습니다.');
      clearInterval(this.nTimer);
    }
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div>현재시간은 {moment().format('A h:mm')} </div>
        <div>{moment(this.props.expireDate).fromNow()}에 강의 종료합니다.</div>
      </div>
    );
  }
}

export default Timer;
