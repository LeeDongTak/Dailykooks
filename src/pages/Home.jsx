import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import finder from '../assets/finder.svg';
import CardList from '../components/CardList';
import MapWrapper from '../components/MapWrapper';
import SearchBar from '../components/SearchBar';
import useMarkerFromFirebase from '../hooks/useMarkerFromFirebase';
import useMarkerFromKaKao from '../hooks/useMarkerFromKakao';
import { setSearchAddress } from '../redux/modules/searchSlice';

function Home() {
  const { kakao } = window;

  // const [searchAddress, setSearchAddress] = useState('');
  const dispatch = useDispatch();
  const { markersFromFirebase } = useMarkerFromFirebase();
  const { searchAddress } = useSelector((state) => state.search);
  const { refetch, markersFromKaKao } = useMarkerFromKaKao({ kakao, searchAddress });

  // setMarkers([...data]);

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동

  const onSearchAddressChangeHandler = (e) => {
    dispatch(setSearchAddress(e.target.value));
  };
  console.log('data from firebase : ', markersFromFirebase);
  console.log('---------------');
  console.log('data from kakaomap search : ', markersFromKaKao);
  return (
    <StHomeContainer>
      <MapWrapper markers={markersFromKaKao ? markersFromKaKao : markersFromFirebase ? markersFromFirebase : []} />
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
          <CardList markers={markersFromKaKao ? markersFromKaKao : markersFromFirebase ? markersFromFirebase : []} />
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
