import React from 'react'

import bookIcon from "../../../assets/images/book-2-icons.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./itemContainer.css"
import CourseItem from '../../courseItem/CourseItem'

const ItemContainer = ({item}) => {
   
return (
 <div id={item}>
      <div  className="course-section">
         <div className="course-container">
               <div className="course-wrapper">
                    <div className="course-top">
                        <div className="course-title-section">
                            <h1>আমাদের কোর্সসমুহ</h1>
                            <img src={bookIcon} alt="" />
                        </div>
                    </div>
                    
                    <div className="course-bottom">
                        <CourseItem />
                        <CourseItem  />
                        <CourseItem  />
                        <CourseItem  />
                        <CourseItem  />
                        <CourseItem  />
                        <CourseItem  />
                        <CourseItem  />
              
                    </div>
                    <div className="course-bottom-button">
                        <div className="course-button-container">
                            সব দেখুন <ArrowForwardIcon className='arrowICon'/>
                        </div>
                    </div>
               </div>
         </div>
    </div>
 </div>    
     
  )
}

export default ItemContainer
