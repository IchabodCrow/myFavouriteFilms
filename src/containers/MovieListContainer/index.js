import { connect } from "react-redux";
import { graphql } from "@apollo/react-hoc";

import { MovieList } from "components/MovieList";
import { selectedMoviesId } from "../../actions/selectedMoviesIdAction";
import  movieList from "../../queries/movieList"

const mapStateToProps = (state) => {
  return {
    genresId: state.selectedGenresIdReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moviesIdArr: moviesId => dispatch(selectedMoviesId(moviesId))
  }
}

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default graphql(movieList)(MovieListContainer)