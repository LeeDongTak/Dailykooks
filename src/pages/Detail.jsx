import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { StaticMap } from 'react-kakao-maps-sdk';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPlaces } from '../api/places';
import location from '../assets/location_icon.svg';
import menu2 from '../assets/menu.svg';
import phone from '../assets/phone.svg';
import star from '../assets/star-regular.svg';
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
  //console.log(selectedPlace);

  //지도 위치 설정
  const xLoc = Number(selectedPlace.x);
  const yLoc = Number(selectedPlace.y);

  return (
    <DetailPage>
      <h1>{selectedPlace.place_name}</h1>
      <p>
        <img src={location} />
        {selectedPlace.road_address_name}
      </p>
      <p>
        <img src={phone} />
        {selectedPlace.phone}
      </p>
      <p>
        <img src={star} /> {selectedPlace.vote}
      </p>
      <ul>
        {selectedPlace.menus.map((menu, index) => (
          <li key={index}>
            <img src={menu2} />
            {menu.name} {menu.price}원
          </li>
        ))}
      </ul>
      <StaticMap // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: yLoc,
          lng: xLoc
        }}
        style={{
          // 지도의 크기
          width: '800px',
          height: '350px'
        }}
        marker={{
          lat: yLoc,
          lng: xLoc
        }}
        level={3} // 지도의 확대 레벨
      />
    </DetailPage>
  );
}

export default Detail;

const DetailPage = styled.div`
  line-height: 1.8rem;
  img {
    height: 25px;
    vertical-align: middle;
    margin-right: 3px;
  }
  h1 {
    font-size: 22px;
    font-weight: bold;
  }
`;
