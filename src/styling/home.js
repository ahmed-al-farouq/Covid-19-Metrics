import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  position: relative;
  background-color: #5586e3;
  padding: 30px 0;
  width: calc(100%/ 3);
  height: 200px;
  background: #3e61a3;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(even) {
    background-color: #4268af;
  }

  &:first-child {
    flex-direction: row;
    align-items: flex-end;
    gap: 20px;
    width: 100%;
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

  & a {
    width: 100%;
    align-items: center;
    color: #fff;
    text-decoration: none;
    flex-direction: column;
    display: flex;
    gap: 15px;
  }

  & svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
  }

  @media screen and (max-width: 991px) {
    width: calc(100%/ 2);
  }

  @media screen and (max-width: 576px) {
    width: calc(100%/ 1);
  }
`;

export const Name = styled.h2`
  font-size: 20px;
  font-family: gill-sans, sans-serif;
  text-transform: uppercase;
`;

export const Deaths = styled.span`
  font-family: 'Lato', sans-serif;
`;

export const Seperator = styled.span`
  width: 100%;
  background: #35548b;
  font-family: 'Lato', sans-serif;
  padding: 5px;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
`;

export const Img = styled.img`
  width: 100px;
  height: 120px;
`;

export const Details = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 25px;
`;

export const Form = styled.form`
  background: #3e61a3;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  & input {
    width: 78%;
    height: 20px;
    font-size: 16px;
    text-indent: 5px;
    border-radius: -59px;
    background: #5586e3;
    outline: none;
    border: none;
    color: #fff;
    border-bottom: 1px solid #3e61a3;
    padding: 6px 4px 5px 0;
  }
  & input::placeholder {
    color: white;
    font-size: 16px;
    text-indent: 5px;
  }
`;

export const SearchIcon = styled.div`
  width: 19.45%;
  background: #3e61a3;
  padding: 3px 0.3px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
`;

export const Invalid = styled.span`
  color: #fff;
  font-size: 16px;
  width: 100%;
  background: #4369b2;
  &.d-none {
    display: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  text-decoration: underline;
`;
