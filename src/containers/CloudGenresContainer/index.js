import { connect } from "react-redux";
import { CloudGenres } from "components/CloudGenres";
import { genresList } from "actions/genresListAction";
import { selectedGenresId } from "actions/selectedGenresIdAction";

const mapStateToProps = (state) => {
  return {
    genres: state.cloudGenresReducer.genres,
    genresId: state.cloudGenresReducer.genresId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    genresList: () => dispatch(genresList(null)),
    genresIdArr: (genresId) => dispatch(selectedGenresId(genresId)),
  };
};

const CloudGenresContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CloudGenres);

export default CloudGenresContainer;
