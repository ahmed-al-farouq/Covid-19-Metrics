export const START_FETCHING_COUNTRIES = 'START_FETCHING_COUNTRIES';
export const FETCHING_COUNTRIES_SUCCEED = 'FETCHING_COUNTRIES_SUCCEED';
export const FETCHING_COUNTRIES_FAILD = 'FETCHING_COUNTRIES_FAILD';

export const startFetchingCountries = () => ({
  type: START_FETCHING_COUNTRIES,
  payload: true,
});

export const fetchingCountriesSucceed = (countries) => ({
  type: FETCHING_COUNTRIES_SUCCEED,
  payload: countries,
});

export const fetchingCountriesFaild = (error) => ({
  type: FETCHING_COUNTRIES_FAILD,
  payload: error,
});
