import styled from "styled-components";

export const CtForm = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  height: 35vh;
  width: 50vw;
  display: flex;
  background-color: #f8f5f4;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Label = styled.label`
  width: 80%;
  border-radius: none;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: #dce0f0;
`;

export const CtInput = styled.input`
  padding: 0 2.5% 0 2.5%;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  background: #dce0f0;
  border: none;
`;

export const CtButton = styled.div`
  width: 100%; /* o 80% */
  height: 2rem;
  display: flex;
  justify-content: center;
`;

export const BtLogin = styled.button`
  width: 80%; 
  height: 2.5rem;
  border: none;
  text-align: center;
  background-color:#ea561d;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bolder;
`;

export const CtImg = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopUp = styled.div`
  position: fixed;
  z-index: 10000;
  top: 10%;
  right: 1.5%;
`;

export const BtEye = styled.button`
  width: 20%; 
  height: 2.5rem;
  background: #dce0f0;
  border: none;
  color: #ea561d; 
  cursor: pointer;
`;

export const CtInputPassword = styled.input`
  padding: 0 2.5% 0 2.5%;
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
  background: #dce0f0;
  border: none;
`;

export const LabelPassword = styled.label`
  width: 80%;
  font-size: 1rem;
  font-style: italic;
  border-radius: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background: #dce0f0;
`;