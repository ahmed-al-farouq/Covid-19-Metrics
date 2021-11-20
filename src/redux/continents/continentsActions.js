export const START_FETCHING_CONTINENTS = 'START_FETCHING_CONTINENTS';
export const FETCHING_CONTINENTS_SUCCEED = 'FETCHING_CONTINENTS_SUCCEED';
export const FETCHING_CONTINENTS_FAILD = 'FETCHING_CONTINENTS_FAILD';
export const GET_SINGLE_CONTINENT = 'GET_SINGLE_CONTINENT';

export const startFetchingContinents = () => ({
  type: START_FETCHING_CONTINENTS,
  payload: true,
});

export const fetchingContinentsSucceed = (continent) => ({
  type: FETCHING_CONTINENTS_SUCCEED,
  payload: continent,
});

export const fetchingContinentsFaild = (error) => ({
  type: FETCHING_CONTINENTS_FAILD,
  payload: error,
});

export const getSingleContinent = (continent) => ({
  type: GET_SINGLE_CONTINENT,
  payload: continent,
});
