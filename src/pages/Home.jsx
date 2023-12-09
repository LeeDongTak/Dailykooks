import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CardList from '../components/CardList';
import MapWrapper from '../components/MapWrapper';
import { CommentsProvider } from '../hooks/useComments';
import useMarkerFromFirebase from '../hooks/useMarkerFromFirebase';

function Home() {
  // const { kakao } = window;
  const { searchAddress } = useSelector((state) => state.search);
  // const { refetch, markers, isLoadingFromFirebase, isLoadingFromKakao } = useMarker({ kakao, searchAddress });
  const { markersFromFirebase: markers, isLoadingFromFirebase } = useMarkerFromFirebase(searchAddress);

  if (isLoadingFromFirebase) {
    return <h1> 로딩 중... </h1>;
  }
  console.log(markers);

  // console.log('data from firebase : ');
  // console.log('---------------');
  // console.log('data from kakaomap search : ');

  return (
    <StHomeContainer>
      <MapWrapper markers={markers} />
      <StMain>
        <CommentsProvider>
          <CardContainer>
            <CardList markers={markers} />
          </CardContainer>
        </CommentsProvider>
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
