import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <StHeader>
      <button>
        데일리국밥
        <img src={require('../assets/bowl.svg')} />
      </button>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e6d5b8;

  button {
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    border: none;
  }
`;
