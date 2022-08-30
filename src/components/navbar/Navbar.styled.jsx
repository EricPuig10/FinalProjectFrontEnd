import styled from "styled-components";

export const DivNav = styled.div`
width: 80%;
padding-left: 10%;
padding-right: 10%;
height: 70px;
background-color: #FF4700;
display: flex;
justify-content: space-between;
`;

export const DivLogo = styled.div`
height:100%;
width: 10%;
/* background-color: green; */
display: flex;
justify-content: center;
align-items: center;

`;

export const Logo = styled.img`
width:100%;
height: 100%;
object-fit:contain;
`;


export const DivButton = styled.div`
height:100%;
width: 10%;
/* background-color: yellow; */
display: flex;
justify-content: center;
align-items: center;
`;
export const LogInButton = styled.button`
width: 60%;
height: 40%;
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
