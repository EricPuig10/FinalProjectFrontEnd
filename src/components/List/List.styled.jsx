import styled from "styled-components";

export const CtTable = styled.div`
/* border: 2px solid blue; */
/* padding-top: 5rem; */
width: 100%;
display: flex;
justify-content: flex-end;
`;

export const Table = styled.table`
border-collapse: collapse;
width:80%;
/* border: 2px solid red; */
`;

export const Th = styled.th `
border: 1px solid gray;
padding: 4px;
background-color: #FF4700;
color: white;
`;

export const Td = styled.td `
border: 1px solid gray;
padding: 4px;
/* border: 4px solid yellow; */
`;

export const Tr = styled.tr `
border: none;
border: 1px solid gray;
padding: 4px;
tr:nth-of-type(odd) {
      background-color: #474141;
    }
    :nth-child(odd) {
        background-color: #ffc2aa;
    }
    :hover {
      background-color: #FF4700;
      opacity: 80%;
    }
`;
export const Button = styled.button`

`;



    


