import React from 'react';
import styled from 'styled-components';
import Card from './Card';

function CardList() {
  return (
    <StCardList>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </StCardList>
  );
}

export default CardList;

const StCardList = styled.ul`
  display: flex;
  justify-content: start;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: 100%;
  gap: 12px;
`;
