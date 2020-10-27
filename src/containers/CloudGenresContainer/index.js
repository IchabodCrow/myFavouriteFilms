import { connect } from "react-redux";
import { graphql } from "@apollo/react-hoc";

import { CloudGenres } from "components/CloudGenres";
import { selectedGenresId } from "actions/selectedGenresIdAction";
import genresList from "queries/genresList";

const mapDispatchToProps = (dispatch) => {
  return {
    genresIdArr: (genresId) => dispatch(selectedGenresId(genresId)),
  };
};

const CloudGenresContainer = connect(
  null,
  mapDispatchToProps
)(CloudGenres);

export default  graphql(genresList)(CloudGenresContainer);