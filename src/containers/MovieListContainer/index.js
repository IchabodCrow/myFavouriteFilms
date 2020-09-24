import { connect } from "react-redux";
import { movieList } from "actions/movieListAction";
import { MovieList } from "components/MovieList";

const mapStateToProps = (state) => {
  return {
    movies: state.movieListReducer,
    genresId: state.selectedGenresIdReducer,
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
)(MovieList);

export default MovieListContainer;
