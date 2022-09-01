import React, { useState, useEffect } from "react";
import List from "../List/List";
import {
  CtBox,
  CtDashboard,
  CtList,
  CtTopbar,
} from "./Dashboard.styled";
import { candidatsService } from "../../services/candidatsService";
import { bootcampsService } from "../../services/bootcampsService";

function Dashboard() {
  const [candidats, setCandidats] = useState([]);
  const [bootcamps, setBootcamps] = useState([]);

  useEffect(() => {
    getAllBootcamps();
  }, []);

  // Get Candidates from a Bottcamp
  // I want when click bootcampBox apears candidates by bootcamp
  const getCandidatsByBootcampId = (id) => {
    candidatsService.getCandidatsByBootcampId(id).then((res) => {
      if (res) {
        setCandidats(res);
      }
    });
  };

  const getAllBootcamps = () => {
    bootcampsService.getAllBootcamps().then((res) => {
      setBootcamps(res);
    });
  };

  return (
    <div>
      <CtDashboard>
        <CtTopbar>
          <CtBox>
            BOOTCAMPS
            {bootcamps.map((bootcamp, key) => (
              <ul key={bootcamp.id}>{bootcamp.bootcampName}</ul>
            ))}

            {/* {candidats.map((candidat, key) => (
              <List key={key} candidat={candidat} />
            ))} */}

          </CtBox>
          <CtBox>BOX 2</CtBox>
          <CtBox>BOX 3</CtBox>
        </CtTopbar>
        <CtList>
          <List />
        </CtList>
      </CtDashboard>
    </div>
  );
}

export default Dashboard;
