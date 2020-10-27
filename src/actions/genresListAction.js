import { movieGenres } from "../services/queriesTMDB";
import { GENRES_LIST } from "actions/actionsConst.js"

export const genresList = () => {
  return (dispatch) => { movieGenres().then((genres) => dispatch(genresListReceived(genres))).catch(error => console.log(error));
  };
};

export const genresListReceived = (genres) => {
  return {
    type: "GENRES_LIST",
    payload: genres,
  };
};