import React from 'react'
import "./goalItem.css"
import businessImg from "../../assets/images/business-and-marketing.png"

const GoalItem = () => {
  return (
    <div className="goal-item">
        <div className="goalItem-wrapper">
             <div className="img-div">
                <img src={businessImg} alt="business" />
             </div>
             <div className="goal-info">
                 <h2>Web & App Development</h2>
                 <p>• ৩০ কোর্স  • ৫ ওয়ার্কশপ</p>
             </div>
        </div>
    </div>
  )
}

export default GoalItem
