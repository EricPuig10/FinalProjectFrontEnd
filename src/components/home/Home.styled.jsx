import styled from "styled-components";

export const HomeDiv = styled.div`
  background-color: #ffffff;
  position: absolute;
  left: 0%;
  top: 12%;
  width: 90%;
  height: 88%;
  margin-left: 10%;
`;
export const DivImgHome = styled.div`
  position: absolute;
  top: 10%;
  left: 23%;
  width: 55%;
  height: 55%;
`;

export const ImgHome = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const HomeText = styled.h2`
  display: flex;
  margin-top: 2%;
  justify-content: center;
`;

export const DivButtonsHome = styled.div`
  position: absolute;
  top: 67%;
  left: 8.5%;
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-evenly;
`;

export const HomeButton = styled.button`
  width: 20%;
  font-size: 1.2em;
  border-color: #ea561d;
  border-style: solid;
  color: #ea561d;
  background-color: transparent;
  font-weight: 400;
  cursor: pointer;
  border-radius: 0.1vw;

  &:hover {
    color: white;
    background-color: #ff4700;
  }
`;
