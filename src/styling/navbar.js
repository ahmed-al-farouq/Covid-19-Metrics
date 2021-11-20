import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #4369b2;
`;

export const Logo = styled.img`
  width: 180px;
  @media screen and (max-width: 991px) {
    width: 140px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 40%;

  li a {
    color: #fff;
    font-family: gill-sans, sans-serif;
    font-size: 18px;
    text-decoration: none;
  }

  li a.active {
    text-decoration: underline;
  }
`;
