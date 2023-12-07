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

  // console.log(data);
  data.forEach((item) => console.log(`위도 : ${item.x} 경도: ${item.y}`));

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
          x={item.x}
          y={item.y}
        />
      ))}
    </StCardList>
  );
}

export default CardList;

const StCardList = styled.ul`
  display: flex;
  justify-content: flex-start;
  //

  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  //background-color: aqua;
  @media screen and (max-width: 1763px) {
    width: 840px;
  }
  @media screen and (max-width: 1463px) {
    width: 800px;
  }
  @media screen and (max-width: 1425px) {
    width: 760px;
  }
  @media screen and (max-width: 1383px) {
    width: 680px;
  }
  @media screen and (max-width: 1304px) {
    width: 660px;
  }
  @media screen and (max-width: 1283px) {
    width: 640px;
  }
`;
