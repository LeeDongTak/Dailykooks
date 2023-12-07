import React, { useState } from 'react';
import styled from 'styled-components';
import finder from '../assets/finder.svg';
import CardList from '../components/CardList';
import MapWrapper from '../components/MapWrapper';
import SearchBar from '../components/SearchBar';
function Home() {
  const { kakao } = window;

  const [searchAddress, setSearchAddress] = useState();
  const [markers, setMarkers] = useState([]);

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: [],
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,

    markerData: null
  });

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
  const onSearchBtnClickHandler = () => {
    const placeSearchInstance = new kakao.maps.services.Places();

    const searchCallBackFunc = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setMarkers([...data]);
        console.log(newSearch);
        console.log(data);
        setState({
          markerData: data
        });
      }
    };
    placeSearchInstance.keywordSearch(`${searchAddress}`, searchCallBackFunc);
  };
  // console.log(state);

  const onSearchAddressChangeHandler = (e) => {
    setSearchAddress(e.target.value);
  };

  return (
    <StHomeContainer>
      <MapWrapper searchAddress={searchAddress} SetSearchAddress={setSearchAddress} markers={markers} />
      <StMain>
        <SearchBar>
          <div>
            <input onChange={onSearchAddressChangeHandler} placeholder="오늘은 뭘 먹어볼까요?"></input>
            <button onClick={onSearchBtnClickHandler}>
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
