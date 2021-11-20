import {
  START_FETCHING_COUNTRIES,
  FETCHING_COUNTRIES_SUCCEED,
  FETCHING_COUNTRIES_FAILD,
} from './countriesActions';

const initState = {
  loading: false,
  countries: [],
  error: '',
};

const countriesReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCHING_COUNTRIES:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_COUNTRIES_SUCCEED:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case FETCHING_COUNTRIES_FAILD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
