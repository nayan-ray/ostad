import React, { useEffect, useState } from 'react'
import "./topbar.css"
import dashboard from "../../assets/images/dashboard-line.svg";
import logo from "../../assets/images/ostadlogo.png";
import person from "../../assets/images/defaultpersonicon.jpg";
import search from "../../assets/images/search.svg"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import menubar from  "../../assets/images/menubar.png";
import SpecialButton from '../specialButton/SpecialButton';



const Topbar = () => {
  const [isLogged, setIslogged] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  let scrollValue = 0;

  const handleScroll =()=>{
   
    let topy = window.scrollY;
     if(topy < scrollValue){   
      setIsScrolled(false);
       console.log('visible')
     }else if(topy > scrollValue){
      setIsScrolled(true);
       console.log('hidden');
      }else{
        setIsScrolled(false);
        console.log('hidden no');
      }
     scrollValue = topy;
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      };
  },[])
  return (
    <div className={`topBar ${isScrolled ? "scrolled" : ""} `}>
          <div className="topBar-wrapper">
               <div className="topBar-left">
                     <img className='small-topBar-logo' src="https://cdn.ostad.app/public/upload/2024-03-10T05-11-30.796Z-single-logo.svg" alt="" />

                     <img className='topBar-logo ' src={logo} alt="" />
                     {/* search icon for mobile */}
                     <div className="searchBar-small">
                          <img className='search' src={search} alt="" />    
                     </div>

                    <div className="topBar-items">
                       <div className="searchBar">
                          <img className='search-icon' src={search} alt="" /> 
                           কোর্স সার্চ করুন
                       </div>
                       <div className="topbar-item-lists">

                           <div className="special-button-big">
                              <SpecialButton />
                           </div>
                          
                          <span className="topBar-item codemama-item">
                                  কোড মামা
                          </span>

                          <span className="topBar-item course-item">
                                  ফ্রী কোর্সেস
                          </span>


                          <span className="topBar-item blog-item">
                              ব্লগ
                          </span>

                          <div class="dropdown-mobile">
                             <button class="btn topBar-item " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 
                                 <KeyboardArrowDownOutlinedIcon className='arrow-down-icon'/>
                                  আরও
                             </button>
                             <ul class="dropdown-menu ">
                                 <li className='item-codemama mb-1'><a class="dropdown-item d-flex align-items-center justify-content-between " href="#">কোড মামা <ArrowForwardIcon className='fs-6' /></a></li>
                                 <li className='item-course mb-1'><a class="dropdown-item d-flex align-items-center justify-content-between " href="#">ফ্রী কোর্সেস <ArrowForwardIcon  className='fs-6'/></a></li>
                                 <li className='item-blog mb-1'><a class="dropdown-item d-flex align-items-center justify-content-between " href="#">ব্লগ <ArrowForwardIcon  className='fs-6'/></a></li>
                                 <li className='item-download mb-1'><a class="dropdown-item d-flex align-items-center justify-content-between " href="#">ডাউনলোড <KeyboardArrowDownOutlinedIcon className='fs-6'/></a></li>
                                 <li className='item-notification mb-1'><a class="dropdown-item d-flex align-items-center justify-content-between " href="#">নোটিফিকেশন <ArrowForwardIcon className='fs-6'/></a></li>
                                 <li className=' item-language mb-1'><a class="dropdown-item d-flex align-items-center justify-content-center" href="#">
                                  
                                    <div className="topBar-right-item language ">
                                      <img className='lang-img me-2'  src="https://cdn.ostad.app/public/upload/2023-08-06T04-12-22.324Z-imageE66.png" alt='language'/>
                                       EN
                                    </div>
                                  
                                  </a></li>
                            </ul>
                          </div>

                          <div class="dropdown-big">
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
                          <div className="notification-wrapper">
                              <NotificationsNoneOutlinedIcon />
                              <span  className="notification-count">

                                  20  
                              </span>  
                          </div>
                          
                      </div>
                      <div className="topBar-right-item language">
                           <img className='lang-img'  src="https://cdn.ostad.app/public/upload/2023-08-06T04-12-22.324Z-imageE66.png" alt='language'/>
                           EN
                      </div>
                      <div className="topBar-right-item course">
                          সব কোর্স
                          <KeyboardArrowDownOutlinedIcon className=' course-icon'/>
                      </div>
                       <div className="special-button-small">
                         <SpecialButton />

                       </div>
                      <div className="topBar-right-item course course-small">
                           কোর্স
                          <KeyboardArrowDownOutlinedIcon className=' course-icon'/>
                      </div>
                      {!isLogged ? 
                      
                        (<div className="  topBar-right-item login">
                           login
                        </div>)
                         :
                         (
                         <div className="profile-button-section">
                            <div className="dashboard">
                               ড্যাশবোর্ড
                               <img className='dashboard-icon' src={dashboard} alt="" />
                            </div>

                            <div className="profile-btn">
                               <img className='person-icon' src={person} alt="" />
                               <div className="icon-div">
                                  <KeyboardArrowDownOutlinedIcon className='arrow-down-icon' />
                               </div>
                            </div>
                          
                          </div>  )
                    
                     }

                      <div className="topBar-right-item profile-icon">

                            <img className='menu-img'  src={menubar} alt='language'/>                 
                      </div> 
                      
                     

               </div>
          </div>   
    </div>
  )
}

export default Topbar
