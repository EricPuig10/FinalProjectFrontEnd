import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { candidatsService } from "../../services/candidatsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { Link, useLocation, useParams } from "react-router-dom";
import imgCode from "../../assets/img/codeacademy.png";
import sololearn from "../../assets/img/sololearn.webp";
import { bootcampsService } from "../../services/bootcampsService";

export const CandidatsByBootcampTable = () => {
  const [candidats, setCandidats] = useState([]);
  const [bootcamp, setBootcamp] = useState([]);

  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    getCandidatsByBootcampId(id);
    getBootcampById(id);
    // eslint-disable-next-line
  }, []);

  const getCandidatsByBootcampId = (id) => {
    candidatsService.getCandidatsByBootcampId(id).then((res) => {
      setCandidats(res);
    });
  };

  const getBootcampById = () => {
    bootcampsService.getBootcampById(id).then((res) => {
      setBootcamp(res);
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
    { field: "secondlastname", headerName: "2º apellido", width: 130 },
    {
      field: "age",
      headerName: "Edad",
      width: 90,
    },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone", headerName: "Teléfono", width: 130 },
    { field: "gender", headerName: "Género", width: 130 },
    { field: "nationality", headerName: "Nacionalidad", width: 130 },
    { field: "laboralsituation", headerName: "Situación laboral", width: 130 },
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
        <p style={{ marginBottom: 4, fontSize: 20 }}>
          Candidatos del bootcamp {bootcamp.bootcampName}
        </p>
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
      {location.pathname === "/bootcamps/create" || "/bootcamps/:id" ? null : (
        <Link to="/bootcamps/create">
          <BtnAdd>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnAdd>
        </Link>
      )}
    </>
  );
};
