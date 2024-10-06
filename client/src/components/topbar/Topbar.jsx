import React from 'react'
import "./topbar.css"
import logo from "../../assets/images/ostadlogo.png";
import search from "../../assets/images/search.svg"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Topbar = () => {
  return (
    <div className='topBar'>
          <div className="topBar-wrapper">
               <div className="topBar-left">
                     <img className='d-none' src="https://cdn.ostad.app/public/upload/2024-03-10T05-11-30.796Z-single-logo.svg" alt="" />

                     <img className='topBar-logo ' src={logo} alt="" />

                    <div className="topBar-items">
                       <div className="searchBar">
                          <img className='search-icon' src={search} alt="" /> 
                           কোর্স সার্চ করুন
                       </div>
                       <div className="topbar-item-lists">

                           <button className='special-button'>
                              <img alt="special-icon" className='special-icon'  src="https://cdn.ostad.app/public/upload/2024-03-20T04-42-25.711Z-material-symbols_auto-awesome.png" />

                               স্পেশাল অফার
                          </button>
                          <span className="topBar-item">
                                  কোড মামা
                          </span>

                          <span className="topBar-item">
                                  ফ্রী কোর্সেস
                          </span>


                          <span className="topBar-item">
                              ব্লগ
                          </span>
                          <div class="dropdown">
                             <button class="btn topBar-item " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 ডাউনলোড
                                 <KeyboardArrowDownOutlinedIcon className='arrow-down-icon'/>
                             </button>
                             <ul class="dropdown-menu">
                                 <li><a class="dropdown-item" href="#">Action</a></li>
                                 <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                          </div>


                       </div>

                  </div>
                    

               </div>
               <div className="topBar-right">
                      <div className='topBar-right-item notification'>
                           <NotificationsNoneOutlinedIcon />
                          <span  className="notification-count">

                              20  
                          </span>  
                      </div>
                      <div className="topBar-right-item language">
                           <img className='lang-img'  src="https://cdn.ostad.app/public/upload/2023-08-06T04-12-22.324Z-imageE66.png" alt='language'/>
                           EN
                      </div>
                      <div className="topBar-right-item course">
                          সব কোর্স
                          <KeyboardArrowDownOutlinedIcon className=' course-icon'/>
                      </div>
                      <div className="topBar-right-item login">
                        login
                      </div>
               </div>
          </div>   
    </div>
  )
}

export default Topbar
