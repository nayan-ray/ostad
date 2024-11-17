import React from 'react'
import "./liveCourseItem.css"
import liveCourseImg from "../../assets/images/video-icon.png"

const LiveCourseItem = () => {
  return (
    <div className="live-course-item">
        <div className="live-course-item-wrapper">
             <div className="live-course-item-image">
                 <img src={liveCourseImg} alt="" />
             </div>
             <div className="live-course-info">
                  <h2 className="live-course-info-title">
                    ইন্ডাস্ট্রি ফোকাসড লাইভ কোর্সেস
                  </h2>
                  <span className="live-course-info-description">
                  কোর্স কমপ্লিটে পাচ্ছেন জব প্লেসমেন্ট টিমের থেকে লাইফটাইম সিভি, প্রোফাইল বিল্ড এবং জব এপ্লিকেশনসহ ইন্টেন্সিভ জব প্লেসমেন্ট সাপোর্ট। 
                  </span>
             </div>
        </div>
    </div>
  )
}

export default LiveCourseItem
