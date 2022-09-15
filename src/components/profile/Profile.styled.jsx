import styled from "styled-components";

export const DetailDiv = styled.div`
  background-color: white;
  width: 93%;
  /* border: 1px solid red; */
  position: absolute;
  top: 9.9%;
  left: 7%;
  z-index: 1000;
  display: flex;
`;

export const Div = styled.div``;

export const BasicInfoDiv = styled.div`
  display: flex;
  position: relative;
`;
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  /* border: 1px solid red; */
  margin: 2%;
`;

export const DetailDivImg = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid grey;
`;

export const DetailImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailDivText = styled.div`
  margin: 2%;
  width: 50%;
  font-size: 1em;
`;
export const BasicInfoTextDiv = styled.div`
  margin-top: 5%;
  width: 100%;
  font-size: 1em;
`;

export const DetailText = styled.h2`
  margin-bottom: 2%;
  padding: 1%;
  border: 1px solid grey;
  font-size: 1em;
  color: #272727;
  display: flex;
`;

export const DetailBasicText = styled.h2`
  margin-bottom: 4%;
  padding: 1%;
  border: 1px solid grey;
  font-size: 1em;
  color: #272727;
  display: flex;
  margin-right: -3%;
`;
export const Variables = styled.div`
  font-size: 1em;
  margin-left: 1%;
  margin-right: 1%;
  color: #5d5d5d;
`;

export const DivButtonsDetail = styled.div`
  /* border: 2px solid red; */
  margin: 2%;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailButton = styled.button`
  width: 40%;
  height: 70px;
  margin-bottom: 5%;
  cursor: pointer;
  background-color: white;
  border: 1px solid grey;
  &:hover {
    color: #ff4700;
    border: 1px solid #ff4700;
  }
`;

export const TextArea = styled.div`
  margin-bottom: 2%;
  padding: 1%;
  border: 1px solid grey;
  font-size: 1em;
  color: #272727;
  display: flex;
`;
