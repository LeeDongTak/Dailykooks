import React, { useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setHoveredMarker, setSelectedMarker } from '../redux/modules/markerSlice';

function MapWrapper() {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const { markers } = useSelector((state) => state.marker);
  const { hoveredMarkerId } = useSelector((state) => state.marker);
  // console.log('current markers is : ', markers);

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: [],
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,

    markerData: null
  });

  //마커에 마우스 오버 할때 쓰는 state
  const [isOpen, setIsOpen] = useState(false);

  const onMarkerMouseEventHandler = (id, eventType) => {
    if (eventType === 'over') {
      setIsOpen(true);
      dispatch(setHoveredMarker(id));
    }
    if (eventType === 'out') {
      setIsOpen(false);
    }
    // console.log(id);
  };
  const onMarkerClickHandler = (id) => {
    dispatch(setSelectedMarker(id));
  };

  return (
    <Map // 지도를 표시할 Container
      center={{ lat: 37.49676871972202, lng: 127.02474726969814 }}
      // isPanto={state.isPanto}
      ref={mapRef}
      level={13}
      style={{ width: '600', height: '600' }} // 지도의 확대 레벨
    >
      {markers?.map((item) => (
        <StMapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          key={`${item.id}`}
          position={{ lat: parseFloat(item.y), lng: parseFloat(item.x) }}
          clickable={true}
          // onMouseOver={() => setIsOpen(true)}
          onMouseOver={() => onMarkerMouseEventHandler(item.id, 'over')}
          onMouseOut={() => onMarkerMouseEventHandler(item.id, 'out')}
          onClick={() => onMarkerClickHandler(item.id)}
        >
          {isOpen && item.id === hoveredMarkerId && (
            <div style={{ padding: '5px', color: '#000' }}>
              <p>{item?.place_name}</p>
              <p>{item?.phone}</p>
            </div>
          )}
        </StMapMarker>
      ))}
    </Map>
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

const StMapMarker = styled(MapMarker)`
  cursor: pointer;
`;
