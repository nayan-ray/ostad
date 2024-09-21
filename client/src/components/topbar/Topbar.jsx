import React from 'react'
import "./topbar.css"
import logo from "../../assets/images/ostadlogo.png";
import search from "../../assets/images/search.svg"

const Topbar = () => {
  return (
    <div className='topBar'>
          <div className="topBar-wrapper">
               <div className="topBar-left">
                    <img className='topBar-logo' src={logo} alt="" />
                    <div className="searchBar">
                        <img src={search} alt="" /> 
                        কোর্স সার্চ করুন
                    </div>
                    <button>
                      <img alt="special-icon"  src="https://cdn.ostad.app/public/upload/2024-03-20T04-42-25.711Z-material-symbols_auto-awesome.png" />

                       স্পেশাল অফার
                    </button>
                    <span className="topBar-item">
                          ফ্রী কোর্সেস
                    </span>
                    <span className="topBar-item">
                           ব্লগ
                    </span>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              ডাউনলোড
                        </button>
                        <ul class="dropdown-menu">
                             <li><a class="dropdown-item" href="#">Action</a></li>
                             <li><a class="dropdown-item" href="#">Another action</a></li>
                             <li><a class="dropdown-item" href="#">Something else here</a></li>
                       </ul>
                    </div>

               </div>
               <div className="topBar-right">
                       <button type="button" class="btn btn-primary position-relative rounded-circle">
                            Inbox
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                       99+
                               <span class="visually-hidden">unread messages</span>
                            </span>
                      </button>
                      <div className="right-item">
                           <img  src="https://cdn.ostad.app/public/upload/2023-08-06T04-12-22.324Z-imageE66.png" />
                           EN
                      </div>
                      <div className="login">
                        login
                      </div>
               </div>
          </div>   
    </div>
  )
}

export default Topbar
