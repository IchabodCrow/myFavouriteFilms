import { movieListWithFilters } from "services/queriesTMDB";
import { MOVIE_LIST } from "./actionsConst";

export const movieList = (genres) => {
  return (dispatch) => { movieListWithFilters(genres).then((movies) =>
      dispatch(movieListReceived(movies))
    ).catch( error => console.log(error))
  };
};

export const movieListReceived = (movies) => {
  return {
    type: MOVIE_LIST,
    payload: movies,
  };
};