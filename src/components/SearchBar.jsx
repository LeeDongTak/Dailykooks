import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import finder from '../assets/finder.svg';
import useMarker from '../hooks/useMarker';
import { setSearchAddress } from '../redux/modules/searchSlice';

function SearchBar() {
  const { kakao } = window;
  const dispatch = useDispatch();
  const { searchAddress } = useSelector((state) => state.search);
  const { refetch } = useMarker({ kakao, searchAddress });
  const onSearchAddressChangeHandler = (e) => {
    let searchValue = e.target.value;
    if (searchValue.includes('국밥')) {
      dispatch(setSearchAddress(searchValue));
    } else {
      dispatch(setSearchAddress(searchValue + ' 국밥'));
    }
  };

  return (
    <StSearchBarContainer>
      <div>
        <input onChange={onSearchAddressChangeHandler} placeholder="오늘은 뭘 먹어볼까요?"></input>
        <button
          onClick={() => {
            refetch({ queryKey: ['kakao/places', { kakao, searchAddress }] });
          }}
        >
          <img src={finder} alt="search" />
        </button>
      </div>
    </StSearchBarContainer>
  );
}

export default SearchBar;

const StSearchBarContainer = styled.div`
  position: absolute;
  width: 270px;
  z-index: 2;
  top: 80px;
  left: calc(300px - 135px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0px;

  input {
    padding: 8px;
    font-size: 20px;
    border: none;
    padding: 15px 25px;
    margin-right: 10px;
    border-radius: 30px;
    outline: none;
    box-shadow: 0px 4px 4px #0003;
    &::placeholder {
      color: #ccc;
    }
  }

  button {
    border: none;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 3px;
    img {
      width: 30px;
    }
  }
`;
