import styled from "styled-components";

export const CtSidebar = styled.div`
box-sizing: border-box;
position: fixed;
border-top-right-radius: 2vw;
border-bottom-right-radius: 2vw;
top:0%;
left:0%;
z-index: 2;
width: 10%;
height: 100%;
mix-blend-mode: normal;
background-color: #FF4700;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const CtLogo = styled.div`
margin-left: 5%;
height:20%;
width: 90%;
`;


export const Logo = styled.img`
width: 100%;
height:100%;
object-fit: contain;
`;


export const CtButton = styled.div`
height:80%;
width: 100%;
display: flex;
flex-direction: column;
display: flex;
`;


export const Button = styled.button`
height:14%;
background-color: transparent;
border: none;
color: white;
font-size: 1em;
font-weight: bold;
cursor: pointer;


&:hover{
    color: black;
}
`;

