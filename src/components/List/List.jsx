import React, { useEffect, useState } from "react";
import { candidatsService } from "../../services/candidatsService";

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
      <table>
        <tr>
          <th>Name</th>

          <th>Lastname</th>

          <th>Second Name</th>

          <th>Email</th>

          <th>Phone</th>

          <th>Age</th>

          <th>Gender</th>

          <th>Nationality</th>

          <th>Laboral situation</th>

          <th>Solo Learn Progress</th>

          <th>Code Academy Progress</th>

          <th>Assisted Informative Session</th>

          <th>Bootcamp</th>

          <th>Process State</th>
        </tr>

        {candidats.map((candidat, key) => (
          <tr key={candidat.id}>
            <td>{candidat.name}</td>

            <td>{candidat.lastname}</td>

            <td>{candidat.secondlastname}</td>

            <td>{candidat.email}</td>

            <td>{candidat.phone}</td>

            <td>{candidat.age}</td>

            <td>{candidat.gender}</td>

            <td>{candidat.nationality}</td>

            <td>{candidat.laboralsituation}</td>

            <td>{candidat.sololearnprogress}</td>

            <td>{candidat.codeacademyprogress}</td>

            <td>{candidat.assistedtoinformativesession ? "true" : "false"}</td>

            <td>{candidat.bootcamp.bootcampName}</td>

            <td>{candidat.processState.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default List;
