import { connect } from "react-redux";
import { graphql } from "@apollo/react-hoc";
import movieList from "../../queries/movieList"

import { MovieList } from "components/MovieList";

const mapStateToProps = (state) => {
  return {
    genresId: state.selectedGenresIdReducer,
  };
};

const MovieListContainer = connect(
  mapStateToProps,
  null
)(MovieList);

export default graphql(movieList)(MovieListContainer)