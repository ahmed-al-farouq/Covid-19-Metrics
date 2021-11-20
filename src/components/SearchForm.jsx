import React, { useRef } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Form, SearchIcon, Invalid } from '../styling/home';

const SearchForm = ({ setContinent }) => {
  const inputRef = useRef();
  const InvalidRef = useRef();
  const handelSearch = (e) => {
    e.preventDefault();
    if (inputRef.current.value === '') {
      InvalidRef.current.classList.remove('d-none');
      InvalidRef.current.innerHTML = 'Invalid Value, it can not be empty';
    } else if (inputRef.current.value.charAt(0).search(/[A-Z]/) === -1) {
      InvalidRef.current.classList.remove('d-none');
      InvalidRef.current.innerHTML = 'Invalid Value, First Letter should be capital';
    } else {
      InvalidRef.current.classList.add('d-none');
      setContinent(inputRef.current.value);
    }
  };

  return (
    <Form onSubmit={handelSearch}>
      <input list="continent" placeholder="Type a continent name" ref={inputRef} />
      <datalist id="continent">
        <option value="Africa" label="Africa" />
        <option value="Asia" label="Asia" />
        <option value="Europe" label="Europe" />
        <option value="Australia-Oceania" label="Australia-Oceania" />
        <option value="North America" label="North America" />
        <option value="South America" label="South America" />
      </datalist>
      <SearchIcon onClick={handelSearch}>
        <BiSearchAlt2 />
      </SearchIcon>
      <Invalid ref={InvalidRef} className="d-none">
        /
      </Invalid>
    </Form>
  );
};

SearchForm.propTypes = {
  setContinent: PropTypes.func.isRequired,
};

export default SearchForm;
