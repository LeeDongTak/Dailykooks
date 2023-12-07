import React, { useState } from 'react';
import styled from 'styled-components';
import finder from '../assets/finder.svg';
import CardList from '../components/CardList';
import MapWrapper from '../components/MapWrapper';
import SearchBar from '../components/SearchBar';
import useMarkerFromFirebase from '../hooks/useMarkerFromFirebase';
import useMarkerFromKaKao from '../hooks/useMarkerFromKakao';

// 2개의 서버 상태로 관리하는 것이 좋지 않은가
// 하나는 파이어베이스 다른 하나는 카카오 서버
// 파이어베이스는 후 순위, 카카오 서버의 데이터가 우선 순위가 높음
// 2개의 리액트 쿼리를 사용한다

function Home() {
  const { kakao } = window;

  const [searchAddress, setSearchAddress] = useState('');
  const [markers, setMarkers] = useState([]);

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: [],
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,

    markerData: null
  });

  const { firebaseMarker } = useMarkerFromFirebase();
  const { refetch, markerFromKaKao } = useMarkerFromKaKao({ kakao, searchAddress });

  // setMarkers([...data]);

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동

  const onSearchAddressChangeHandler = (e) => {
    setSearchAddress(e.target.value);
  };

  return (
    <StHomeContainer>
      <MapWrapper
        searchAddress={searchAddress}
        SetSearchAddress={setSearchAddress}
        markers={markerFromKaKao ? markerFromKaKao : firebaseMarker ? firebaseMarker : []}
        setMarkers={setMarkers}
      />
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
          <CardList />
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
