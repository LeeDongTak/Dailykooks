import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';

import styled from 'styled-components';

function Home() {
  const { kakao } = window;
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 37.49676871972202, lng: 127.02474726969814 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true
  });
  const [searchAddress, SetSearchAddress] = useState();

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
  const SearchMap = () => {
    const ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x }
        });
        console.log(newSearch);
      }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB);
  };

  const handleSearchAddress = (e) => {
    SetSearchAddress(e.target.value);
  };

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        isPanto={state.isPanto}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px'
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker position={state.center}> </MapMarker>
      </Map>
      <div>
        <input onChange={handleSearchAddress}></input>
        <button onClick={SearchMap}>클릭</button>
      </div>
    </>
  );
}

export default Home;

const StMap = styled.div`
  width: 500px;
  height: 400px;
`;
