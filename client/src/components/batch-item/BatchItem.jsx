import React from 'react'
import "./batchItem.css"
import teamLine from "../../assets/images/team-line1(1).svg"

const BatchItem = () => {
  return (
    <div className='batch-item'>
        <img src={teamLine} alt="" />
        <small>৩৬ সিট বাকি</small>
    </div>
  )
}

export default BatchItem
