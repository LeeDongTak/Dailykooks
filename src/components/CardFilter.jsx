import React from 'react';
import styled from 'styled-components';

const filterCriteria = ['지역', '가격대', '평점'];

function CardFilter() {
  const onFilterBtnClickHandler = (criteria) => {
    console.log(criteria);
  };

  return (
    <StFilterBtnContainer>
      {filterCriteria.map((criteria, idx) => (
        <StFilterBtn onClick={() => onFilterBtnClickHandler(criteria)} key={idx}>
          {criteria}
        </StFilterBtn>
      ))}
    </StFilterBtnContainer>
  );
}

export default CardFilter;

const StFilterBtnContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 12px auto;
  background-color: rgba(219, 200, 182, 1);
  padding: 12px;
  border-radius: 8px;
`;

const StFilterBtn = styled.button`
  width: 120px;
  height: 36px;
  text-align: center;
  background-color: #eee5dd;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
