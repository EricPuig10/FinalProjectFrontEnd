import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import { CtTabBut, TableButton } from "./DataTable.styled";

import { Link } from "react-router-dom";
import { processService } from "../../services/processService";

export function BootcampTable() {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    getAllProcess();
  }, []);

  const getAllProcess = () => {
    processService.getAllProcess().then((res) => {
      setProcess(res);
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
                // onClick={() => {
                //   deleteProcess(cellValues.row.id);
                // }}
              >
                <i className="fa-regular fa-trash-can fa-lg"></i>
              </TableButton>

              <TableButton variant="contained" color="primary">
                <Link to={`/procesos/${cellValues.row.id}/candidatos`}>
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
      field: "name",
      headerName: "Nombre",
      width: 130,
      renderCell: (params) => {
        return (
          <Link to={`/procesos/${params.row.id}/candidatos`}>
            <div className="rowitem">{params.row.name}</div>
          </Link>
        );
      },
    },
  ];

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
          rows={process}
          pageSize={10}
          rowsPerPageOptions={[10]}
        />
      </div>
      {/* {location.pathname === "/bootcamps/create" ? null : (
        <Link to="/bootcamps/create">
          <BtnAdd>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnAdd>
        </Link>
      )} */}
    </>
  );
}

export default BootcampTable;
