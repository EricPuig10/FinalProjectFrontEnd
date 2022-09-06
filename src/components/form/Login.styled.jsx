import styled from "styled-components";

export const CtForm = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  height: 40vh;
  width: 50vw;
  background-color: #fbf3f0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* filter: drop-shadow(2px 1px 6px #7a8188 ); */
`;

export const Label = styled.label`
  width: 80%;
  border-radius: 5%;
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
  width: 94%;
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
  background-color: #ff4700;
  color: white;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;
  font-weight: bolder;
`;
