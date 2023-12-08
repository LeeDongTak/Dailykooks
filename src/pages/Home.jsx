import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import finder from '../assets/finder.svg';
import CardList from '../components/CardList';
import MapWrapper from '../components/MapWrapper';
import SearchBar from '../components/SearchBar';
import useMarker from '../hooks/useMarker';
import { setSearchAddress } from '../redux/modules/searchSlice';

function Home() {
  const { kakao } = window;
  const dispatch = useDispatch();
  const { searchAddress } = useSelector((state) => state.search);
  const { refetch, markers, isLoadingFromFirebase, isLoadingFromKakao } = useMarker({ kakao, searchAddress });

  if (isLoadingFromFirebase) {
    return <h1> 로딩 중... </h1>;
  }
  console.log(markers);

  const onSearchAddressChangeHandler = (e) => {
    dispatch(setSearchAddress(e.target.value));
  };

  // console.log('data from firebase : ');
  // console.log('---------------');
  // console.log('data from kakaomap search : ');

  return (
    <StHomeContainer>
      <MapWrapper markers={markers} />
      <StMain>
        <SearchBar>
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
        </SearchBar>
        <CardContainer>
          <CardList markers={markers} />
        </CardContainer>
      </StMain>
    </StHomeContainer>
  );
}

export default Home;

const StHomeContainer = styled.div`
  display: grid;
  height: 90vh;
  grid-template-columns: 600px 1fr;
`;

const StMain = styled.main`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  height: 90vh;
  padding: 0 12px;
`;

const CardContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  //background-color: red;
  width: 100%;
  justify-content: center;
  height: 100%;
`;
