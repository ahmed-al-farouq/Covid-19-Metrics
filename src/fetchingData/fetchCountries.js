/* eslint-disable quotes */
/* eslint-disable dot-notation */
import { fetchingCountriesFaild, fetchingCountriesSucceed, startFetchingCountries } from '../redux/countries/countriesActions';

const fetchCountries = () => async (dispatch) => {
  dispatch(startFetchingCountries());
  await fetch('https://disease.sh/v3/covid-19/countries')
    .then((res) => res.json())
    .then((countries) => {
      const selectedCountries = countries.map((country) => ({
        id: country.countryInfo["_id"],
        name: country.country,
        flag: country.countryInfo.flag,
        deaths: country.deaths,
        continent: country.continent,
      }));
      dispatch(fetchingCountriesSucceed(selectedCountries));
    })
    .catch((err) => dispatch(fetchingCountriesFaild(err)));
};

export default fetchCountries;
