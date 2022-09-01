import React, { useEffect, useState } from "react";
import { candidatsService } from "../../services/candidatsService";
import { CtTable, Table, Td, Th, Tr } from "./List.styled";

function List() {
  const [candidats, setCandidats] = useState([]);
  const getAllCandidats = () => {
    candidatsService.getAllCandidats().then((res) => {
      setCandidats(res);
    });
  };
  useEffect(() => {
    getAllCandidats();
  }, []);
  console.log(candidats);
  return (
    <div>
      <div>List</div>
      {/* {candidats.map((candidat, key) => (
        <div key={candidat.id}>
          <p>{candidat.name}</p>
          <p>{candidat.lastname}</p>
          <p>{candidat.secondlastname}</p>
          <p>{candidat.email}</p>
          <p>{candidat.phone}</p>
          <p>{candidat.age}</p>
        </div>
      ))} */}
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
        </Tr>

        {candidats.map((candidat, key) => (
          <Tr key={candidat.id}>
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

            <Td>{candidat.assistedtoinformativesession ? "True" : "false"}</Td>

            <Td>{candidat.bootcamp.bootcampName}</Td>

            <Td>{candidat.processState.name}</Td>
          </Tr>
        ))}
      </Table>
    </CtTable>
    </div>
  );
}

export default List;
