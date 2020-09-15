import {MOVIE_LIST} from "actions/actionsConst"

const InitialState = {
  results: [],
};

const movieListReducer = (state = InitialState, action) => {
  switch (action.type) {
    case MOVIE_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default movieListReducer;