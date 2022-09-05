import styled from "styled-components";

export const DivNav = styled.div`
width: 100%;
padding-left: 10%;
padding-right: 10%;
height: 70px;
background-color: #ECE6E5;
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

export const Logo = styled.h1`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #ea561d;
padding-left:60%;

`;


export const DivButton = styled.div`
height:100%;
width: 20%;
/* background-color: yellow; */
display: flex;
justify-content: flex-end;
align-items: center;
margin-right: -10.5%;
`;
export const LogInButton = styled.button`
width: 60%;
height: 40%;
background-color: transparent;
border: none;
color: #ffffff;
font-size: 1em;
font-weight: bold;
cursor: pointer;
&:hover{
    color: #ea561d;
}
`;
