import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { candidatsService } from "../../services/candidatsService";
import {
  BasicInfoDiv,
  BasicInfoTextDiv,
  DetailBasicText,
  DetailButton,
  DetailDiv,
  DetailDivImg,
  DetailDivText,
  DetailImg,
  DetailText,
  Div,
  DivButtonsDetail,
  LeftDiv,
  Variables,
} from "./Detail.styled";

const initialCandidat = {
  id: "",
  name: "",
  lastname: "",
  secondlastname: "",
  email: "",
  phone: "",
  age: "",
  degree: "",
  date: "",
  superpower: "",
  direction: "",
  english: "",
  formation: "",
  reached: "",
  spirit: "",
  motivation: "",
  gender: "",
  nationality: "",
  laboralsituation: "",
  bootcamp: "",
  processState: "",
  sololearnprogress: "",
  codeacademyprogress: "",
  assistedtoinformativesession: "",
  img:""
};

export const Detail = () => {
  const [candidat, setCandidat] = useState(initialCandidat);
  const [isEditMode, setIsEditMode] = useState(false);


  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getById(id);
  }, []);

  const getById = (id) => {
    candidatsService.getCandidatById(id).then((res) => {
      setCandidat(res);
    });
  };

  const deleteCandidat = (id) => {
    let deleteConfirmed = window.confirm(
      `Really remove ${candidat.name} from the list?`
    );
    if (!deleteConfirmed) return;

    candidatsService.deleteCandidat(id).then((res) => {
      if (!res) return;
      if (res.error) {
        console.log(res.error);

        return;
      }
      navigate("/candidats", { replace: true });
    });
  };

  const onInputChange = (e) => {
    const name = e.target.attributes.name.value;
    const value = e.target.attributes.value.value;
    console.log(e.target.attributes.name.value)
    console.log(e.target.attributes.value.value)
    console.log(candidat)
    setCandidat({ ...candidat, [name]: value });
    console.log(candidat)
  };

  const onSubmit = () => {
    updateCandidat(candidat);
  }

  const updateCandidat = (newCandidat) => {
    candidatsService.updateCandidat(newCandidat).then((res) => {
      if (!res) return;
      setCandidat();
      getById(id);
    });
    getById(id);
  };

  console.log(candidat);

  return (
    <DetailDiv>
      <Div>
        <BasicInfoDiv>
          <LeftDiv>
            <DetailDivImg>
              <DetailImg src={candidat.img} />
            </DetailDivImg>
            <BasicInfoTextDiv>
              <DetailBasicText>
                Name:{" "}
                <Variables
                  name="name"
                  value={candidat.name}
                  contentEditable="true"
                  onInput={(e) => onInputChange(e)}
                  onBlur={() => onSubmit()}
                  suppressContentEditableWarning={true}
                >
                  {candidat.name}{" "}
                </Variables>{" "}
              </DetailBasicText>

              <DetailBasicText>
                Lastname:{" "}
                <Variables
                  name="lastname"
                  value={candidat.lastname}
                  contentEditable="true"
                  onInput={(e) => onInputChange(e)}
                  onBlur={(e) => onSubmit(e)}
                  suppressContentEditableWarning={true}
                >
                  {candidat.lastname}{" "}
                </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Secondlastname:{" "}
                <Variables
                  name="secondlastname"
                  value={candidat.secondlastname}
                  contentEditable="true"
                  onInput={(e) => onInputChange(e)}
                  onBlur={(e) => onSubmit(e)}
                  suppressContentEditableWarning={true}
                >
                  {candidat.secondlastname}{" "}
                </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Email:{" "}
                <Variables
                  name="name"
                  value={candidat.name}
                  contentEditable="true"
                  onInput={(e) => onInputChange(e)}
                  onBlur={(e) => updateCandidat(candidat)}
                  suppressContentEditableWarning={true}
                >
                  {candidat.email}{" "}
                </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Phone: <Variables>{candidat.phone} </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Age:{" "}
                <Variables
                  name="name"
                  value={candidat.name}
                  contentEditable="true"
                  onInput={(e) => onInputChange(e)}
                  onBlur={(e) => updateCandidat(candidat)}
                  suppressContentEditableWarning={true}
                >
                  {candidat.age}{" "}
                </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Gender:
                <Variables
                  name="gender"
                  value={candidat.gender}
                  contentEditable="true"
                  onInput={(e) => onInputChange(e)}
                  onBlur={(e) => updateCandidat(candidat)}
                  suppressContentEditableWarning={true}
                >
                  {candidat.gender}
                </Variables>{" "}
              </DetailBasicText>
            </BasicInfoTextDiv>
          </LeftDiv>
          <DetailDivText>
            <DetailText>
              Nationality:{" "}
              <Variables
                name="nationality"
                value={candidat.nationality}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.nationality}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              Bootcamp:{" "}
              <Variables
                name="bootcamp"
                value={candidat.bootcamp}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.bootcamp.bootcampName}{" "}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              SoloLearn Progress:{" "}
              <Variables
                name="sololearnprogress"
                value={candidat.sololearnprogress}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.sololearnprogress}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              Laboral situation:{" "}
              <Variables
                name="laboralsituation"
                value={candidat.laboralsituation}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.laboralsituation}
              </Variables>
            </DetailText>
            <DetailText>
              Degrees:{" "}
              <Variables
                name="degree"
                value={candidat.degree}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.degree}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              Superpower:{" "}
              <Variables
                name="superpower"
                value={candidat.superpower}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.superpower}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              Date of submit:{" "}
              <Variables
                name="date"
                value={candidat.date}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.date}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              {" "}
              Definition of hacker spirit:{" "}
              <Variables
                name="spirit"
                value={candidat.spirit}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.spirit}
              </Variables>{" "}
            </DetailText>
          </DetailDivText>
          <DetailDivText>
            <DetailText>
              Direction:{" "}
              <Variables
                name="direction"
                value={candidat.direction}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.direction}{" "}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              Process:{" "}
              <Variables
                name="processState"
                value={candidat.processState}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.processState.name}{" "}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              Code Academy Progress:{" "}
              <Variables
                name="codeacademyprogress"
                value={candidat.codeacademyprogress}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.codeacademyprogress}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              Assisted To Informative Session:{" "}
              <Variables
                name="assistedtoinformativesession"
                value={candidat.assistedtoinformativesession}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.assistedtoinformativesession}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              English:{" "}
              <Variables
                name="english"
                value={candidat.english}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.english}
              </Variables>{" "}
            </DetailText>

            <DetailText>
              Actually in a formation:{" "}
              <Variables
                name="formation"
                value={candidat.formation}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.formation}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              How you reached us:{" "}
              <Variables
                name="reached"
                value={candidat.reached}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.reached}
              </Variables>{" "}
            </DetailText>
            <DetailText>
              {" "}
              Motivation to join:{" "}
              <Variables
                name="motivation"
                value={candidat.motivation}
                contentEditable="true"
                onInput={(e) => onInputChange(e)}
                onBlur={(e) => updateCandidat(candidat)}
                suppressContentEditableWarning={true}
              >
                {candidat.motivation}
              </Variables>
            </DetailText>
          </DetailDivText>
          <DivButtonsDetail>
            <DetailButton onClick={() => deleteCandidat(id)}>
              <i className="fa-solid fa-trash-can fa-2xl"></i>
            </DetailButton>

            <DetailButton>
              <i className="fa-solid fa-print fa-2xl"></i>
            </DetailButton>

            {/* <DetailButton>
              <i className="fa-solid fa-share-nodes fa-2xl"></i>
            </DetailButton> */}
          </DivButtonsDetail>
        </BasicInfoDiv>
      </Div>
    </DetailDiv>
  );
};
