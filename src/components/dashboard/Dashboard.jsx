import React from 'react'
import List from '../List/List'
import {Button, CtButton, CtDashboard, CtTopbar} from "./Dashboard.styled";

function Dashboard() {


  return (
    <div>


    <CtDashboard>
      <CtTopbar>
        <CtButton>
          <Button>what

          </Button>
        </CtButton>
      </CtTopbar>

        <List/>
    </CtDashboard>
    </div>
  )
}

export default Dashboard