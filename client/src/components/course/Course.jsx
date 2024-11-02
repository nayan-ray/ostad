import React from 'react'
import "./course.css"
import bookIcon from "../../assets/images/book-2-icons.svg"
import Category from '../category/Category'
import CourseItem from '../courseItem/CourseItem'

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

                        </div>
                    </div>
                    <div className="course-bottom">
                        <CourseItem  />

                    </div>
               </div>
         </div>
    </div>
  )
}

export default Course
