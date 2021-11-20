import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import {
  Li,
  Ul,
  Img,
  Details,
  Name,
  Deaths,
  Seperator,
  Button,
} from '../styling/home';
import SearchForm from './SearchForm';
import { getSingleContinent } from '../redux/continents/continentsActions';
// Images
import Africa from '../imgs/Africa.png';
import Asia from '../imgs/Asia.png';
import Europe from '../imgs/Europe.png';
import Australia from '../imgs/Australia-Oceania.png';
import NorthAmerica from '../imgs/North America.png';
import SouthAmerica from '../imgs/South America.png';
import world from '../imgs/world.png';

const Home = () => {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continentsReducer.continents);
  const [searchContinent, setSearchContinent] = useState('');
  const continentsShape = [Africa, Asia, Europe, Australia, NorthAmerica, SouthAmerica];
  const clearFilter = () => {
    setSearchContinent('');
  };
  return (
    <>
      <SearchForm setContinent={setSearchContinent} />
      <Ul>
        <Li>
          <Img src={world} alt="World" data-testid="img" />
          <Details>
            <Name data-testid="continent">
              The whole world
            </Name>
            <Deaths>
              7231690 deaths
            </Deaths>
          </Details>
        </Li>
        <Seperator>States By Continent</Seperator>
        {
          searchContinent === ''
            ? continents.map((continent) => continentsShape.map((image) => (
              image.search(continent.name) !== -1
                ? (
                  <Fragment key={continent.name}>
                    <Li>
                      <NavLink to="/details" onClick={() => dispatch(getSingleContinent(continent))}>
                        <BsArrowRightCircle />
                        <Img src={image} alt={continent.name} />
                        <Details>
                          <Name>
                            {continent.name}
                          </Name>
                          <Deaths>
                            {
                                `${continent.deaths} `
                            }
                          </Deaths>
                        </Details>
                      </NavLink>
                    </Li>
                  </Fragment>
                )
                : null
            )))
            : continents.map((continent) => {
              if (continent.name === searchContinent) {
                return (
                  <>
                    <Button type="button" onClick={clearFilter} key="filter">
                      Go back ==
                      {'>'}
                    </Button>
                    {
                      continentsShape.map((image) => (
                        image.search(continent.name) !== -1
                          ? (
                            <Li key={continent.name}>
                              <NavLink
                                to="/details"
                                onClick={() => dispatch(getSingleContinent(continent))}
                              >
                                <BsArrowRightCircle />
                                <Img src={image} alt={continent.name} />
                                <Details>
                                  <Name>
                                    {continent.name}
                                  </Name>
                                  <Deaths>
                                    {
                                      `${continent.deaths} `
                                    }
                                  </Deaths>
                                </Details>
                              </NavLink>
                            </Li>
                          )
                          : null
                      ))
                    }
                  </>
                );
              }
              return null;
            })
            }
      </Ul>
    </>
  );
};

export default Home;
