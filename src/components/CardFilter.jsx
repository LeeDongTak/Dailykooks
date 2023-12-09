import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useMarker from '../hooks/useMarker';
import { setFilter, setIsFiltered } from '../redux/modules/filterSlice';

const filterCriteria = ['location', 'price range', 'vote'];

function CardFilter() {
  const { kakao } = window;
  const { searchAddress } = useSelector((state) => state.search);
  const { markers } = useMarker({ kakao, searchAddress });
  const { isFiltered } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const onFilterBtnClickHandler = (filter) => {
    dispatch(setFilter(filter));
    dispatch(setIsFiltered(!isFiltered));
  };
  // const { markersFilteredByVote } = useFilterMarkers(markers);

  // const priceRange = markers.map((marker) =>
  //   Math.floor(marker.menus.reduce((sum, current) => sum + current.price, 0) / marker.menus.length)
  // );
  // console.log(priceRange);
  // console.log(markersFilteredByVote);

  return (
    <StFilterBtnContainer>
      {filterCriteria.map((filter, idx) => (
        <StFilterBtn onClick={() => onFilterBtnClickHandler(filter)} key={idx}>
          {filter}
        </StFilterBtn>
      ))}
    </StFilterBtnContainer>
  );
}

export default CardFilter;

const StFilterBtnContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 12px auto;
  background-color: rgba(219, 200, 182, 1);
  padding: 12px;
  border-radius: 8px;
`;

const StFilterBtn = styled.button`
  width: 120px;
  height: 36px;
  text-align: center;
  background-color: #eee5dd;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
