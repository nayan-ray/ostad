import React, { useRef, useState } from 'react'
import "./course.css"
import bookIcon from "../../assets/images/book-2-icons.svg"
import Category from '../category/Category'
import CourseItem from '../courseItem/CourseItem'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Course = () => {
  const category = useRef();
  const [scrollLeft, setScrollLeft] = useState(false);
  const [scrollRight, setScrollRight] = useState(false);
 //create a function to scroll the category left and right
 
 let scrollWidth = category.current.scrollWidth;
 let Dimension = category.current.getBoundingClientRect();
 let width = Dimension.width;
 let clientWidth = category.current.clientWidth;
 let scrollLeft1 = category.current.scrollLeft; 
    console.log(width);
    console.log(scrollWidth);
    console.log(clientWidth);
    console.log(scrollLeft1);
 if(scrollLeft === 0){
  setScrollLeft(true);
}else{
  setScrollLeft(false);
}
if(scrollLeft === (scrollWidth - clientWidth)){
  setScrollRight(true);
}else{
  setScrollRight(false);
}

  function handleScroll(direction) {
   


      if(direction === 'left'){
        category.current.scrollLeft -= width;
      }else{
        category.current.scrollLeft += width;
      }

      
  }   
  
  

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
                        <div className="course-center-container" ref={category}>
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                        </div>
                        <div className="back arrow" onClick={() => handleScroll('left') } style={{display: scrollLeft ? 'none' : ''}}>
                              <ArrowBackIosIcon  className='Icon' /> 
                        </div>
                        <div className="forward arrow" onClick={() => handleScroll('right') } style={{display: scrollRight ? 'none' : ''}}>
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
