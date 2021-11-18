import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/logo.png';
import { Header, Logo, List } from '../styling/navbar';

const Navbar = () => (
  <Header>
    <Logo src={logo} alt="logo" />
    <List>
      <li>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
      </li>
    </List>
  </Header>
);

export default Navbar;
