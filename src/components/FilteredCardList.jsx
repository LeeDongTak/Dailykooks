import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import star from '../assets/star-regular.svg';
import useFilterMarkers from '../hooks/useFilterMarkers';
import Card from './Card';
import { StCardList } from './CardList';

function FilteredCardList({ markers }) {
  const { filter } = useSelector((state) => state.filter);
  const { filteredMarkers } = useFilterMarkers(markers, filter);
  return (
    <>
      {filteredMarkers?.map((marker, idx) => (
        <StSection key={idx}>
          <StHeader key={idx}>
            <span>별점</span>
            {`${marker[Object.keys(marker)[0]]} ${marker.postFix}`}
          </StHeader>
          <StCardList>
            {marker?.places?.map((item) => (
              <Card
                key={item.id}
                place_name={item.place_name}
                address={item.road_address_name}
                number={item.phone}
                vote={item.vote}
                menus={item.menus}
                id={item.id}
                x={item.x}
                y={item.y}
              />
            ))}
          </StCardList>
        </StSection>
      ))}
    </>
  );
}

export default FilteredCardList;

const StSection = styled.section`
  margin-bottom: 24px;
`;

const StHeader = styled.h1`
  display: flex;
  width: 200px;
  margin: 0 auto;
  border-radius: 12px;
  height: 32px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 12px;
  background-color: #fff;
  span {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-image: url(${star});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    font-size: 0;
  }
`;
