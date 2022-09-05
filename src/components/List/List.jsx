import React, { useEffect, useState } from "react";
import { bootcampsService } from "../../services/bootcampsService";
import { candidatsService } from "../../services/candidatsService";
import {CtTable, Table, Td, Th, Tr,Button} from "./List.styled";

function List() {
  const [candidats, setCandidats] = useState([]);
  const [bootcamps, setBootcamps] = useState([]);

  const getAllCandidats = () => {
    candidatsService.getAllCandidats().then((res) => {
      setCandidats(res);
    });
  };

  const getAllBootcamps = () => {
    bootcampsService.getAllBootcamps().then((res) => {
      setBootcamps(res);
    });
  };

  useEffect(() => {
    getAllCandidats();
    getAllBootcamps();
  }, []);

  return (
    <div>
      {bootcamps.map((bootcamp, key) => (
        <li key={bootcamp.id}>{bootcamp.bootcampName}</li>
      ))}

      <CtTable>
        <Table>
          <Tr>
            <Th>Name</Th>

            <Th>Lastname</Th>

            <Th>Second Name</Th>

            <Th>Email</Th>

            <Th>Phone</Th>

            <Th>Age</Th>

            <Th>Gender</Th>

            <Th>Nationality</Th>

            <Th>Laboral situation</Th>

            <Th>Solo Learn Progress</Th>

            <Th>Code Academy Progress</Th>

            <Th>Assisted Informative Session</Th>

            <Th>Bootcamp</Th>

          <Th>Process State</Th>

          <Th>actions</Th>
        </Tr>

        {candidats.map((candidat, key) => (
          
          <Tr key={key}>
            <Td>{candidat.name}</Td>

              <Td>{candidat.lastname}</Td>

              <Td>{candidat.secondlastname}</Td>

              <Td>{candidat.email}</Td>

              <Td>{candidat.phone}</Td>

              <Td>{candidat.age}</Td>

              <Td>{candidat.gender}</Td>

              <Td>{candidat.nationality}</Td>

              <Td>{candidat.laboralsituation}</Td>

              <Td>{candidat.sololearnprogress}</Td>

              <Td>{candidat.codeacademyprogress}</Td>

              <Td>
                {candidat.assistedtoinformativesession ? "True" : "false"}
              </Td>

              <Td>{candidat.bootcamp.bootcampName}</Td>

            <Td>{candidat.processState.name}</Td>

            <Td><Button>Edit</Button><Button>Delete</Button></Td>
          </Tr>
        ))}
      </Table>
    </CtTable>
    </div>
  );
}

export default List;
