import React from 'react';
import styled from 'styled-components';
import bowl from '../assets/bowl.svg';
function Header() {
  return (
    <StHeader>
      <div>
        <img src={bowl} />
        <p>데일리국밥</p>
      </div>
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
  background: #dbc8b6;

  div {
    display: flex;
    align-items: center;
  }
  p {
    background-color: transparent;
    font-size: 20px;
    color: #866761;
    font-weight: bold;
    border: none;
    margin-left: 6px;
  }
  img {
    height: 40px;
  }
`;
