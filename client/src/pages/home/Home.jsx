import React from 'react'
import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Hero from '../../components/hero/Hero'
import Course from '../../components/course/Course'
import Webinar from '../../components/webinar/Webinar'
import Goal from '../../components/goal/Goal'
import LiveCourse from '../../components/liveCourse/LiveCourse'
import CodeMama from '../../homeComponents/codeMama/CodeMama'
import Business from '../../homeComponents/business/Business'
import RateCount from '../../homeComponents/rateCount/RateCount'
import GraduateComment from '../../homeComponents/graduateComments/GraduateComment'
import AppSec from '../../homeComponents/app/AppSec'
import Footer from '../../homeComponents/footer/Footer'

const Home = () => {
  return (
    <div>
         <Topbar />
         <Hero  />
         <Course  />
         <Webinar />
         <Goal />
         <LiveCourse />
         <CodeMama />
         <Business />
         <RateCount />
         <GraduateComment />
         <AppSec />
         <Footer />
    </div>
  )
}

export default Home
