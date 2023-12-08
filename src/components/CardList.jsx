import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from './Card';

function CardList({ markers }) {
  const { kakao } = window;
  const { selectedMarker } = useSelector((state) => state.search);

  useEffect(() => {
    console.log('wow');
  }, [selectedMarker]);

  return (
    <>
      {markers
        .filter((item) => item.id === selectedMarker)
        .map((item) => (
          <div>
            <p>{item.id}</p>
            <p>{item.place_name}</p>
          </div>
        ))}
      <StCardList>
        {markers.map((item) => (
          <Card
            key={item.id}
            place_name={item.place_name}
            address={item.road_address_name}
            number={item.phone}
            // vote={item.vote}
            // menus={item.menus}
            x={item.x}
            y={item.y}
          />
        ))}
      </StCardList>
    </>
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
