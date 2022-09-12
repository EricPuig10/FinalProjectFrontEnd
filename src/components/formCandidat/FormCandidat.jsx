import { useEffect } from "react";
import { useState } from "react";
import { bootcampsService } from "../../services/bootcampsService";
import { candidatsService } from "../../services/candidatsService";
import {
  BackGroundForm,
  CloseBtn,
  CloseCont,
  DivInput,
  DivLeft,
  DivRight,
  FormCont,
  Input,
  InputsCont,
  Label,
  SubmitBtnForm,
  TextArea,
} from "./Form.styled";

export const FormCandidat = (props) => {
  const [newCandidat, setNewCandidat] = useState(props.candidatToEdit);
  const [bootcamps, setBootcamps] = useState([]);
  const [candidats, setCandidats] = useState([]);
  const [isEditMode] = useState(props.isEditMode);

  useEffect(() => {
    getAllBootcamps();
    getAllCandidats();
  }, []);

  const getAllBootcamps = () => {
    bootcampsService.getAllBootcamps().then((res) => {
      setBootcamps(res);
    });
  };

  const getAllCandidats = () => {
    candidatsService.getAllCandidats().then((res) => {
      setCandidats(res);
    });
  };

  // const getAllProcess = () => {
  //   processService.getAllProcess().then((res) => {
  //     setProcess(res);
  //   });
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (newCandidat.name.length > 0) {
      !isEditMode
        ? props.addNewCandidat(newCandidat)
        : props.updateCandidat(newCandidat);
    }

    resetInputsForm();
  };

  const resetInputsForm = (e) => {
    setNewCandidat({
      candidat: {
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
      },
    });
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewCandidat({ ...newCandidat, [name]: value });
  };

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.showForm();
    }
  };

  useEffect(
    () => {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      };
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div>
      <BackGroundForm onClick={() => props.showForm()}></BackGroundForm>
      <div>
        <form
          onSubmit={onSubmitHandler}
          noValidate
          encType="multipart/form-data"
        >
          <FormCont>
            <InputsCont>
              <DivLeft>
                {" "}
                <DivInput>
                  {" "}
                  <Label>Name</Label>
                  <Input
                    onChange={onInputChange}
                    value={newCandidat.name}
                    aria-label="name"
                    name="name"
                    type="text"
                    placeholder="Name..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Lastname</Label>
                  <Input
                    onChange={onInputChange}
                    value={newCandidat.lastname}
                    aria-label="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Lastname..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>2nd Lastname</Label>
                  <Input
                    onChange={onInputChange}
                    value={newCandidat.secondlastname}
                    aria-label="secondlastname"
                    name="secondlastname"
                    type="text"
                    placeholder="Second lastname..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Email</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="email"
                    value={newCandidat.email}
                    name="email"
                    type="email"
                    placeholder="Add email..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Phone</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="phone"
                    value={newCandidat.phone}
                    name="phone"
                    type="tel"
                    placeholder="Add phone..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Age</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="age"
                    value={newCandidat.age}
                    name="age"
                    type="number"
                    placeholder="Add age..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Gender</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="gender"
                    value={newCandidat.gender}
                    name="gender"
                    type="text"
                    placeholder="Add gender..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Nationality</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="nationality"
                    value={newCandidat.nationality}
                    name="nationality"
                    type="text"
                    placeholder="Add nationality..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Direction</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="direction"
                    value={newCandidat.direction}
                    name="direction"
                    type="text"
                    placeholder="Add direction..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Spirit</Label>
                  <TextArea
                    onChange={onInputChange}
                    aria-label="spirit"
                    value={newCandidat.spirit}
                    name="spirit"
                    type="text"
                    placeholder="Add spirit..."
                  ></TextArea>
                </DivInput>
                {/* <select name="bootcamp" value={newCandidat.bootcamp.bootcampName} onChange={onInputChange} >
                {bootcamps.map((bootcamp, index) => (
                  <option key={index}>{bootcamp.bootcampName}</option>
                ))}
              </select> */}
              </DivLeft>
              <DivRight>
                <DivInput>
                  <Label>Image</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="img"
                    value={newCandidat.img}
                    name="img"
                    type="url"
                    placeholder="Add candidat img..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Laboral situation</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="laboralsituation"
                    value={newCandidat.laboralsituation}
                    name="laboralsituation"
                    type="text"
                    placeholder="Add laboralsituation..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Bootcamp</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="bootcamp"
                    value={newCandidat.bootcamp}
                    name="bootcamp"
                    type="text"
                    placeholder="Add bootcamp..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Process</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="processState"
                    value={newCandidat.processState}
                    name="processState"
                    type="text"
                    placeholder="Add processState..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Last degree</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="degree"
                    value={newCandidat.degree}
                    name="degree"
                    type="text"
                    placeholder="Add degree..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Superpower</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="superpower"
                    value={newCandidat.superpower}
                    name="superpower"
                    type="text"
                    placeholder="Add superpower..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>English level</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="english"
                    value={newCandidat.english}
                    name="english"
                    type="text"
                    placeholder="Add english lvl..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Is in another formation</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="formation"
                    value={newCandidat.formation}
                    name="formation"
                    type="text"
                    placeholder="Add formation..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>How had reached us</Label>
                  <Input
                    onChange={onInputChange}
                    aria-label="reached"
                    value={newCandidat.reached}
                    name="reached"
                    type="text"
                    placeholder="Add reached..."
                  ></Input>
                </DivInput>
                <DivInput>
                  <Label>Which is her/his motivation</Label>
                  <TextArea
                    onChange={onInputChange}
                    aria-label="motivation"
                    value={newCandidat.motivation}
                    name="motivation"
                    type="text"
                    placeholder="Add motivation..."
                  ></TextArea>
                </DivInput>
              </DivRight>

              {isEditMode ? (
                <SubmitBtnForm type="submit" className="submitBtn">
                  <i className="fa-solid fa-pen-to-square fa-xl"></i>
                </SubmitBtnForm>
              ) : (
                <SubmitBtnForm type="submit" className="submitBtn">
                  <i className="fa-solid fa-plus fa-xl"></i>
                </SubmitBtnForm>
              )}
            </InputsCont>

            <CloseCont>
              <CloseBtn onClick={() => props.showForm()}>
                <i className="fa-solid fa-xmark fa-xl"></i>
              </CloseBtn>
            </CloseCont>
          </FormCont>
        </form>
      </div>
    </div>
  );
};
