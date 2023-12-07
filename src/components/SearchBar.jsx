import React from 'react';
import styled from 'styled-components';

function SearchBar({ children }) {
  return <StSearchBarContainer>{children}</StSearchBarContainer>;
}

export default SearchBar;

const StSearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 20px 0 0px;

  input {
    padding: 8px;
    font-size: 20px;
    border: none;
    padding: 15px 25px;
    margin-right: 10px;
    border-radius: 30px;
    outline: none;
    &::placeholder {
      color: #ccc;
    }
  }

  button {
    border: none;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 3px;
    img {
      width: 30px;
    }
  }
`;
