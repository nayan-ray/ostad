import React from 'react'
import './footer.css'
import logo from "../../assets/images/ostadlogo.png"
import gplay from "../../assets/applogo/g-play.svg"
import appstore from "../../assets/applogo/icon-app-store.svg"
import playstore from "../../assets/applogo/win-store.svg"
import mail from "../../assets/applogo/mail-unread.svg"
import location from "../../assets/applogo/map-pin.svg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-wrapper">
               <div className="footer-col">  
                    <img src={logo} alt="logo" className='logo'/>
                    <p>অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।</p>
                    <div className="ostad-app">
                       <span>ডাউনলোড করুন ওস্তাদ অ্যাপ</span>
                       <div className="app-store">
                           <div className="app-item">
                               <img src={gplay} alt="gplay" />
                           </div>
                           <div className="app-item">
                               <img src={appstore} alt="appstore" />
                           </div>
                           <div className="app-item">
                               <img src={playstore} alt="playstore" />
                           </div>
                       </div>
                    </div>
               </div>
               <div className="footer-col">
                   <ul className="lists">
                       <li>
                           <p>কুইক লিংক</p>
                       </li>
                       <li>
                           <span>আপকামিং লাইভ ব্যাচ</span>
                       </li>
                       <li>
                           <span>ফ্রি কোর্সসমূহ</span>
                       </li>
                       <li>
                           <span>লাইভ ওয়ার্কশপ</span>
                       </li>
                       <li>
                           <span>ব্লগ</span>
                       </li>
                   </ul>
                </div>
               <div className="footer-colL">
                   <ul className="lists">
                       <li>
                           <p>কুইক লিংক</p>
                       </li>
                       <li className='footer-colL-item'>
                          <img src={mail} alt="mail" />
                           <span>support@ostad.app</span>
                       </li>
                       <li className='footer-colL-item'>
                           <img src={location} alt="location" />
                           <span>Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212</span>
                       </li>
                   </ul>
               </div>
               <div className="footer-col">
               <ul className="lists">
                       <li>
                           <p>কোম্পানি</p>
                       </li>
                       <li>
                           <span>আমাদের সম্পর্কে</span>
                       </li>
                       <li>
                           <span>রিফান্ড পলিসি</span>
                       </li>
                       <li>
                           <span>প্রাইভেসী পলিসি</span>
                       </li>
                       <li>
                           <span>টার্মস এবং শর্তাবলী</span>
                       </li>
                   </ul>
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
