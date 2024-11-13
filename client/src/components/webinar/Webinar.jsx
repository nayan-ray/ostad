import React from 'react'
import "./webinar.css"
import webinar123 from "../../assets/images/importanIcon/Webinar123.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Webinar = () => {
  return (
    <div className='webinar'>
         <div className="webinar-container">
              <div className="webinar-wrapper">
                    <div className="webinar-title">
                          <h1>ফ্রি ওয়েবিনার দেখুন</h1> 
                          <p>দেখে নিন কি কি পাচ্ছেন ওস্তাদের লাইভ কোর্সে জয়েন করলে</p>
                    </div>
                    <div className="webinar-status">
                       <img src={webinar123} alt="" />
                       <span>আপকামিং লাইভ ওয়েবিনার</span>
                       <div></div>
                    </div>
                    <div className="webinar-items"></div>
                    <div className="webinar-button">
                        <button>
                            সব ওয়েবিনার দেখুন  <ArrowForwardIcon className='icon-webinar'/>
                        </button>
                    </div>
              </div>
         </div>
    </div>
  )
}

export default Webinar
