import React, { useEffect, useState } from 'react'
import { candidatsService } from '../../services/candidatsService'


function List() {
    const [candidats, setCandidats] = useState([])
    const getAllCandidats = () => {
        candidatsService.getAllCandidats().then((res)=>{
            setCandidats(res);
        });
    }
    useEffect(()=>{
        getAllCandidats();
    },[]);
    console.log(candidats)
  return (
    <div>List</div>
  )
}

export default List