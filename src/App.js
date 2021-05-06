// class 컴포넌트를 사용하기 위해서는 react를 가져와야 한다
import React from 'react';
import axios from 'axios';
import Movie from './Movie';
// import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    isLoading: true,
    // 아래처럼 미리 선언하지 않아도 없는 state를 추가하는 것엔 문제가 없다.
    movies: [],
  };
  // async 함수 내에 뭔가 기다려야 할 것이 있다고 선언
  getMovies = async () => {
    // await 무엇을 기다릴지 지목
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating'
    );

    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((item) => {
              {
                console.log(item);
              }
              return (
                <Movie
                  key={item.id}
                  id={item.id}
                  year={item.year}
                  title={item.title}
                  summary={item.summary}
                  poster={item.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
