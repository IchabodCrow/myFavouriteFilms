import { SELECTED_MOVIES_ID } from "../actions/actionsConst";

const InitialState = [];
const selectedMoviesIdReducer = (state = InitialState, action) => {
  switch (action.type) {
    case SELECTED_MOVIES_ID:
      return action.payload;
    default:
      return state;
  }
};

export default selectedMoviesIdReducer;