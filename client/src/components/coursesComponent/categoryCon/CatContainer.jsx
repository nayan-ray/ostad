import React, { useRef, useState } from 'react'
import Category from '../../category/Category'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import "./catContainer.css"
import { damyData } from '../../../damaData/data';


const CatContainer = () => {
      const category = useRef();
      const [isScrollLeftVanish, setScrollLeftVanish] = useState(true);
      const [isScrollRightVanish, setScrollRightVanish] = useState(false);
      const [navData, setNavData] = useState(damyData);
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
    <div className='category-container' >
         <div className="course-center">
                        <div className="course-center-container" ref={category}>
                             {damyData.map((item, i)=>{
                                  return  <Category key={i} item={item} />
                             })}
                              
                              {/* <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  />
                              <Category  /> */}
                        </div>
                        <div className="back arrow" onClick={() => handleScroll('left') } style={{display: isScrollLeftVanish ? 'none' : ''}}>
                              <ArrowBackIosIcon  className='Icon' /> 
                        </div>
                        <div className="forward arrow" onClick={() => handleScroll('right') } style={{display: isScrollRightVanish ? 'none' : ''}}>
                              <ArrowForwardIosIcon className='Icon' />
                        </div>
         </div>
   </div>
  )
}

export default CatContainer
