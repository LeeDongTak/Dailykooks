import React from 'react';
import styled from 'styled-components';

function Card() {
  return (
    <StCardWrapper>
      <img src="" alt="image" />
      <div>
        <h3>태평소국밥</h3>
        <p>대전 유성구 문화원로 140</p>
        <p>
          후기 <span>4.0(96)</span>
        </p>
        <p>매일 00:00 ~ 24:00</p>
        <p>포장 가능, 배달 불가</p>
      </div>
      <button>상세 보기</button>
    </StCardWrapper>
  );
}

export default Card;

const StCardWrapper = styled.div`
  background-color: #fff;
  width: 280px;
  height: 220px;
`;
