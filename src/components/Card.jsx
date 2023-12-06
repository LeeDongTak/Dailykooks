import React from 'react';
import styled from 'styled-components';

function Card({ name, address, number, vote, menus }) {
  return (
    <StCardWrapper>
      <img src="" alt="image" />
      <div>
        <h3>{name}</h3>
        <p>{address}</p>
        <p>
          후기 <span>{vote}</span>
        </p>
        {menus &&
          Object.values(menus).map((menu, idx) => (
            <div key={idx}>
              <span>{menu.name}</span>
              <span>&nbsp;{menu.price}</span>
            </div>
          ))}
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
  width: 300px;
  height: 260px;
`;
