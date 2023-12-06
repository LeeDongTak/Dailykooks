import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <StHeader>
      <button>Logo</button>
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
  background: #f0f;

  button {
    width: 60px;
    height: 40px;
    border-radius: 50%;
  }
`;
