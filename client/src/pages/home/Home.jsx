import React from 'react'
import "./home.css"
import Topbar from '../../components/topbar/Topbar'
import Hero from '../../components/hero/Hero'
import Course from '../../components/course/Course'
import Webinar from '../../components/webinar/Webinar'
import Goal from '../../components/goal/Goal'
import LiveCourse from '../../components/liveCourse/LiveCourse'

const Home = () => {
  return (
    <div>
         <Topbar />
         <Hero  />
         <Course  />
         <Webinar />
         <Goal />
         <LiveCourse />
    </div>
  )
}

export default Home
