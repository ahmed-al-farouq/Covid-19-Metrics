import {
  START_FETCHING_CONTINENTS,
  FETCHING_CONTINENTS_SUCCEED,
  FETCHING_CONTINENTS_FAILD,
  GET_SINGLE_CONTINENT,
} from './continentsActions';

const initState = {
  loading: false,
  continents: [],
  continent: {},
  error: '',
};

const continentsReducer = (state = initState, action) => {
  switch (action.type) {
    case START_FETCHING_CONTINENTS:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_CONTINENTS_SUCCEED:
      return {
        ...state,
        loading: false,
        continents: action.payload,
      };
    case FETCHING_CONTINENTS_FAILD:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_SINGLE_CONTINENT:
      return {
        ...state,
        continent: action.payload,
      };
    default:
      return state;
  }
};

export default continentsReducer;
