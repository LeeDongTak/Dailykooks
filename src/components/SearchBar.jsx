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

  input {
    padding: 8px;
  }
`;
