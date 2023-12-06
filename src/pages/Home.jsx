import axios from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { Cheerio } from 'cheerio';

import styled from 'styled-components';

function Home() {
  const { kakao } = window;
  const mapRef = useRef(null);
  const [searchAddress, SetSearchAddress] = useState();
  const [markers, setMarkers] = useState([]);

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
  const SearchMap = () => {
    const ps = new kakao.maps.services.Places();

    const placesSearchCB = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setMarkers([...data.map((x) => x)]);
        // setMarkers(newSearch);
        console.log(newSearch);
        console.log(data);
      }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB);
  };
  
  const handleSearchAddress = (e) => {
    SetSearchAddress(e.target.value);
  };

  const bounds = useMemo(() => {}, [markers]);
  useEffect(() => {
    const bounds = new kakao.maps.LatLngBounds();
    console.log(markers);
    markers.forEach((point) => {
      bounds.extend(new kakao.maps.LatLng(point.y, point.x));
    });
    const map = mapRef.current;
    if (map) map.setBounds(bounds);
  }, [markers]);

  
  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          lat: 33.450701,
          lng: 126.570667
        }}
        isPanto={true}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px'
        }}
        ref={mapRef}
        level={3} // 지도의 확대 레벨
      >
        {markers.map((item) => (
          <MapMarker key={`${item.x}-${item.y}`} position={{ lat: item.y, lng: item.x }} />
        ))}
      </Map>
      <div>
        <input onChange={handleSearchAddress}></input>
        <button
          onClick={() => {
            SearchMap();
          }}
        >
          클릭
        </button>
      </div>
    </>
  );
}

export default Home;

const StMap = styled.div`
  width: 500px;
  height: 400px;
`;



