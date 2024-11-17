import React from 'react'
import "./liveCourse.css"
import LiveCourseItem from '../liveCourseItem/LiveCourseItem'

const LiveCourse = () => {
  return (
    <div className='live-course'>
         <div className="live-course-container">
              <div className="live-course-wrapper">
                    <div className="live-course-top">
                        <h1>কি কি পাচ্ছেন লাইভ কোর্সে</h1>
                        <p>দেখে নিন কি কি পাচ্ছেন ওস্তাদের লাইভ কোর্সে জয়েন করলে</p>
                    </div>
                    <div className="live-course-bottom">
                       <div className="live-course-bottom-container">
                           <LiveCourseItem />
                           <LiveCourseItem />
                           <LiveCourseItem />
                           <LiveCourseItem />
                           <LiveCourseItem />
                           <LiveCourseItem />
                       </div>

                    </div>
              </div>
         </div>
    </div>
  )
}

export default LiveCourse
