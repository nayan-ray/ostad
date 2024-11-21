import React from 'react'
import "./business.css"
import amara from "../../assets/images/Amara.png"
import min2 from "../../assets/images/min2.png"
import client from "../../assets/images/client.png"
import min from "../../assets/images/min.png"
import business from "../../assets/images/bg-business.webp"


const Business = () => {
  return (
    <div className="business">
        <div className="business-container">
            <div className="business-wrapper">
                <div className="business-left">
                     <div className="business-info">
                        <h3>Ostad for business</h3>
                        <p>জয়েন করুন আমাদের কর্পোরেট স্কিলস ট্রেইনিং প্রোগ্রামে, ট্রেইনিং নিন দেশ সেরা ইন্ডাস্ট্রি এক্সপার্টদের থেকে আর সাজিয়ে নিন আপনার টিমকে নতুনভাবে।</p>
                     </div>
                     <button>বিস্তারিত দেখি</button>
                     <div className="client-info">
                        <h3>আমাদের ক্লায়েন্ট</h3>
                        <div className="client-logos">
                            <img src={client} alt="" />
                            <img src={min} alt="" />
                            <img src={amara} alt="" />
                            <img src={min2} alt="" />
                        </div>
                     </div>
                </div>
                <div className="business-right">
                    <img src={business} alt="" />
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Business
