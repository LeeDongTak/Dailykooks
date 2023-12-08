import React from 'react';
import styled from 'styled-components';
import bag from '../assets/bag2.svg';
import clock from '../assets/clock.svg';
import food from '../assets/food.jpg';
import menu2 from '../assets/menu.svg';
import delivery from '../assets/motorsycle2.svg';
import star from '../assets/star-regular.svg';
function Card({ place_name, address, number, vote, menus }) {
  const shortAddress = address.split(' ').slice(0, 2).join(' ');
  // const shortAddress = address.split(' ').toString();
  const menuNames = menus.map((menu) => menu.name);
  // console.log(menuNames);

  // console.log(shortAddress, '길이', shortAddress.length);
  return (
    <StCardWrapper>
      <BgFrame>
        <Bg src="https://cdn.pixabay.com/photo/2016/09/07/10/15/food-1651279_1280.jpg" />
      </BgFrame>
      <div>
        <h3>[ {place_name} ]</h3>
        <Menu>{menuNames.join(', ')}</Menu>
        <Address>{shortAddress}</Address>
        <Review>
          <span>
            <img src={star} />
            {vote}
          </span>
        </Review>
        <DetailBox>
          <p>
            <img src={clock} />
            매일 00:00 ~ 24:00
          </p>

          <p>
            <img src={bag} />
            포장 가능, <img src={delivery} />
            배달 불가
          </p>
          {menus &&
            Object.values(menus).map((menu, idx) => (
              <div key={idx}>
                <span>
                  <img src={menu2} />
                  {menu.name}
                </span>
                <span>{menu.price}</span>
              </div>
            ))}
        </DetailBox>
      </div>
      <button>상세 보기</button>
    </StCardWrapper>
  );
}

export default Card;
const DetailBox = styled.div`
  height: 105px;
  position: absolute;
  transform: translate(0, 253px);
  top: 0;
  left: 0;
  padding: 13px 20px;
  transition: 0.5s ease-in-out;
  line-height: 1.8rem;
  border-radius: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(219, 200, 182, 0.9);
`;
const StCardWrapper = styled.li`
  background-color: #fff;
  width: 380px;
  margin: 20px;
  border-radius: 15px;
  /* transition: 1s; */
  user-select: none;
  display: flex;
  font-size: 15px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 3px 3px 5px #999;
  z-index: 1;
  img {
    height: 20px;
    vertical-align: middle;
    margin-right: 3px;
  }
  border-radius: 20px;
  background-position: center;
  height: 250px;
  line-height: 1.5rem;
  box-sizing: border-box;

  padding: 10px;

  h3 {
    font-size: 17px;
    text-align: center;
    z-index: 99;
    margin-bottom: 5px;
  }
  button {
    border: none;
    padding: 5px;
    position: absolute;
    cursor: pointer;
    right: 0;
    font-weight: bold;
    margin: 5px;
    bottom: 0;
    background-color: transparent;
  }
  /* &::before {
    content: '';
    background: url(${food});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    width: 100%;
    opacity: 0.3;
    top: 0px;
    left: 0px;
    border-radius: 20px;
    right: 0px;
    width: 100%;
    height: 100%;
    z-index: -1;
  } */

  &:hover ${DetailBox} {
    transform: translate(0, 0px);
  }

  @media screen and (max-width: 1883px) {
    width: 360px;
  }
  @media screen and (max-width: 1825px) {
    width: 350px;
    margin: 15px;
  }
  @media screen and (max-width: 1763px) {
    width: 380px;
    margin: 20px;
  }
  @media screen and (max-width: 1463px) {
    width: 360px;
    margin: 20px;
  }
  @media screen and (max-width: 1423px) {
    width: 350px;
    margin: 15px;
  }
  @media screen and (max-width: 1383px) {
    width: 320px;
    margin: 10px;
  }
  @media screen and (max-width: 1303px) {
    width: 310px;
    margin: 10px;
  }
  @media screen and (max-width: 1283px) {
    width: 300px;
    margin: 10px;
  }
`;

const Review = styled.div`
  text-align: center;
  margin-top: 6px;
`;

const Menu = styled.p`
  font-size: 20px;
  text-align: center;
  z-index: 99;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Bg = styled.img`
  position: absolute;
  width: 100%;
  height: 100% !important;
  z-index: -1;
  opacity: 0.3;
`;

const BgFrame = styled.div`
  position: absolute;
  width: 380px;
  height: 250px;
`;

const Address = styled.p`
  text-align: center;
`;
