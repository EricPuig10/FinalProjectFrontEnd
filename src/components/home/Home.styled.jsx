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
  width: 50%;
  height: 50%;
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
  font-family: "Quicksand";
`;

export const DivButtonsHome = styled.div`
  position: absolute;
  /* background-color: yellow; */
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
  border-color: #ff4700;
  border-style: solid;
  color: #ff4700;
  background-color: transparent;
  font-family: "Poppins";
  font-weight: 400;
  cursor: pointer;
  border-radius: 0.1vw;
  transition: 0.4s;

  &:hover {
    color: white;
    background-color: #ff4700;
  }
`;
