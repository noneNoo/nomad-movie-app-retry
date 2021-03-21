// class 컴포넌트를 사용하기 위해서는 react를 가져와야 한다
import React from 'react';
// import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    isLoading: true,
    // 아래처럼 미리 선언하지 않아도 없는 state를 추가하는 것엔 문제가 없다.
    movie: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready!'}</div>;
  }
}

export default App;
