import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'

import selectedGenresIdReducer from 'reducers/selectedGenresIdReducer'
import selectedMoviesIdReducer from 'reducers/selectedMoviesIdReducer'

const middelewares = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
trace: true,
raceLimit: 55,
}) : compose;

const reducers = combineReducers({
  selectedGenresIdReducer,
  selectedMoviesIdReducer
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middelewares)));

export default store