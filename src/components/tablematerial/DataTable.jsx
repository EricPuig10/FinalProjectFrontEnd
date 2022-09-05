import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { candidatsService } from "../../services/candidatsService";
import { useEffect } from "react";
import { TableButton } from "./DataTable.styled";


export default function DataTable() {
  const [candidats, setCandidats] = useState([]);

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
            <TableButton
              variant="contained"
              color="primary"
              // onClick={(event) => {
              //   handleClick(event, cellValues);
              // }}
            >
              <i className="fa-regular fa-pen-to-square fa-xl"></i>
            </TableButton>
            <TableButton
              variant="contained"
              color="primary"
              onClick={()=>deleteCandidat(cellValues.row.id)}
            >
              <i className="fa-solid fa-trash fa-xl"></i>
            </TableButton>
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
      type: "number",
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
    { field: "bootcamp", headerName: "Bootcamp", width: 130 },
    { field: "processState", headerName: "Process State", width: 130 },
  ];
  
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

  return (
    <div style={{ height: 600, width: "90%", marginLeft: "10%" }}>
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
  );
}
