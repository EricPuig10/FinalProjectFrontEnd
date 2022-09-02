import styled from "styled-components";

export const CtTable = styled.div`
/* border: 2px solid blue;
padding-top: 5rem; */
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
/* border: 1px solid gray; */
font-family: "Changa";
  font-size: 1em;
  font-weight: 700;
  letter-spacing: 0.1rem;
padding: 4px;
background-color: #d4d4d4;
color: #2c2c2c;
`;

export const Td = styled.td `
/* border: 1px solid gray; */
font-family: "Nunito";
  font-size: 1.1em;
  font-weight: 400;
  letter-spacing: 0.1rem;
padding: 4px;
/* border: 4px solid yellow; */
`;

export const Tr = styled.tr `
/* border: none;
border: 1px solid gray; */
padding: 4px;
tr:nth-of-type(odd) {
      background-color: #474141;
    }
    :nth-child(odd) {
        background-color: #e8e7e7;
    }
    :hover {
      background-color: #fadace;
      opacity: 80%;
    }
`;



    


