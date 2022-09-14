import styled from "styled-components";

export const CtSidebar = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0%;
  left: 0%;
  z-index: 0;
  width: 7%;
  height: 100%;
  mix-blend-mode: normal;
  background-color: #ff4700;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
`;

export const CtLogo = styled.div`
  position: relative;
  top: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 30%;
  margin-top: 5%;
`;

export const Logo = styled.img`
  width: 90%;
  height: 60px;
  object-fit: contain;
`;

export const CtButton = styled.div`
  position: relative;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6%;
  margin-top: 35%;
  margin-bottom: 10%;

  &:hover p {
  justify-content: center;
  display:flex;
  height: 10px;
  width: 100%;
  color: white;
  font-size: 80%;
  text-align: center;
  opacity: 1;

  }
`;

export const Icon = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  margin-bottom: 3%;
  font-size: 0.8em;
  cursor: pointer;
  

  &:hover {
    color: #cecaca;
  }
`;
export const Texthiden = styled.p `
opacity: 0;
font-family: "Poppins";
font-weight: 300;

&:hover {
  
}
`


export const Txt = styled.p`
  color: white;
  font-family: mulish, sans-serif;
  font-size: 16px;
  font-weight: 400;
  border: none;
  display: grid;
  grid-gap: 15;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
