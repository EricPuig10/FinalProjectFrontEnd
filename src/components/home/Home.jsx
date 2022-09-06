import { Link } from "react-router-dom";
import {
  DivButtonsHome,
  DivImgHome,
  HomeButton,
  HomeDiv,
  HomeText,
  ImgHome,
} from "./Home.styled";

export const Home = () => {
  return (
    <HomeDiv>
      <HomeText>Hello Admin, what do you want to check today?</HomeText>
      <DivImgHome>
        <ImgHome src="https://developer.visa.com/images2/platform/homepage/homepage-06-2021-update/vdp-home-morewaystowork-illo.png" />
      </DivImgHome>
      <DivButtonsHome>
        <Link to="/candidats">
          <HomeButton>Candidats</HomeButton>
        </Link>
        <Link to="/bootcamps">
          <HomeButton>Bootcamps</HomeButton>
        </Link>
        <Link to="/process">
          <HomeButton>Process</HomeButton>
        </Link>
      </DivButtonsHome>
    </HomeDiv>
  );
};
