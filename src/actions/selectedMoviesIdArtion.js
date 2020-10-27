import { SELECTED_MOVIES_ID } from "./actionsConst"

export const selectedMoviesId = moviesId => {
  return dispatch => {
    dispatch(selectedGenresIdReceived(moviesId))
  }
} 

export const selectedGenresIdReceived = moviesId => {
  return {
    type: SELECTED_MOVIES_ID,
    payload: moviesId,
  };
}