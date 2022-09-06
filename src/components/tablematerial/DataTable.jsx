import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { candidatsService } from "../../services/candidatsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { FormCandidat } from "../formCandidat/FormCandidat";

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
  bootcamp: { bootcampName: "", id: "" },
  processState: { name: "", id: "" },
};

export const DataTable = () => {
  const [candidats, setCandidats] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [candidatToEdit, setCandidatToEdit] = useState(initialCandidat);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getAllCandidats();
  }, []);

  const getAllCandidats = () => {
    candidatsService.getAllCandidats().then((res) => {
      setCandidats(res);
    });
  };


  const columns = [
    {
      field: "Actions",
      renderCell: (cellValues) => {
        return (
          <>
            <CtTabBut>
              <TableButton
                variant="contained"
                color="primary"
                onClick={() => {
                  editCandidat(cellValues.row.id);
                }}
              >
                <i className="fa-regular fa-pen-to-square fa-lg"></i>
              </TableButton>

              <TableButton
                variant="contained"
                color="primary"
                onClick={() => deleteCandidat(cellValues.row.id)}
              >
                <i className="fa-regular fa-trash-can fa-lg"></i>
              </TableButton>
              <TableButton
                variant="contained"
                color="primary"
                // onClick={() => deleteCandidat(cellValues.row.id)}
              >
                <i className="fa-regular fa-file fa-lg"></i>
              </TableButton>
            </CtTabBut>
          </>
        );
      },
    },
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "lastname", headerName: "Last name", width: 130 },
    { field: "secondlastname", headerName: "Second last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      width: 90,
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Phone", width: 130 },
    { field: "gender", headerName: "Gender", width: 130 },
    { field: "nationality", headerName: "Nationality", width: 130 },
    { field: "laboralsituation", headerName: "Laboral Situation", width: 130 },
    // { field: 'sololearnprogress', headerName: 'Solo Learn Progress', width: 130 },
    // { field: 'codeacademyprogress', headerName: 'Code Academy Progress', width: 130 },
    // { field: 'assistedtoinformativesession', headerName: 'Assisted Informative Session', width: 130 },
    { field: "bootcamp.bootcampName", headerName: "Bootcamp", width: 130 },
    { field: "processState", headerName: "Process State", width: 130 },
  ];

  const addNewCandidat = (data) => {
    candidatsService.addCandidat(data).then((res) => {
      setCandidats([...candidats, res]);
    });
    setIsShowForm(false);
  };

  const deleteCandidat = (id) => {
    let candidatToDelete = candidats.filter((candidat) => candidat.id === id);
    let deleteConfirmed = window.confirm(
      `Really remove ${candidatToDelete[0].id} from the list?`
    );
    if (!deleteConfirmed) return;
    let filterCandidats = candidats.filter((candidat) => candidat.id !== id);
    console.log(filterCandidats);

    candidatsService.deleteCandidat(id).then((res) => {
      if (!res) return;
      if (res.error) {
        console.log(res.error);

        return;
      }
      setCandidats(filterCandidats);
    });
  };

  const showForm = () => {
    if (isShowForm) setIsShowForm(false);
    else setIsShowForm(true);
    resetInputsForm();
    setIsEditMode(false);
  };

  const resetInputsForm = () => {
    setCandidatToEdit({
      initialCandidat,
    });
  };

  const editCandidat = (id) => {
    showForm();
    let candidatToEdit = candidats.find((candidat) => candidat.id === id);
    setCandidatToEdit(candidatToEdit);
    setIsEditMode(true);
  };

  const updateCandidat = (newCandidat) => {
    candidatsService.updateCandidat(newCandidat).then((res) => {
      if (!res) return;
      setCandidatToEdit();
      getAllCandidats();
    });
    showForm();
    getAllCandidats();
  };

  return (
    <>
      {isShowForm ? (
        <FormCandidat
          addNewCandidat={addNewCandidat}
          candidatToEdit={candidatToEdit}
          updateCandidat={updateCandidat}
          isEditMode={isEditMode}
          isShowForm={isShowForm}
          showForm={showForm}
        />
      ) : (
        ""
      )}
      <div
        style={{
          height: 420,
          width: "90%",
          paddingRight: "4%",
          marginLeft: "10%",
          marginTop: "2.5%",
        }}
      >
        <DataGrid
          columns={columns}
          rows={candidats}
          pageSize={10}
          rowsPerPageOptions={[10]}
          // actions={[
          //   {
          //     icon: 'edit',
          //     tooltip: 'Editar',
          //     onClick: (event, rowData) => alert('Editar' + rowData.name)
          //   },
          //   {
          //     icon: 'delete',
          //     tooltip: 'Eliminar Artista',
          //     onClick: (event, rowData) => alert("Eliminar" + rowData.name)
          //   }
          // ]}
          // options={{
          //   actionsColumnIndex: 1,
          // }}
          // localization={{
          //   header:{
          //     actions: "Acciones"
          //   }
          // }}
          // checkboxSelection
        />
      </div>
      <BtnAdd onClick={showForm}>
        <i className="fa-solid fa-plus fa-2xl"></i>
      </BtnAdd>
    </>
  );
};
