import styled from "styled-components";

export const CtTabBut = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: 15%;
`;

export const TableButton = styled.button`
  margin-left: 30%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #ff4700;
  }
`;

export const BtnAdd = styled.button`
  position: fixed;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: transparent;
  top: 93%;
  left: 93.7%;
  z-index: 100;
  color: #ff4700;
  border-color: #ff4700;
  border-style: double;
  &:hover {
    background-color: #ff4700;
    color: white;
  }
`;
