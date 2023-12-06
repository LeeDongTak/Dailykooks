import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import { getPlaces } from '../api/places';
import Card from './Card';

function CardList() {
  const { isLoading, isError, data, error } = useQuery(['places'], getPlaces);

  if (isLoading) {
    console.log(isLoading);
    return <h1> 로딩 중... </h1>;
  }

  if (isError) {
    console.log(error);
    return <h1>에러 발생</h1>;
  }

  console.log(data);

  return (
    <StCardList>
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          address={item.address}
          number={item.number}
          vote={item.vote}
          menus={item.menus}
        />
      ))}
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
