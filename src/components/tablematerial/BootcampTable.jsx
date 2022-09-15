import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { bootcampsService } from "../../services/bootcampsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { FormBootcamp } from "../formCandidat/FormBootcamp";
import { Link } from "react-router-dom";

export function BootcampTable() {
  const [bootcamps, setBootcamps] = useState([]);

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
                  deleteBootcamp(cellValues.row.id);
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
          <Link to={`/bootcamps/${params.row.id}/candidats`}>
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
    let bootcampToDelete = bootcamps.filter((bootcamp) => bootcamp.id === id);
    let deleteConfirmed = window.confirm(
      `Confirm to delete ${bootcampToDelete[0].bootcampName} from the list`
    );
    if (!deleteConfirmed) return;
    let filterBootcamps = bootcamps.filter((bootcamp) => bootcamp.id !== id);

    bootcampsService.deleteBootcamp(id).then((res) => {
      if (!res) return;
      if (res.error) {
        console.log(res.error);

        return;
      }
      setBootcamps(filterBootcamps);
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
          backgroundColor: "#fbfbfb",
          headerName: "#9d4848",
        }}
      >
        <DataGrid
          columns={columns}
          rows={bootcamps}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
      <Link to="/bootcamps/create">
        <BtnAdd>
          <i className="fa-solid fa-plus fa-2xl"></i>
        </BtnAdd>
      </Link>
    </>
  );
}

export default BootcampTable;
