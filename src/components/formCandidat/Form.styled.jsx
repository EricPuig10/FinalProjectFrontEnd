import styled, { keyframes } from "styled-components";

export const moveDivUpToDown = keyframes`
from {
    transform: translateY(-60%)
  }
  to {
    transform: translateY(0%);
  }
`;

export const BackGroundForm = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  /* background-color: red; */
  /* border: 5px solid red; */
  z-index: 100;
`;

export const FormCont = styled.div`
  width: 90%;
  display: flex;
  border-style: solid;
  border-color: grey;
  padding: 2%;
  border-radius: 2vw;
  justify-content: center;
  position: fixed;
  left: 8%;
  top: 12%;
  background-color: white;
  z-index: 300;
  animation: ${moveDivUpToDown} 2s;

  @media (max-width: 450px) {
    width: 94%;
    left: 0%;
    top: 0%;
    z-index: 10000;
    height: 81vh;
    z-index: 20000;
    padding-bottom: 30%;
    padding-top: 10%;
    flex-direction: column;
  }
`;

export const InputsCont = styled.div`
  width: 100%;
  flex-direction: column;
  margin-left: 2.3%;
  display: flex;
  z-index: 4;
  padding-bottom:1%;
  @media (max-width: 450px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 4;
    margin-top: 5%;
  }
`;

export const Input = styled.input`
  background-color: rgb(190, 190, 190);
  padding: 1.5%;
  border-radius: 1vw;
  border-style: solid;
  border-color: white;
  font-size: 0.9em;
  width: 60%;
  color: black;
  margin-bottom: 2%;
  @media (max-width: 450px) {
    padding: 3%;
    margin-bottom: 2%;
    width: 90%;
    font-size: 1.2em;
    border-radius: 2vw;
  }
`;

export const TextArea = styled.textarea`
  background-color: rgb(190, 190, 190);
  padding: 2%;
  border-radius: 1vw;
  border-style: solid;
  border-color: white;
  font-size: 1.2em;
  max-width: 1000px;
  color: black;
  max-height: 200px;
  @media (max-width: 450px) {
    padding: 5%;
    margin-bottom: 5%;
    width: 90%;
    font-size: 1.2em;
  }
`;

export const SubmitBtnForm = styled.button`
  background-color: transparent;
  color: black;
  width: 10%;
  font-size: 1.3em;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 90%;
  left: 92%;
  &:hover {
    color: grey;
  }
  @media (max-width: 450px) {
    position: absolute;
    top: 95%;
    left: 45%;
    font-size: 1.2em;
  }
`;

export const CloseCont = styled.div`
  position: relative;
  width: 10%;
  @media (max-width: 450px) {
    position: absolute;
    padding-top: 10%;
    top: 0.5%;
    left: 90%;
  }
`;

export const CloseBtn = styled.button`
  border: none;
  background-color: rgb(255, 255, 255);
  color: black;
  font-weight: bold;
  font-size: 1em;
  padding-top: 1%;
  padding-bottom: 1%;
  padding-left: 1%;
  padding-right: 1%;
  border-radius: 1.2vw;
  position: absolute;
  top: -2%;
  left: 90%;
  &:hover {
    color: grey;
  }
  @media (max-width: 450px) {
    position: absolute;
    padding-top: 10%;
    top: 1%;
    left: 44%;
    background-color: transparent;
  }
`;
