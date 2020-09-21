import { connect } from "react-redux";
import CloudGenres from "../../components/CloudGenres";
import { genresList } from "../../actions/genresListAction";

const mapStateToProps = (state) => {
  return {
    genres: state.cloudGenresReducer.genres,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    genresList: () => dispatch(genresList(null)),
  };
};

const CloudGenresContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CloudGenres);

export default CloudGenresContainer;
