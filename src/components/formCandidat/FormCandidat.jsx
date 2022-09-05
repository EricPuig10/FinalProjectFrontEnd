import { Input } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import {
  BackGroundForm,
  CloseBtn,
  CloseCont,
  FormCont,
  InputsCont,
  SubmitBtnForm,
} from "./FormCandidat.styled";

export const FormCandidat = (props) => {
  const [newCandidat, setNewCandidat] = useState(props.candidatToEdit);
  const [isEditMode] = useState(props.isEditMode);

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
              <Input
                onChange={onInputChange}
                value={newCandidat.name}
                aria-label="name"
                name="name"
                type="text"
                placeholder="Name..."
              ></Input>

              <Input
                onChange={onInputChange}
                value={newCandidat.lastname}
                aria-label="lastname"
                name="lastname"
                type="text"
                placeholder="Lastname..."
              ></Input>
              <Input
                onChange={onInputChange}
                value={newCandidat.secondlastname}
                aria-label="secondlastname"
                name="secondlastname"
                type="text"
                placeholder="Second lastname..."
              ></Input>
              <Input
                onChange={onInputChange}
                aria-label="email"
                value={newCandidat.email}
                name="email"
                placeholder="Add email..."
              ></Input>
              <Input
                onChange={onInputChange}
                aria-label="phone"
                value={newCandidat.phone}
                name="phone"
                placeholder="Add phone..."
              ></Input>
              <Input
                onChange={onInputChange}
                aria-label="age"
                value={newCandidat.age}
                name="age"
                placeholder="Add age..."
              ></Input>
                       <Input
                onChange={onInputChange}
                aria-label="gender"
                value={newCandidat.gender}
                name="gender"
                placeholder="Add gender..."
              ></Input>
                       <Input
                onChange={onInputChange}
                aria-label="nationality"
                value={newCandidat.nationality}
                name="nationality"
                placeholder="Add nationality..."
              ></Input>
                       <Input
                onChange={onInputChange}
                aria-label="laboralsituation"
                value={newCandidat.laboralsituation}
                name="laboralsituation"
                placeholder="Add laboralsituation..."
              ></Input>
                       {/* <Input
                onChange={onInputChange}
                aria-label="bootcamp"
                value={newCandidat.bootcamp}
                name="bootcamp"
                placeholder="Add bootcamp..."
              ></Input>
                       <Input
                onChange={onInputChange}
                aria-label="processState"
                value={newCandidat.processState}
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
