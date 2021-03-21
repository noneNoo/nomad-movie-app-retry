// class 컴포넌트를 사용하기 위해서는 react를 가져와야 한다
import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {
  // 바꾸고 싶은 데이터를 담는 state
  state = {
    count: 0,
  };

  // class 내부에서 함수를 추가하기
  add = () => {
    console.log('Add!');
  };
  minus = () => {
    console.log('Minus');
  };

  render() {
    return (
      <div>
        <h1>The Number is ... {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
