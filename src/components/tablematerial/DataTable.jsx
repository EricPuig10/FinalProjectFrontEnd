import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { candidatsService } from "../../services/candidatsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { Link } from "react-router-dom";

export const DataTable = () => {
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
      headerName: "Acciones",
      headerClassName: "super-app-theme--header",

      renderCell: (cellValues) => {
        return (
          <>
            <CtTabBut>
              {/* <TableButton
                variant="contained"
                color="primary"
                onClick={() => {
                  editCandidat(cellValues.row.id);
                }}
              >
                <i className="fa-regular fa-pen-to-square fa-lg"></i>
              </TableButton> */}

              <TableButton
                variant="contained"
                color="primary"
                onClick={() => deleteCandidat(cellValues.row.id)}
              >
                <i className="fa-regular fa-trash-can fa-lg"></i>
              </TableButton>
              <Link to={`/candidats/${cellValues.row.id}`}>
                <TableButton
                  variant="contained"
                  color="primary"
                  // onClick={() => deleteCandidat(cellValues.row.id)}
                >
                  <i className="fa-regular fa-file fa-lg"></i>
                </TableButton>
              </Link>
            </CtTabBut>
          </>
        );
      },
    },
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "name",
      headerName: "Nombre",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lastname",
      headerName: "Apellido",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "secondlastname",
      headerName: "2º apellido",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "age",
      headerName: "Edad",
      width: 90,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "phone",
      headerName: "Teléfono",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "gender",
      headerName: "Género",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "nationality",
      headerName: "Nacionalidad",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "laboralsituation",
      headerName: "Situación laboral",
      width: 130,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "bootcamp",
      headerName: "Bootcamp",
      width: 130,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Link to={`/bootcamps/${params.row.bootcamp.id}/candidats`}>
            <div className="rowitem">{params.row.bootcamp.bootcampName}</div>
          </Link>
        );
      },
    },
    {
      field: "process",
      headerName: "Proceso",
      width: 130,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.processState.name}</div>;
      },
      headerClassName: "super-app-theme--header",
    },

    // { field: 'sololearnprogress', headerName: 'Solo Learn Progress', width: 130 },
    // { field: 'codeacademyprogress', headerName: 'Code Academy Progress', width: 130 },
    // { field: 'assistedtoinformativesession', headerName: 'Assisted Informative Session', width: 130 },
  ];

  const deleteCandidat = (id) => {
    let candidatToDelete = candidats.filter((candidat) => candidat.id === id);
    let deleteConfirmed = window.confirm(
      `Really remove ${candidatToDelete[0].name} from the list?`
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
    <>
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
          pageSize={8}
          rowsPerPageOptions={[8]}
          sx={{
            overflowY: "hidden",
            height: 545,
            "& .super-app-theme--header": {
              backgroundColor: "rgba(225, 225, 225, 0.55)",
            },
          }}
        />
      </div>
      <Link to="/create">
        <BtnAdd>
          <i className="fa-solid fa-plus fa-2xl"></i>
        </BtnAdd>
      </Link>
    </>
  );
};
