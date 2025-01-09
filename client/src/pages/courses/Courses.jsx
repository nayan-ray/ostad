import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../homeComponents/footer/Footer'

import CatContainer from '../../components/coursesComponent/categoryCon/CatContainer'

const Courses = () => {
  return (
    <div>
        <Topbar />
        <div className="courses-container">
           <div className="category-container">
              <CatContainer />
           </div>
            
           <Footer />
        </div>
        
    </div>
  )
}

export default Courses
