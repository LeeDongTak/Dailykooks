import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import styled from 'styled-components';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

function Home() {
  const { kakao } = window;
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
    markerData: null
  });
  const [searchAddress, SetSearchAddress] = useState();

  //마커에 마우스 오버 할때 쓰는 state
  const [isOpen, setIsOpen] = useState(false);

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
  const SearchMap = () => {
    const ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
          markerData: newSearch
        });
        console.log(newSearch);
      }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB);
  };
  // console.log(state.markerData.place_name);
  const handleSearchAddress = (e) => {
    SetSearchAddress(e.target.value);
  };

  return (
    <StHomeContainer>
      <StMap // 지도를 표시할 Container
        center={state.center}
        isPanto={state.isPanto}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          position={state.center}
          clickable={true}
          onMouseOver={() => setIsOpen(true)}
          onMouseOut={() => setIsOpen(false)}
        >
          {isOpen && (
            <div style={{ padding: '5px', color: '#000' }}>
              <p>{state?.markerData?.place_name}</p>
              <p>{state?.markerData?.phone}</p>
            </div>
          )}
        </MapMarker>
      </StMap>
      <StMain>
        <SearchBar>
          <div>
            <input onChange={handleSearchAddress} placeholder="오늘은 뭘 먹어볼까요?"></input>
            <button onClick={SearchMap}>클릭</button>
          </div>
        </SearchBar>
        <CardList />
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
const StMapWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
const StMap = styled(Map)`
  width: 100%;
  height: 90vh;
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
