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
  gender: "",
  nationality: "",
  laboralsituation: "",
  bootcamp: "",
  processState: "",
  sololearnprogress: "",
  codeacademyprogress: "",
  assistedtoinformativesession: "",
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
    const name = e.target.name;
    const value = e.target.innerText;
    setCandidat({ ...candidat, [name] : value });
  };

  console.log(candidat)
  //   const onInputChange = (e) => {
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     setNewCandidat({ ...newCandidat, [name]: value });
  //   };
  return (
    <DetailDiv>
      <Div>
        <BasicInfoDiv>
          <LeftDiv>
            <DetailDivImg>
              <DetailImg src="https://media-exp1.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_800_800/0/1587477510501?e=1668038400&v=beta&t=CDPVd3nDIuH06ntqP_TcBYJJYfo-SmgegCV6zvB1CHI" />
            </DetailDivImg>
            <BasicInfoTextDiv>
              <DetailBasicText>
                Name:{" "}
                <Variables
                  name="name"
                  contentEditable="true"
                  onInput={(e) => onInputChange(e)}
                  onBlur={(e) => onInputChange(e)}
                  suppressContentEditableWarning={true}
                >
                  {candidat.name}{" "}
                </Variables>{" "}
              </DetailBasicText>

              <DetailBasicText>
                Lastname: <Variables>{candidat.lastname} </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Secondlastname:{" "}
                <Variables>{candidat.secondlastname} </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Email: <Variables>{candidat.email} </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Phone: <Variables>{candidat.phone} </Variables>
              </DetailBasicText>
              <DetailBasicText>
                Age: <Variables>{candidat.age} </Variables>
              </DetailBasicText>
            </BasicInfoTextDiv>
          </LeftDiv>
          <DetailDivText>
            <DetailText>
              Gender:<Variables>{candidat.gender}</Variables>{" "}
            </DetailText>
            <DetailText>
              Nationality: <Variables>{candidat.nationality}</Variables>{" "}
            </DetailText>
            <DetailText>
              Laboral situation:{" "}
              <Variables>{candidat.laboralsituation}</Variables>
            </DetailText>
            <DetailText>
              Bootcamp: <Variables>{candidat.bootcamp.bootcampName} </Variables>{" "}
            </DetailText>
            <DetailText>
              Process: <Variables>{candidat.processState.name} </Variables>{" "}
            </DetailText>
            <DetailText>
              SoloLearn Progress:{" "}
              <Variables>{candidat.sololearnprogress}</Variables>{" "}
            </DetailText>
            <DetailText>
              Code Academy Progress:{" "}
              <Variables>{candidat.codeacademyprogress}</Variables>{" "}
            </DetailText>
            <DetailText>
              Assisted To Informative Session:{" "}
              <Variables>{candidat.assistedtoinformativesession}</Variables>{" "}
            </DetailText>
          </DetailDivText>
          <DivButtonsDetail>
            <DetailButton onClick={() => deleteCandidat(id)}>
              <i className="fa-solid fa-trash-can fa-2xl"></i>
            </DetailButton>

            <DetailButton>
              <i className="fa-solid fa-print fa-2xl"></i>
            </DetailButton>

            <DetailButton>
              <i className="fa-solid fa-share-nodes fa-2xl"></i>
            </DetailButton>
          </DivButtonsDetail>
        </BasicInfoDiv>
      </Div>
    </DetailDiv>
  );
};
