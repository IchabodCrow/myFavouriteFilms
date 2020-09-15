import { GENRES_LIST} from "actions/actionsConst";

const InitialState = {
  genres: [],
};

const cloudGenresReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GENRES_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default cloudGenresReducer;