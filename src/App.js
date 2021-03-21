import PropTypes from 'prop-types';

function Food({ name, imgsrc, rating }) {
  return (
    <div>
      <h1>I like {name}!</h1>
      <h4>{rating}/5.0</h4>
      <img src={imgsrc} alt={name} />
    </div>
  );
}

// props를 좀 더 정확히 받아오기 위해 검사하는 도구
Food.propTypes = {
  name: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 3.1,
  },
  {
    id: 5,
    name: 'Kimbap',
    image:
      'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 4.8,
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map((item) => (
        <Food
          name={item.name}
          imgsrc={item.image}
          key={item.id}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default App;
