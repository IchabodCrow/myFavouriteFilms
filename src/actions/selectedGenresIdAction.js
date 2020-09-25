import { SELECTED_GENRES_ID } from "./actionsConst";

export const selectedGenresId = (genresId) => {
  return (dispatch) => {
    dispatch(selectedGenresIdReceived(genresId))
  };
};

export const selectedGenresIdReceived = (genresId) => {
  return {
    type: SELECTED_GENRES_ID,
    payload: genresId,
  };
};