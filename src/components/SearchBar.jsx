import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import finder from '../assets/finder.svg';
// import useMarkerFromFirebase from '../hooks/useMarkerFromFirebase';
import useMarkerFromFirebase from '../hooks/useMarkerFromFirebase';
import useMarker from '../hooks/useMarker';
import { setCrawlingData, __crawlingData } from '../redux/modules/markerSlice';
import useMarkerFromKaKao from '../hooks/useMarkerFromKakao';
import { setIsFiltered } from '../redux/modules/filterSlice';
import { setSearchAddress } from '../redux/modules/searchSlice';
import axios from 'axios';

function SearchBar() {
  const { kakao } = window;
  const dispatch = useDispatch();
  const marker = useSelector((state)=>state.marker)
  const { searchAddress } = useSelector((state) => state.search);
  const { isFiltered } = useSelector((state) => state.filter);
  const { refetch, markersFromKaKao } = useMarkerFromKaKao({ kakao, searchAddress }); // 키워드로 검색
  const [searchInput, setSearchInput] = useState('');
  // const { refetch } = useMarkerFromFirebase(searchAddress); // firebase에서 가져온 데이터로 검색

  const onSearchAddressChangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  // const crawlingData = async (data) => {
  //   try {
  //     const resultData = [];
  //     for (let i = 0; i < data.length; i++) {
  //       const res = await axios.get(`http://43.202.134.179:3000/mapDetail/${data[i].id}`);
  //       resultData.push({ id: data[i].id, ...res.data.result})
  //       console.log(marker.crawlingData);
  //       console.log(res.data.result);
  //     }
  //     dispatch(setCrawlingData(resultData))
  //     console.log(marker.crawlingData) 
  //     console.log(resultData) 
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onSearchBtnClickHandler = async (e) => {
    e.preventDefault();
    dispatch(setIsFiltered(false));
    dispatch(setSearchAddress(searchInput));
    // refetch({ queryKey: ['firebase/places', searchAddress] }); // firebase에서 가져온 데이터로 검색
    refetch({ queryKey: ['kakao/places', { kakao, searchAddress }] }); // 키워드로 검색
    // crawlingData(markersFromKaKao);
    dispatch(__crawlingData(markersFromKaKao))
    // console.log(marker.crawlingData)
  };
  return (
    <StSearchBarContainer>
      <form onSubmit={onSearchBtnClickHandler}>
        <label htmlFor="searchText"></label>
        <input
          type="text"
          id="searchText"
          onChange={onSearchAddressChangeHandler}
          placeholder="오늘은 뭘 먹어볼까요?"
        ></input>
        <button>
          <img src={finder} alt="search" />
        </button>
      </form>
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
