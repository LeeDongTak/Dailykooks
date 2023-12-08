import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Map, MapMarker, StaticMap } from 'react-kakao-maps-sdk';
import { useParams } from 'react-router-dom';
import { getPlaces } from '../api/places';
function Detail() {
  const { id } = useParams();

  const { isLoading, isError, data, error } = useQuery(['places'], getPlaces);
  if (isLoading) {
    // console.log(isLoading);
    return <h1> 로딩 중... </h1>;
  }

  if (isError) {
    // console.log(error);
    return <h1>에러 발생</h1>;
  }

  // id에 해당하는 것 찾기
  const selectedPlace = data.find((item) => item.id === id);

  if (!selectedPlace) {
    return <p>페이지를 찾을수 없습니다.</p>;
  }
  console.log(selectedPlace);

  // menus 안에  price와 name 출력하기
  console.log('Menus:');
  selectedPlace.menus.forEach((menu) => {
    console.log(`Name: ${menu.name}, Price: ${menu.price}`);
  });

  console.log(selectedPlace.x);
  const xLoc = Number(selectedPlace.x);
  const yLoc = Number(selectedPlace.y);

  return (
    <div>
      <h1>{selectedPlace.place_name}</h1>
      <p>주소: {selectedPlace.address}</p>
      <p>전화번호: {selectedPlace.number}</p>
      <p>별점: {selectedPlace.vote}</p>
      <ul>
        {selectedPlace.menus.map((menu, index) => (
          <li key={index}>
            {menu.name} {menu.price}
          </li>
        ))}
      </ul>
      <StaticMap // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: xLoc,
          lng: yLoc
        }}
        style={{
          // 지도의 크기
          width: '900px',
          height: '650px'
        }}
        marker={{
          lat: xLoc,
          lng: yLoc
        }}
        level={3} // 지도의 확대 레벨
      />

      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: xLoc,
          lng: yLoc
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '450px'
        }}
        level={4} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: xLoc,
            lng: yLoc
          }}
        />
      </Map>
    </div>
  );
}

export default Detail;
