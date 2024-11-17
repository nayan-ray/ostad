import React from 'react'
import "./goal.css"
import GoalItem from '../goalItem/GoalItem'

const Goal = () => {
  return (
    <div className="goal">
        <div className="goal-container">
            <div className="goal-wrapper">
                  <div className="goal-top">
                      <h1>ক্যারিয়ার গোল সেট করুন</h1>
                      <p>নিচের অপশন গুলো থেকে আপনার গোল সিলেক্ট করে শেখা শুরু করুন</p>
                  </div>
                  <div className="goal-bottom">
                       <GoalItem />
                       <GoalItem />
                       <GoalItem />
                       <GoalItem />
                       <GoalItem />
                       <GoalItem />
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Goal
