import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

function DashboardPage() {
  return (
    <>
  <Navbar />
  <div>
    <Sidebar/>
    <Dashboard />    
  </div>
  
  </>
  )
}

export default DashboardPage