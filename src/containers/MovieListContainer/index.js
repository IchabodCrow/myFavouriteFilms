const { connect } = require("react-redux");
const { movieList } = require("../../actions/movieListAction");
const { MovieList } = require("../../components/MovieList");

const mapStateToProps = (state) => {
  return {
    movies: state.movieListReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moviesList: (genres) => dispatch(movieList(genres)),
  };
};

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

export default MovieListContainer