import { fetchingContinentsFaild, fetchingContinentsSucceed, startFetchingContinents } from '../redux/continents/continentsActions';

const fetchContinents = () => async (dispatch) => {
  dispatch(startFetchingContinents());
  await fetch('https://disease.sh/v3/covid-19/continents')
    .then((res) => res.json())
    .then((continent) => {
      const selectedContinent = continent.map((continent) => ({
        name: continent.continent,
        deaths: continent.deaths,
      }));
      dispatch(fetchingContinentsSucceed(selectedContinent));
    })
    .catch((err) => dispatch(fetchingContinentsFaild(err)));
};

export default fetchContinents;

/*
  fetchContinents ==> name, deaths
  fetchCountries ==> id, name, deaths, flag
*/
