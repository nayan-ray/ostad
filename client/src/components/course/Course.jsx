import React from 'react'
import "./course.css"
import bookIcon from "../../assets/images/book-2-icons.svg"
import Category from '../category/Category'
import CourseItem from '../courseItem/CourseItem'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Course = () => {
  return (
    <div  className="course-section">
         <div className="course-container">
               <div className="course-wrapper">
                    <div className="course-top">
                        <div className="course-title-section">
                            <h1>আমাদের কোর্সসমুহ</h1>
                            <img src={bookIcon} alt="" />
                        </div>
                    </div>
                    <div className="course-center">
                        <div className="course-center-container">
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                        </div>
                        <div className="back arrow">
                              <ArrowBackIosIcon  className='Icon'/> 
                        </div>
                        <div className="forward arrow">
                              <ArrowForwardIosIcon className='Icon' />
                        </div>
                    </div>
                    <div className="course-bottom">
                        <CourseItem  />
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
  )
}

export default Course
