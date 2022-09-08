import { Input } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { bootcampsService } from "../../services/bootcampsService";
import { candidatsService } from "../../services/candidatsService";
import {
  BackGroundForm,
  CloseBtn,
  CloseCont,
  FormCont,
  InputsCont,
  SubmitBtnForm,
} from "./Form.styled";

export function FormBootcamp ( props, {showForm, bootcamp } ) {
  const [newBootcamp, setNewBootcamp] = useState(props.bootcampToEdit);
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

    if (newBootcamp.name.length > 0) {
      !isEditMode
        ? props.addNewBootcamp(newBootcamp)
        : props.updateBootcamp(newBootcamp);
    }

    resetInputsForm();
  };

  const resetInputsForm = (e) => {
    setNewBootcamp({
      bootcamp: {
        id: "",
        bootcampName: "",
        type: "",
        duration: "",
        characteristics: "",
        isPresential: "",
      },
    });
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBootcamp({ ...newBootcamp, [name]: value });
  };

  // funció per tancar el formulari modal amb la tecla ESC
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.showForm();
    }
  };

  // quan es monta el dom prepara un event-listener perquè quan apretem la tecla ESC executi la funció
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
              <Input
                onChange={onInputChange}
                value={newBootcamp.bootcampName}
                aria-label="name"
                name="name"
                type="text"
                placeholder="Name of bootcamp"
              ></Input>

              <Input
                onChange={onInputChange}
                value={newBootcamp.type}
                aria-label="type"
                name="type"
                type="text"
                placeholder="Type of bootcamp"
              ></Input>

              <Input
                onChange={onInputChange}
                value={newBootcamp.duration}
                aria-label="duration"
                name="duration"
                type="text"
                placeholder="Duration"
              ></Input>
              
              <Input
                onChange={onInputChange}
                aria-label="characteristics"
                value={newBootcamp.characteristics}
                name="characteristics"
                placeholder="characteristics of bootcamp"
              ></Input>
              
              <Input
                onChange={onInputChange}
                aria-label="isPresential"
                value={newBootcamp.presential}
                name="isPresential"
                placeholder="is it presential?"
              ></Input>
                                         

              <select name="bootcamp" value={newBootcamp.bootcamp.bootcampName} onChange={onInputChange} >
                {bootcamps.map((bootcamp, index) => (
                  <option key={index}>{bootcamp.bootcampName}</option>
                ))}
              </select>
              {/* <Input
                onChange={onInputChange}
                aria-label="bootcamp"
                value={newCandidat.bootcamp.bootcampName}
                name="bootcamp"
                placeholder="Add bootcamp..."
              ></Input>
              <Input
                onChange={onInputChange}
                aria-label="processState"
                value={newCandidat.processState.name}
                name="processState"
                placeholder="Add processState..."
              ></Input> */}

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

export default FormBootcamp
