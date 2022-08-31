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
      {candidats.map((candidat, key) => (
        <div key={candidat.id}>
          <p>{candidat.name}</p>
          <p>{candidat.lastname}</p>
          <p>{candidat.secondlastname}</p>
          <p>{candidat.email}</p>
          <p>{candidat.phone}</p>
          <p>{candidat.age}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
