import styled from "styled-components";

export const CtSidebar = styled.div`
box-sizing: border-box;
position: absolute;
width: 245px;
height: 925px;
left: 0px;
top: 67px;
mix-blend-mode: normal;
background-color: #FF4700;
display: flex;
flex-direction: column;
justify-content: space-between;
/* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
`;

export const CtLogo = styled.div`
height:20%;
width: 100%;
border: 5px solid green;
display: flex;
justify-content: center;
align-items: flex-start;
`;


export const Logo = styled.img`
left: 0px;
top: 67px;
border: 5px solid red;
object-fit:contain;
`;


export const CtButton = styled.div`
height:80%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 5px solid pink;
`;


export const Button = styled.button`
width: 100%;
height: 40%;
flex-direction: row;
background-color: transparent;
border: none;
color: white;
font-size: 1em;
border: 5px solid blue;
font-weight: bold;
cursor: pointer;


&:hover{
    color: black;
}
`;
