import styled from 'styled-components';

export const Img = styled.img`
  width: 130px !important;
`;

export const Li = styled.li`
  background-color: #5586e3;
  cursor: pointer;
  padding: 30px 0;
  width: 100%;
  height: 100px;
  background: #3e61a3;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:nth-child(even) {
    background-color: #4268af;
  }

  &:first-child {
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    height: 200px;
    text-align: left;
    background-color: #5586e3;
    & img {
      width: 250px;
      height: auto;
    }
    & div {
      margin-bottom: 30px;
    }
  }

  & svg {
    font-size: 20px;
    cursor: pointer;
  }

  & h2 {
    text-align: left;
  }
`;

export const CountryName = styled.h2`
  font-size: 20px;
  font-family: gill-sans, sans-serif;
  text-transform: uppercase;
  width: 170px;
  text-align: right;
`;
export const DetailsEmpty = styled.h2`
  color: #fff;
  text-align: center;
  width: 100%;
  & a {
    margin-left: 5px;
    color: #fff;
  }
`;
