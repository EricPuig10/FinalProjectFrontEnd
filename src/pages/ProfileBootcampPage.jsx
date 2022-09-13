import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ProfileBootcamp from '../components/profilemui/ProfileBootcamp'

import Sidebar from '../components/sidebar/Sidebar'

function ProfileBootcampPage() {
  return (
    <>

    <Navbar/>
    <div>
    <Sidebar/>

    <ProfileBootcamp/>
    </div>



</>
  )
}

export default ProfileBootcampPage