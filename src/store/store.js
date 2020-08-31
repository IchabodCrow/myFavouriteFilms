import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'

const middelewares = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
trace: true,
raceLimit: 55,
}) : compose;

const reducers = combineReducers({
    form: formReducer
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middelewares)));

export default store