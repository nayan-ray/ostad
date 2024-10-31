import React from 'react'
import "./heroLeftBottom.css"
import brainStation from "../../assets/images/comLogo/Brainstation.webp"
import TECHNOSOFTLOGO from "../../assets/images/comLogo/TECHNOSOFT-LOGO.webp"
import Z253 from "../../assets/images/comLogo/253Z-1.png"
import Z548 from "../../assets/images/comLogo/548Z-3.png"
import Z738 from "../../assets/images/comLogo/738Z-2.png"
import ashthait from "../../assets/images/comLogo/ashthait.webp"
import Excel from "../../assets/images/comLogo/Excel.webp"
import Gtr from "../../assets/images/comLogo/Gtr.webp"
import Revesystems from "../../assets/images/comLogo/Revesystems.webp"
import Sofolit from "../../assets/images/comLogo/Sofolit.webp"

const HeroLeftBottom = () => {
  return (
    
    <div className="hero-left-bottom">
        <p>৭০০০+ গ্র্যাজুয়েটরা কর্মরত আছেন বিভিন্ন দেশি ও বিদেশি প্রতিষ্ঠানে:</p>
        <div className="logo-sect">
           <img src={brainStation} alt="" />
           <img src={TECHNOSOFTLOGO} alt="" />
           <img src={Excel} alt="" />
           <img src={Gtr} alt="" />
           <img src={ashthait} alt="" />
           <img src={Revesystems} alt="" />
           <img src={Sofolit} alt="" />
           <img src={Z738} alt="" />
           <img src={Z548} alt="" />
           <img src={Z253} alt="" />
        </div>
    </div>
       
  )
}

export default HeroLeftBottom
