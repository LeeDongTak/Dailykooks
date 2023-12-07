import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function MapWrapper({ searchAddress, SetSearchAddress, markers }) {
  const { kakao } = window;
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: [],
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,

    markerData: null
  });

  //마커에 마우스 오버 할때 쓰는 state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState('');

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동

  console.log(state);

  // const SearchMap = () => {
  //   const ps = new kakao.maps.services.Places();
  //   const placesSearchCB = function (data, status, pagination) {
  //     if (status === kakao.maps.services.Status.OK) {
  //       const newSearch = data[0];
  //       setState({
  //         center: { lat: newSearch.y, lng: newSearch.x },
  //         markerData: newSearch
  //       });
  //       console.log(newSearch);
  //     }
  //   };
  //   ps.keywordSearch(`${searchAddress}`, placesSearchCB);
  // };

  const onMarkerMouseEventHandler = (id, event) => {
    if (event === 'over') {
      setIsOpen(true);
      setSelectedMarker(id);
    }
    if (event === 'out') {
      setIsOpen(false);
    }
    // console.log(id);
  };

  const bounds = useMemo(() => {}, [markers]);

  useEffect(() => {
    const bounds = new kakao.maps.LatLngBounds();
    markers.forEach((point) => {
      bounds.extend(new kakao.maps.LatLng(point.y, point.x));
    });
    const map = mapRef.current;
    if (map) map.setBounds(bounds);
  }, [markers]);

  return (
    <StMap // 지도를 표시할 Container
      center={{ lat: 37.49676871972202, lng: 127.02474726969814 }}
      isPanto={state.isPanto}
      ref={mapRef}
      level={3} // 지도의 확대 레벨
    >
      {markers.map((item) => (
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          key={`${item.x - item.y}`}
          position={{ lat: item.y, lng: item.x }}
          clickable={true}
          // onMouseOver={() => setIsOpen(true)}
          onMouseOver={() => onMarkerMouseEventHandler(item.id, 'over')}
          onMouseOut={() => onMarkerMouseEventHandler(item.id, 'out')}
        >
          {isOpen && item.id === selectedMarker && (
            <div style={{ padding: '5px', color: '#000' }}>
              <p>{item?.place_name}</p>
              <p>{item?.phone}</p>
            </div>
          )}
        </MapMarker>
      ))}
    </StMap>
  );
}

export default MapWrapper;

const StMapWrapper = styled.section`
  width: 100%;
  height: 100%;
`;
const StMap = styled(Map)`
  width: 100%;
  height: 90vh;
`;
