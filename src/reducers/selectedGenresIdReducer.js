import { SELECTED_GENRES_ID } from "actions/actionsConst";

const InitialState = [];

const selectedGenresIdReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SELECTED_GENRES_ID:
      return action.payload;
    default:
      return state;
  }
};

export default selectedGenresIdReducer;