import styled from "styled-components";

export const CtTabBut = styled.div`
display: flex;
justify-content: space-evenly;
margin-left: 15%;
`


export const TableButton = styled.button`
margin-left: 30%;
border: none;
background-color: transparent;
cursor: pointer;
&:hover{
    color: #FF4700;
}
`

// export const I = styled.div`
// display: flex;
// justify-content: space-evenly;
// `

export const BtnAddCandidat = styled.button`
position: fixed;
height: 50px;
width: 50px;
border-radius: 50%;
background-color: transparent;
top:90%;
left:95%;
z-index: 100;
color: #FF4700;
border-color: #FF4700;
border-style: double;
&:hover{
    background-color: #FF4700;
    color: white;
}
`