import React from 'react'
import List from '../List/List'
import {CtDashboard} from "./Dashboard.styled";

function Dashboard() {
  return (
    <div className='dashboard'>
    <CtDashboard>
        <List/>
    </CtDashboard>
    </div>
  )
}

export default Dashboard