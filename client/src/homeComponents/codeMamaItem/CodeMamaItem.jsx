import React from 'react'
import "./codeMamaItem.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import mamaImg from "../../assets/images/codemama1-img.webp"
import skill from "../../assets/images/skill.webp"

const CodeMamaItem = ({item}) => {
  
  
  return (
    <div className="codeMamaItem">
         <div className="codeMamaItem-container">
             <div className="codeMamaItem-container-top">
                 <h1>আপনার কোডিং নলেজ এক্সপ্লোর করুন CodeMama -র সাথে</h1>
                 <button>Check Codemama <ArrowForwardIcon className='icon'/></button>
             </div>
             <div className="codeMamaItem-container-bottom">
                 <img src={item == 'item1' ? mamaImg : skill} alt="" />
             </div>
         </div>
    </div>
  )
}

export default CodeMamaItem
