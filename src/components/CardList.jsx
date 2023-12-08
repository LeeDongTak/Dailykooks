import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useMarker from '../hooks/useMarker';
import Card from './Card';

function CardList() {
  const { kakao } = window;
  const { searchAddress } = useSelector((state) => state.search);
  const { markers } = useMarker({ kakao, searchAddress });
  const { selectedMarker } = useSelector((state) => state.marker);

  return (
    <StCardListContainer>
      {markers
        .filter((item) => item.id === selectedMarker.id)
        .map((item) => (
          <div key={item.id}>
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
            id={item.id}
            x={item.x}
            y={item.y}
          />
        ))}
      </StCardList>
    </StCardListContainer>
  );
}

export default CardList;

const StCardListContainer = styled.section``;

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
