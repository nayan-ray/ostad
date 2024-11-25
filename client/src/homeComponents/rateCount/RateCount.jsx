import React from 'react'
import "./rateCount.css"
import RateCountItem from '../rateCountItem/RateCountItem'

const RateCount = () => {
  return (
    <div className="rate-count">
         <div className="rateCount-container">
             <div className="rateCount-wrapper">
                 <RateCountItem rate ={1} />
                 <RateCountItem  rate ={2} />
                 <RateCountItem  rate ={3} />
                 <RateCountItem  rate ={4} />
             </div>
         </div>
    </div>
  )
}

export default RateCount
