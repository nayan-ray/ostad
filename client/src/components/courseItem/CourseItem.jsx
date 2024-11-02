import React from 'react'
import "./courseItem.css"
import courseThamnail from "../../assets/images/Python-Thumbnail.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CourseItem = () => {
  return (
    <div  className="course-item">
        <div className="course-item-container">
             <img src={courseThamnail} alt="" />
             <div className="batch-info"></div>
             <div className="batch-title">
                <h2>Full Stack Web Development with Python, Django & React</h2>
                 <button className="details">বিস্তারিত দেখি <ArrowForwardIcon /></button>
             </div>
        </div>       
    </div>
  )
}

export default CourseItem
