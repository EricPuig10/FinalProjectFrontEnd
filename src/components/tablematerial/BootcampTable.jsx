import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { bootcampsService } from "../../services/bootcampsService";
import { useEffect } from "react";
import { BtnAdd, CtTabBut, TableButton } from "./DataTable.styled";
import { FormBootcamp } from "../formCandidat/FormBootcamp";
import { Link } from "react-router-dom";

const initialBootcamp = {
  id: "",
  bootcampName: "",
  duration: "",
  category: "",
  characteristics: "",
  former: "",
  coformer: "",
  initialData: "",
  finalData: "",
};

export function BootcampTable() {
  const [bootcamps, setBootcamps] = useState([]);
  const [newBootcamp, setNewBootcamp] = useState({});
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

  const getBootcampById = (id) => {
    bootcampsService.getBootcampById(id).then((res => {
      if(res) {
        setNewBootcamp(res);
      }
    }))
  };

  const addNewBootcamp = (data) => {
    bootcampsService.addBootcamp(data).then((res) => {
      setBootcamps([...bootcamps, res]);
    });
    setIsShowForm(false);
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
                  editBootcamp(cellValues.row.id);
                }}
              >
                <i className="fa-regular fa-pen-to-square fa-lg"></i>
              </TableButton>

              <TableButton
                variant="contained"
                color="primary"
                onClick={() => {
                  deleteBootcamp(cellValues.row.id);
                }}
              >
                <i className="fa-regular fa-trash-can fa-lg"></i>
              </TableButton>

              <TableButton
                variant="contained"
                color="primary"
              >
                <Link to={`/bootcamps/${bootcamps.id}`}>
                <i className="fa-regular fa-file fa-lg"></i>
                </Link>
              </TableButton>
            </CtTabBut>
          </>
        );
      },
    },
    { field: "id", headerName: "ID", width: 90 },
    { field: "bootcampName", headerName: "Name", width: 130 },
    {
      field: "category",
      headerName: "Category",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="rowitem">{params.row.category.name}</div>
        );
      },
    },
    { field: "duration", headerName: "Duration", width: 130 },
    { field: "characteristics", headerName: "Characteristics", width: 130 },
    { field: "presential", headerName: "is Presential", width: 130 },
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
  };

  return (
    <>
      {isShowForm ? (
        <FormBootcamp
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
          height: 420,
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
        />
      </div>
      <BtnAdd onClick={showForm}>
        <i className="fa-solid fa-plus fa-2xl"></i>
      </BtnAdd>
    </>
  );
}

export default BootcampTable;
