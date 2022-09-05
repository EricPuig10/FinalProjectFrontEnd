import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { bootcampsService } from "../../services/bootcampsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { FormCandidat } from "../formCandidat/FormCandidat";

const initialBootcamp = {
  id: "",
  bootcampName: "",
  type: "",
  duration: "",
  characteristics: "",
  isPresential: "",
};

export default function BootcampTable() {
  const [bootcamps, setBootcamps] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [bootcampToEdit, setBootcampToEdit] = useState(initialBootcamp);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getAllBootcamps();
  }, []);

  const getAllBootcamps = () => {
    bootcampsService.getAllBootcamps().then((res) => {
      setBootcamps(res);
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
                  // editCandidat(cellValues.row.id);
                }}
              >
                <i className="fa-regular fa-pen-to-square fa-lg"></i>
              </TableButton>

              <TableButton
                variant="contained"
                color="primary"
                // onClick={() => deleteCandidat(cellValues.row.id)}
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
    { field: "bottcampName", headerName: "Name", width: 130 },
    { field: "type", headerName: "Type", width: 130 },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "characteristics", headerName: "Characteristics", width: 130 },
    { field: "isPresential", headerName: "is Presential", width: 130 },
  ];

  const addNewBootcamp = (data) => {
    bootcampsService.addBootcamp(data).then((res) => {
      setBootcamps([...bootcamps, res]);
    });
    setIsShowForm(false);
  };

  // const deleteBootcamp = (id) => {
  //   let bootcampToDelete = bootcamps.filter((candidat) => bootcamp.id === id);
  //   let deleteConfirmed = window.confirm(
  //     `Really remove ${bootcampToDelete[0].id} from the list?`
  //   );
  //   if (!deleteConfirmed) return;
  //   let filterBootcamps = bootcamps.filter((bootcamp) => bootcamp.id !== id);

  //   bootcampsService.deleteBootcamp(id).then((res) => {
  //     if (!res) return;
  //     if (res.error) {
  //       console.log(res.error);

  //       return;
  //     }
  //     setBootcamps(filterBootcamps);
  //   });
  // };

  const showForm = () => {
    if (isShowForm) setIsShowForm(false);
    else setIsShowForm(true);
    resetInputsForm();
    setIsEditMode(false);
  };

  const resetInputsForm = () => {
    setBootcampToEdit({
      initialBootcamp,
    });
  };

  const editBootcamp = (id) => {
    showForm();
    let bootcampToEdit = bootcamps.find((bootcamp) => bootcamp.id === id);
    setBootcampToEdit(bootcampToEdit);
    setIsEditMode(true);
  };

  const updateBootcamp = (newBootcamp) => {
    bootcampsService.updateBootcamp(newBootcamp).then((res) => {
      if (!res) return;
      setBootcampToEdit();
      getAllBootcamps();
    });
    showForm();
    getAllBootcamps();
  };

  return (
    <>
      {isShowForm ? (
        <FormCandidat
          addNewBootcamp={addNewBootcamp}
          bootcampToEdit={bootcampToEdit}
          updateBootcamp={updateBootcamp}
          isEditMode={isEditMode}
          isShowForm={isShowForm}
          showForm={showForm}
        />
      ) : (
        ""
      )}
      <div
        style={{
          height: 500,
          width: "90%",
          paddingRight: "4%",
          marginLeft: "10%",
          marginTop: "2.5%",
        }}
      >
        <DataGrid
          columns={columns}
          rows={bootcamps}
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
      <BtnAdd  onClick={showForm}><i className="fa-solid fa-plus fa-2xl"></i></BtnAdd>
    </>
  );
}
