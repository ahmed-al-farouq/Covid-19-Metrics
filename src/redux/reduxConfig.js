import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/countriesReducer';
import continentsReducer from './continents/continentsReducer';
import fetchCountries from '../fetchingData/fetchCountries';
import fetchContinents from '../fetchingData/fetchContinents';

const rootReducer = combineReducers({
  countriesReducer,
  continentsReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fetchContinents());
store.dispatch(fetchCountries());
export default store;
