import { movieGenres } from "../services/queriesTMDB";

export const GENRES_LIST = "GENRES_LIST";

export const genresList = () => {
  return (dispatch) => {
    movieGenres().then((genres) => dispatch(genresListReceived(genres)));
  };
};

export const genresListReceived = (genres) => {
  return {
    type: GENRES_LIST,
    payload: genres,
  };
};
