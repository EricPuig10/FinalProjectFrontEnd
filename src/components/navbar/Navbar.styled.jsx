import styled from "styled-components";

export const DivNav = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  height: 70px;
  background-color: #ece6e5;
  display: flex;
  justify-content: space-between;
`;

export const DivLogo = styled.div`
  height: 100%;
  width: 10%;
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.5%;
  @media (max-width: 1000px) {
    margin-left: 7%;
  }
  @media (max-width: 600px) {
    margin-left: 15%;
  }
`;

export const Logo = styled.h3`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ea561d;
  font-family: "Poppins";
`;

export const DivButton = styled.div`
  height: 100%;
  width: 20%;
  /* background-color: yellow; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: -10.5%;
  @media (max-width: 1000px) {
    margin-right: 0%;
  }
  @media (max-width: 600px) {
    margin-right: 0%;
  }
`;
export const LogInButton = styled.button`
  width: 60%;
  height: 40%;
  background-color: transparent;
  border: none;
  color: #ea561d;
  font-family: "Poppins";
  font-size: 1em;
  font-weight: 300;
  cursor: pointer;
  &:hover {
    color: #ea561d;
  }
`;
