import React from 'react'
import "./category.css"
import box_line from "../../assets/images/code-box-line.png"

const Category = ({item}) => {
  const handleCatClick = (id)=>{
    const sect = window.document.getElementById(id);
    if(sect){
       const  scrollYZ = sect.getBoundingClientRect().top + window.scrollY  - 200;
       window.scrollTo({top: scrollYZ, behavior: 'smooth'});
    }
 }
  return (
    
        <div  onClick={()=> handleCatClick(item)} className="category">
        <div className="category-wrapper">
             <div className="img-container">
                 <img src={box_line} alt="" />
             </div>

             <div className="category-desc">
                <h3>Web & App Development</h3>
                 <span>• ৩০ কোর্স • ৫ ওয়ার্কশপ</span>
             </div>
        </div>
       
    </div>
   
    
  )
}

export default Category
