import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { candidatsService } from "../../services/candidatsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { Link } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  formLabelClasses,
} from "@mui/material";
import { Modal } from "../profile/Profile.styled";

export const DataTable = () => {
  const [candidats, setCandidats] = useState([]);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [id, setId] = useState();

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
                onClick={() =>
                  reallyDelete(`Quieres eliminar a ${cellValues.row.name}?`, cellValues.row.id)
                }
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
    handleClose();
  };

  const reallyDelete = (text, id) => {
    handleClickOpen();
    setText(text);
    setId(id);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        {open !== false ? (
          <Modal>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Atención"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {text}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={() => deleteCandidat(id)} autoFocus>
                  Si
                </Button>
              </DialogActions>
            </Dialog>
          </Modal>
        ) : null}
        <DataGrid
          columns={columns}
          type="text"
          aria-label="name"
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
        <BtnAdd type="button" aria-label="addbutton">
          <i className="fa-solid fa-plus fa-2xl"></i>
        </BtnAdd>
      </Link>
    </>
  );
};
