import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { bootcampsService } from "../../services/bootcampsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { Link, useLocation } from "react-router-dom";
import { Modal } from "../profile/Profile.styled";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export function BootcampTable() {
  const [bootcamps, setBootcamps] = useState([]);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [id, setId] = useState();

  useEffect(() => {
    getAllBootcamps();
  }, []);

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

  const getAllBootcamps = () => {
    bootcampsService.getAllBootcamps().then((res) => {
      setBootcamps(res);
    });
  };
  const location = useLocation();

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
                  reallyDelete(
                    `Seguro que quieres eliminar ${cellValues.row.bootcampName}?`,
                    cellValues.row.id
                  );
                }}
              >
                <i className="fa-regular fa-trash-can fa-lg"></i>
              </TableButton>

              <TableButton variant="contained" color="primary">
                <Link to={`/bootcamps/${cellValues.row.id}`}>
                  <i className="fa-regular fa-file fa-lg"></i>
                </Link>
              </TableButton>
            </CtTabBut>
          </>
        );
      },
    },
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "bootcampName",
      headerName: "Nombre",
      width: 130,
      renderCell: (params) => {
        return (
          <Link to={`/bootcamps/${params.row.id}/candidatos`}>
            <div className="rowitem">{params.row.bootcampName}</div>
          </Link>
        );
      },
    },
    {
      field: "category",
      headerName: "Categoría",
      width: 130,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.category.name}</div>;
      },
    },
    { field: "duration", headerName: "Duración / horas", width: 130 },
    { field: "characteristics", headerName: "Características", width: 130 },
    { field: "former", headerName: "Formador", width: 130 },
    { field: "coformer", headerName: "Co-formador", width: 130 },
    { field: "initialDate", headerName: "Fecha de inicio", width: 130 },
    { field: "finalDate", headerName: "Fecha de finalización", width: 130 },
    { field: "others", headerName: "Otros", width: 130 },
  ];

  const deleteBootcamp = (id) => {
    let filterBootcamps = bootcamps.filter((bootcamp) => bootcamp.id !== id);

    bootcampsService.deleteBootcamp(id).then((res) => {
      if (!res) return;
      if (res.error) {
        return;
      }
      setBootcamps(filterBootcamps);
    });
    handleClose();
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
          backgroundColor: "#fbfbfb",
          headerName: "#9d4848",
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
                <Button onClick={() => deleteBootcamp(id)} autoFocus>
                  Si
                </Button>
              </DialogActions>
            </Dialog>
          </Modal>
        ) : null}
        <DataGrid
          columns={columns}
          rows={bootcamps}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
      {location.pathname === "/bootcamps/create" ? null : (
        <Link to="/bootcamps/create">
          <BtnAdd>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnAdd>
        </Link>
      )}
    </>
  );
}

export default BootcampTable;
