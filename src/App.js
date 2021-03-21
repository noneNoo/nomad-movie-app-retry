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
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  // 컴포넌트를 render 하기
  render() {
    console.log('start rendering...!');
    return (
      <div>
        <h1>The Number is ... {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }

  // 컴포넌트 생성시 렌더링 된 후
  componentDidMount() {
    console.log('component rendered!');
  }

  // 컴포넌트 업데이트시 렌더링 된 후
  componentDidUpdate() {
    console.log('I just Updated!');
  }

  // 컴포넌트가 제거될 시
  componentWillUnmount() {
    console.log('byebye');
  }
}

export default App;
