//import useEffect
import React , { useState, useEffect } from 'react';
import "./courses.css"
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../homeComponents/footer/Footer'

import CatContainer from '../../components/coursesComponent/categoryCon/CatContainer'
import ItemContainer from '../../components/coursesComponent/itemContainer/ItemContainer'
import { damyData } from '../../damaData/data';

const Courses = () => {
  const [isDown, setIsDown] = useState(" ");
  const [data, setData] = useState(damyData);

  let scrollValue = 0;

  const handleScroll =()=>{
   
    let topy = window.scrollY;

 if(topy >100){
  if(topy < scrollValue){   
    setIsDown("up")

     console.log('up')
   }else if(topy > scrollValue){
     setIsDown('down')
     console.log('down');
    }else{
      setIsDown(" ")
      
    }
}else{
  setIsDown(" ")
}
     scrollValue = topy;
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      };
  },[])
  


  return (
    <div>
        <Topbar />
        <div className="courses-container">
           <div className= "category_container " >
              <div className={"category_wrapper " + isDown } >  
                <CatContainer />
              </div> 
           </div>
           {data.map((item, i)=>{
                return  <ItemContainer key={i} item={item} />
           })}
           
           <Footer />
        </div>
        
    </div>
  )
}

export default Courses
