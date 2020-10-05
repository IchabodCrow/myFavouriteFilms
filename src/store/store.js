import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'

import cloudGenresReducer from 'reducers/cloudGenresReducer'
import movieListReducer from 'reducers/movieListReducer'
import selectedGenresIdReducer from 'reducers/selectedGenresIdReducer'

const middelewares = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
trace: true,
raceLimit: 55,
}) : compose;

const reducers = combineReducers({
  cloudGenresReducer,
  movieListReducer,
  selectedGenresIdReducer,
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middelewares)));

export default store