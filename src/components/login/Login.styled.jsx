import styled from "styled-components";

export const CtForm = styled.div`
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  height: 40vh;
  width: 50vw;
  display: flex;
  background-color: #f8f5f4;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* filter: drop-shadow(2px 1px 6px #7a8188 ); */
`;

export const Label = styled.label`
  width: 80%;
  border-radius: none;
  font-size: 1rem;
  font-style: italic;
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
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-family: "Lato", sans-serif;
  font-size: 1em;

  background: #dce0f0;
  border: none;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
`;

export const CtButton = styled.div`
  width: 100%; /* o 80% */
  height: 2rem;
  display: flex;
  justify-content: center;
`;
export const BtLogin = styled.button`
  width: 80%; /* o 100% */
  height: 2.5rem;
  border: none;
  text-align: center;
  background-color:#ea561d;
  color: white;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  font-weight: bolder;
`;

export const CtImg = styled.div`
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  height: 50vh;
  /* width: 30vw; */
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

