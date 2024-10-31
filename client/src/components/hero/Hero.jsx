import React from 'react'
import "./hero.css";
import HeroLeftBottom from '../heroLeftBottom/HeroLeftBottom';
import heroLogo from "../../assets/images/comLogo/ostad_hero.webp"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <div  className="hero">
        <div className="hero-container">

            <div className="hero-wrapper">
                <div className="hero-left">
                     <div className="left-top">
                           <h1> বাংলাদেশ শিখবে <span>লাইভে</span> </h1>
                           <p>স্কিল শেখার মাধ্যমে বদলে ফেলুন নিজের ভবিষ্যৎ</p>
                           <button className=''>শেখা শুরু করুন <ArrowForwardIcon className='arrow'/></button>
                     </div>
                      <div className="left-bottom">
                          <HeroLeftBottom />

                      </div>
                </div>
                <div className="hero-right">
                    <img  src={heroLogo} alt="" />
                </div>
                <div className="hero-logo-sect">
                    <HeroLeftBottom />
                </div>
            </div>
            
            <div className="background-color-sect">
                <div className="background-color-wrapper">
                      <div className="color-1"></div>
                      <div className="color-2"></div>
                      <div className="color-3"></div>
                      <div className="color-4"></div>
                      <div className="color-5"></div>
                      <div className="color-6"></div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Hero
