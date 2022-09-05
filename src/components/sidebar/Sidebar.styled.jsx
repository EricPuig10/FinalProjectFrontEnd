import styled from "styled-components";

export const CtSidebar = styled.div`
box-sizing: border-box;
position: absolute;
top:0%;
left:0%;
z-index: 0;
width: 7%;
height: 100%;
mix-blend-mode: normal;
background-color: #FF4700;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

export const CtLogo = styled.div`
position: relative;
top: -8%;

/* height:10%; */
width: 100%;
/* margin-top: 5%; */
display: flex;
justify-content: center;
align-items: flex-start;
`;

export const Logo = styled.img`
width: 90%;
height: 200%;
object-fit:contain;
`;

export const CtButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 2em;
`;

export const Icon = styled.button`
background-color: transparent;
border: none;
color: white;
margin-bottom: 3%;
font-size: 0.80em;
cursor: pointer;

&:hover{
    color: #cecaca;
}
`;

export const Txt = styled.p`
color: white;
font-family: mulish,sans-serif;
font-size: 16px;
font-weight: 400;
border: none;
display: grid;
grid-gap: 15;
cursor: pointer;

&:hover{
    color: black;
}
`;


