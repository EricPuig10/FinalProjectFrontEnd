import { DivImgHome, HomeDiv, HomeText, ImgHome } from "./Home.styled";

export const Home = () => {
  return (
    <HomeDiv>
      <HomeText>Hello Admin, what do you want to check today?</HomeText>
      <DivImgHome>
        <ImgHome src="https://developer.visa.com/images2/platform/homepage/homepage-06-2021-update/vdp-home-morewaystowork-illo.png" />
      </DivImgHome>
    </HomeDiv>
  );
};
