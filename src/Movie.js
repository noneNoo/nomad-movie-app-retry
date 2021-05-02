import React from 'react';
import PropTypes from 'prop-types';

// state가 필요없기 때문에 함수형 컴포넌트 사용
function Movie({ id, year, title, summary, poster }) {
  return <h1>{title}</h1>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
