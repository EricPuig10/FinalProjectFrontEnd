import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Button,
  CtButton,
  CtLogo, 
  CtSidebar, 
  Logo } from './Sidebar.styled'

function Sidebar() {

  return (


    <CtSidebar>

       <CtLogo>
        <Logo src="https://www.rompemosloscodigos.org/wp-content/uploads/2020/06/logo-factoria-F5.png"></Logo>
        </CtLogo>

      <CtButton>
          <Link to="/Candidats">
            <Button>Candidats</Button>
          </Link>
          <Link to="/Bootcamp">
          <Button>Bootcamp</Button>
          </Link>
          <Link to="/Coders">
          <Button>Coders</Button>
          </Link>
          <Link to="/Settings">
          <Button>Settings</Button>
          </Link>
      </CtButton>
      
    </CtSidebar>
  )
}

export default Sidebar