import React from 'react'
import "./category.css"
import box_line from "../../assets/images/code-box-line.png"

const Category = () => {
  return (
    <div  className="category">
        <div className="category-wrapper">
            <img src={box_line} alt="" />
             <div className="category-desc">
                <h3>Web & App Development</h3>
                 <p>• ৩০ কোর্স • ৫ ওয়ার্কশপ</p>
             </div>
        </div>
       
    </div>
  )
}

export default Category
