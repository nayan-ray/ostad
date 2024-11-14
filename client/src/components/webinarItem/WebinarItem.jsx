import React from 'react'
import "./webinarItem.css"
import WebinarImage from '../../assets/images/asZ-Untitled.jpg'
import routine from "../../assets/images/routine.svg"

const WebinarItem = () => {
  return (
    <div className="webinar-item">
            <div className="webinar-item-wrapper">
                 <div className="webinar-item-image">
                     <img src={WebinarImage} alt="" />
                     <div className='title-small'>Full Stack Web Development with ASP.Net Core</div>
                 </div>
                 <div className="webinar-item-info">
                      <h3 className='webinar-item-title'>
                      ASP.NET Core শিখে ওয়েব ডেভেলপমেন্টঃ ক্যারিয়ার অপর্চুনিটিস, লার্নিং রোডম্যাপ ও লার্নিং রুটিন
                      </h3>
                      <div className="webinar-time-desc">
                           <div className="date-list">
                               {/* <img src={routine} alt="" /> */}
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM20 11H4V19H20V11ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM6 13H8V15H6V13ZM11 13H13V15H11V13ZM16 13H18V15H16V13Z" fill="currentColor"></path></svg>
                               <span>বৃহস্পতিবার, ১৪ নভেম্বর, রাত ৯:০০</span>
                           </div>
                           <button>
                               বিস্তারিত দেখি
                           </button>
                      </div>

                 </div>
            </div>   
    </div>
  )
}

export default WebinarItem
