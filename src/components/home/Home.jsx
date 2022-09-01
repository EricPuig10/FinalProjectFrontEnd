import { DivImgHome, HomeDiv, HomeText, ImgHome } from "./Home.styled";

export const Home = () => {
  return (
    <HomeDiv>
      <HomeText>Hello Admin, what do you want to check today?</HomeText>
      <DivImgHome>
        <ImgHome src="https://gogeticon.net/files/1415312/ddbb04f51ca3a50a4262c824426a618d.png" />
      </DivImgHome>
    </HomeDiv>
  );
};
