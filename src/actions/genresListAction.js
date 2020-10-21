import { movieGenres } from "../services/queriesTMDB";
import { GENRES_LIST } from "./actionsConst"

export const genresList = () => {
  return (dispatch) => {
    console.log()
    movieGenres().then((genres) => dispatch(genresListReceived(genres)));
  };
};

export const genresListReceived = (genres) => {
  return {
    type: GENRES_LIST,
    payload: genres,
  };
};