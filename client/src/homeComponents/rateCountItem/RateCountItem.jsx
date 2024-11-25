import React from 'react'
import "./rateCountItem.css"

const RateCountItem = ({rate}) => {
    let rateClass;
    if(rate === 1){
        rateClass = "rate-1";
    } else if(rate === 2){
        rateClass = "rate-2";
        } else if(rate === 3){
            rateClass = "rate-3";
                } else{
                    rateClass = "rate-4";
                }
    
  return (
    <div className={`rate-count-item ${rateClass}`}>
        <div className="rateCountItem-wrapper">
             <span className='rate-header'>৭০০০+</span>
             <span className='rate-body'>জব প্লেসমেন্ট</span>
        </div>
    </div>
  )
}

export default RateCountItem
