import React, { useRef, useState } from 'react'
import "./course.css"
import bookIcon from "../../assets/images/book-2-icons.svg"
import Category from '../category/Category'
import CourseItem from '../courseItem/CourseItem'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CatContainer from '../coursesComponent/categoryCon/CatContainer'

const Course = () => {
  const category = useRef();
  const [isScrollLeftVanish, setScrollLeftVanish] = useState(true);
  const [isScrollRightVanish, setScrollRightVanish] = useState(false);
 //create a function to scroll the category left and right
  
  
 
  function handleScroll(direction) {
     let width = category.current.offsetWidth;
     const categoryScrollWidth = category.current.scrollWidth;
     let scrollPosition = category.current.scrollLeft;
    
     
      if(direction === 'left'){   
        category.current.scrollLeft -= width;
         
      }
      if(direction === 'right'){

        category.current.scrollLeft += width;
  

      }

      // if(category.current.scrollLeft >= categoryScrollWidth - width){
      //   setScrollRightVanish(true);
      //   setScrollLeftVanish(false);
      // }else{
      //   setScrollLeftVanish(true);
      //   setScrollRightVanish(false);
      // }
      
      // if(category.current.scrollLeft <= 0){
      //   setScrollLeftVanish(false);
      //   setScrollRightVanish(true);
      // }else{
      //   setScrollLeftVanish(true);

      //   setScrollRightVanish(true)
      // }
      // if(category.current.scrollLeft > 0){
      //   setScrollRightVanish(false)
      //   setScrollLeftVanish(true);
      // }

      console.log(`width : ${width}`);
      console.log(`categoryScrollWith : ${categoryScrollWidth}`);
      console.log(` scrollLeft: ${scrollPosition}`);
      console.log(`category.current.scrollLeft : ${category.current.scrollLeft}`);
      console.log(categoryScrollWidth - width);

      if(scrollPosition + width > 0){
        setScrollRightVanish(true);
        setScrollLeftVanish(false);
      }else{
        setScrollRightVanish(false);
      }

      if(scrollPosition <= 0){
         setScrollLeftVanish(true);
         setScrollRightVanish(false);
      }else{
        setScrollLeftVanish(false);
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
                    <CatContainer />
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
