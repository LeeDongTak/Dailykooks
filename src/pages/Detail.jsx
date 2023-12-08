import React from 'react';
import { StaticMap } from 'react-kakao-maps-sdk';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import clock from '../assets/clock.svg';
import location from '../assets/location_icon.svg';
import menu2 from '../assets/menu.svg';
import phone from '../assets/phone.svg';
import star from '../assets/star2.svg';
function Detail() {
  const { selectedMarker } = useSelector((state) => state.marker);
  const { id } = useParams();

  // console.log(selectedMarker);
  if (!selectedMarker) {
    return <p>페이지를 찾을수 없습니다.</p>;
  }
  //console.log(selectedMarker);

  //지도 위치 설정
  const xLoc = Number(selectedMarker.x);
  const yLoc = Number(selectedMarker.y);

  return (
    <DetailPage>
      <DetailBox>
        <h1>[ {selectedMarker.place_name} ]</h1>

        <InfoBoxFrame>
          <InfoBox>
            <p>
              {' '}
              <img src={location} />
              {selectedMarker.road_address_name}
            </p>
            <hr />
            <p>
              <img src={clock} alt="" />
              매일 00:00 ~ 24:00
            </p>
            <hr />
            <p>
              <img src={phone} />
              {selectedMarker.phone}
            </p>
            <hr />
            <p>
              <img src={star} />
              {selectedMarker?.vote}
            </p>
            <hr />
            <MenuTitle>
              <img src={menu2} />
              메뉴
            </MenuTitle>
            <ul>
              {selectedMarker.menus?.map((menu, index) => (
                <li key={index}>
                  <table>
                    <tr>
                      <td>{menu?.name}</td>
                      <td>{menu?.price}원</td>
                    </tr>
                  </table>
                </li>
              ))}
            </ul>
          </InfoBox>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: yLoc,
              lng: xLoc
            }}
            style={{
              // 지도의 크기
              width: '500px',
              height: '500px'
            }}
            marker={{
              lat: yLoc,
              lng: xLoc
            }}
            level={3} // 지도의 확대 레벨
          />
        </InfoBoxFrame>
      </DetailBox>
    </DetailPage>
  );
}

export default Detail;

const DetailBox = styled.div`
  line-height: 1.8rem;
  border-radius: 20px;
  user-select: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 900px;

  img {
    height: 25px;
    vertical-align: middle;
    margin-right: 10px;
  }
  h1 {
    font-size: 27px;
    text-align: center;
    width: 100%;
    color: #866761;
    font-family: 'TheJamsil5Bold';
    font-weight: bold;
    margin-bottom: 20px;
  }

  hr {
    border: 0;
    height: 1px;
    background: #eee5dd;
  }

  p {
    color: #866761;
    font-weight: bold;
  }
`;

const Map = styled(StaticMap)`
  box-sizing: border-box;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  // border: 5px solid #dbc8b6;
`;

const InfoBox = styled.div`
  width: 400px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 20px;
  background-color: #dbc8b6;
  box-sizing: border-box;
  ul {
    overflow: auto;
    li {
      background-color: #eee5dd;
      line-height: 2.5rem;
      margin: 8px 0;
      border-radius: 8px;
      width: 350px;
      padding-left: 10px;
    }
  }

  table {
    width: 100%;
    td {
      &:last-of-type {
        width: 100px;
        text-align: right;
        padding-right: 10px;
      }
    }
  }
`;

const MenuTitle = styled.p`
  font-weight: bold;
  color: #866761;
`;

const InfoBoxFrame = styled.div`
  box-shadow: 2px 2px 8px #aaa;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px;
`;

const DetailPage = styled.div`
  background-color: #eee;
  width: 100vw;
  height: calc(100vh - 80px);
`;
