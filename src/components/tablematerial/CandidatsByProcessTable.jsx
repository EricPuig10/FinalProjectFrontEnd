import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { candidatsService } from "../../services/candidatsService";
import { useEffect } from "react";
import { CtTabBut, TableButton } from "./DataTable.styled";
import { Link, useParams } from "react-router-dom";
import { processService } from "../../services/processService";
import imgCode from "../../assets/img/codeacademy.png";
import sololearn from "../../assets/img/sololearn.webp";

export const CandidatsByProcessTable = () => {
  const [candidats, setCandidats] = useState([]);
  const [process, setProcess] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getCandidatsByProcessId(id);
    getProcessById(id);
    // eslint-disable-next-line
  }, []);

  const getCandidatsByProcessId = (id) => {
    candidatsService.getCandidatsByProcessId(id).then((res) => {
      setCandidats(res);
    });
  };

  const getProcessById = () => {
    processService.getById(id).then((res) => {
      setProcess(res);
    });
  };

  const columns = [
    {
      field: "Acciones",
      renderCell: (cellValues) => {
        return (
          <>
            <CtTabBut>
              <TableButton
                variant="contained"
                color="primary"
                onClick={() => deleteCandidat(cellValues.row.id)}
              >
                <i className="fa-regular fa-trash-can fa-lg"></i>
              </TableButton>
              <Link to={`/candidatos/${cellValues.row.id}`}>
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
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Nombre", width: 130 },
    { field: "lastname", headerName: "Apellido", width: 130 },
    { field: "secondlastname", headerName: "2?? apellido", width: 130 },
    {
      field: "age",
      headerName: "Edad",
      width: 90,
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Tel??fono", width: 130 },
    { field: "gender", headerName: "G??nero", width: 130 },
    { field: "nationality", headerName: "Nacionalidad", width: 130 },
    { field: "laboralsituation", headerName: "Situaci??n laboral", width: 130 },
    {
      field: "bootcamp",
      headerName: "Bootcamp",
      width: 130,
      renderCell: (params) => {
        return (
          <Link to={`/bootcamps/${params.row.bootcamp.id}/candidatos`}>
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
    },
    {
      field: "sololearnprogress",
      headerName: "Solo Learn",
      width: 90,
      headerClassName: "super-app-theme--header",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            {!params.row.sololearnprogress ? null : (
              <a href={params.row.sololearnprogress} className="rowitem">
                <img
                  src={sololearn}
                  style={{ width: 25, height: 25 }}
                  alt="codeacademy"
                />
              </a>
            )}
          </>
        );
      },
    },
    {
      field: "codeacademyprogress",
      headerName: "Code Academy",
      width: 120,
      headerClassName: "super-app-theme--header",
      align: "center",
      renderCell: (params) => {
        return (
          <>
            {!params.row.codeacademyprogress ? null : (
              <a href={params.row.codeacademyprogress} className="rowitem">
                <img
                  src={imgCode}
                  style={{ width: 25, height: 25 }}
                  alt="codeacademy"
                />
              </a>
            )}
          </>
        );
      },
    },
  ];

  const deleteCandidat = (id) => {
    let candidatToDelete = candidats.filter((candidat) => candidat.id === id);
    let deleteConfirmed = window.confirm(
      `Really remove ${candidatToDelete[0].name} from the list?`
    );
    if (!deleteConfirmed) return;
    let filterCandidats = candidats.filter((candidat) => candidat.id !== id);

    candidatsService.deleteCandidat(id).then((res) => {
      if (!res) return;
      if (res.error) {
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
        <p style={{ marginBottom: 4, fontSize: 20 }}>{process.name}s</p>
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
    </>
  );
};
