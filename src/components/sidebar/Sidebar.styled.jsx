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
`;

export const Logo = styled.img`
  width: 90%;
  height: 60px;
  object-fit: contain;
`;

export const CtButton = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6%;
  margin-top: 35%;
  margin-bottom: 10%;
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
position: absolute;
color:#ff4700;
font-size: 10%;
height: 10px;
width: 20px;

&:hover {
  position: absolute;
  display: flex;
  color: white;
  top:70%;
  left:30%;
  font-size: 1em;
  text-align: center;
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
