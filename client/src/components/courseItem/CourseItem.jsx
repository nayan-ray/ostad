import React from 'react'
import "./courseItem.css"
import courseThamnail from "../../assets/images/Python-Thumbnail.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BatchItem from '../batch-item/BatchItem';

const CourseItem = () => {
  return (
    <div  className="course-item-section hoverEffect">
        <div className="course-item-container">
             <div className="course-item-image ">
                <img src={courseThamnail} alt="" />
             </div>
             
             <div className="batch-info">
                 <div className="batch-info-wrapper">    
                     <span>ব্যাচ ৪</span>
                     <BatchItem />
                     <BatchItem />
                 </div>
             </div>
             <div className="batch-title">
                 <h3>Full Stack Web Development with Python, Django & React</h3>
                 <button className="details">বিস্তারিত দেখি <ArrowForwardIcon className='arrowICon'/></button>
             </div>
        </div>       
    </div>
  )
}

export default CourseItem
