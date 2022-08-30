import styled from "styled-components";

export const CtForm = styled.div`
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
`

export const Form = styled.form`
    height: 20vh;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    filter: drop-shadow(2px 1px 6px #7a8188 );

`
export const CtInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  font-family: "Lato", sans-serif;
  font-size: 1em;
  width: 100%;
  height: 2rem;
  padding: 0px 15px 0px 15px;
  background: #dce0f0;

  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  `;

export const CtButton = styled.div`
    display: flex;
    justify-content: center;
`
export const BtLogin = styled.button`
  width: 5em;
  height: 2.25em;
  text-align: center;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1rem;  
`