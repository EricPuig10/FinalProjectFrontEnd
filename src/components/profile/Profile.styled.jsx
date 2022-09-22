import styled from "styled-components";

export const DetailDiv = styled.div`
  background-color: white;
  width: 93%;
  position: absolute;
  top: 9.9%;
  left: 7%;
  z-index: 1000;
  display: flex;
`;

export const CtProfile = styled.div`
  background-color: white;
  width: 93%;
  margin-left: 7%;
  z-index: 1000;
`;

export const Div = styled.div``;

export const BasicInfoDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
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

export const ButtonUploadImg = styled.label`
  border: 1px solid #ff4700;
  padding: 6px 12px;
  cursor: pointer;
  margin-bottom: 4%;
  border-radius: 0.5vw;
  &:hover {
    color: #ff4700;
    border: 1px solid #ff4700;
  }
`;

export const Modal = styled.div`
  position: fixed;
  z-index: 10000;
  top: 2%;
  right: 1%;
`;

export const DocDiv = styled.div`
  display: flex;
`;
