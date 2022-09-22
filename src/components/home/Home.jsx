import { Link } from "react-router-dom";
import imgHome from '../../assets/img/imgHome_.png'

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
      <HomeText>Hola Admin, ¿qué quieres comprobar hoy?</HomeText>

      <DivImgHome>
        <ImgHome src={imgHome} />
      </DivImgHome>
      <DivButtonsHome>
        <Link to="/candidats">
          <HomeButton>Candidatos</HomeButton>
        </Link>
        <Link to="/bootcamps">
          <HomeButton>Bootcamps</HomeButton>
        </Link>
        <Link to="/process">
          <HomeButton>Proceso</HomeButton>
        </Link>
      </DivButtonsHome>
    </HomeDiv>
  );
};
